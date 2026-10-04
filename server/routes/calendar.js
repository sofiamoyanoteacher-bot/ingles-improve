const express = require('express');
const db = require('../db');
const { verifyToken, requireTeacher } = require('../middleware/auth');

const router = express.Router();
router.use(verifyToken, requireTeacher);

// ── Availability ─────────────────────────────────────────────────────────────

router.get('/availability', (req, res) => {
  const slots = db.prepare(
    'SELECT * FROM teacher_availability WHERE teacher_id = ? ORDER BY day_of_week, hour, minute'
  ).all(req.user.id);
  res.json({ slots });
});

router.put('/availability', (req, res) => {
  // Replace all availability for this teacher with the new list
  const { slots } = req.body || {};
  if (!Array.isArray(slots)) return res.status(400).json({ error: 'slots must be an array' });
  const del = db.prepare('DELETE FROM teacher_availability WHERE teacher_id = ?');
  const ins = db.prepare(
    'INSERT OR IGNORE INTO teacher_availability (teacher_id, day_of_week, hour, minute) VALUES (?,?,?,?)'
  );
  const run = db.transaction(() => {
    del.run(req.user.id);
    for (const s of slots) {
      ins.run(req.user.id, Number(s.day_of_week), Number(s.hour), Number(s.minute || 0));
    }
  });
  run();
  const updated = db.prepare(
    'SELECT * FROM teacher_availability WHERE teacher_id = ? ORDER BY day_of_week, hour, minute'
  ).all(req.user.id);
  res.json({ slots: updated });
});

// ── Scheduled classes ────────────────────────────────────────────────────────

router.get('/classes', (req, res) => {
  const { from, to } = req.query;
  let sql = `SELECT sc.*, u.name AS student_name, u.last_name AS student_last_name, u.email AS student_email
    FROM scheduled_classes sc
    JOIN users u ON u.id = sc.student_id
    WHERE sc.teacher_id = ?`;
  const params = [req.user.id];
  if (from) { sql += ' AND sc.scheduled_at >= ?'; params.push(from); }
  if (to)   { sql += ' AND sc.scheduled_at <= ?'; params.push(to); }
  sql += ' ORDER BY sc.scheduled_at';
  const classes = db.prepare(sql).all(...params);
  // attach attendance
  const attStmt = db.prepare('SELECT * FROM class_attendance WHERE class_id = ?');
  res.json({ classes: classes.map((c) => ({ ...c, attendance: attStmt.all(c.id) })) });
});

router.post('/classes', (req, res) => {
  const { student_id, scheduled_at, duration_min, meet_link, notes, recur_days, recur_until } = req.body || {};
  if (!student_id || !scheduled_at) return res.status(400).json({ error: 'student_id and scheduled_at required' });
  const student = db.prepare('SELECT id FROM users WHERE id = ? AND role = ?').get(student_id, 'student');
  if (!student) return res.status(404).json({ error: 'Alumno no encontrado' });

  const ins = db.prepare(
    `INSERT INTO scheduled_classes (teacher_id, student_id, scheduled_at, duration_min, meet_link, notes, recurrence_group_id)
     VALUES (?,?,?,?,?,?,?)`
  );
  const dur = Number(duration_min) || 60;
  const meet = meet_link || '';
  const n = notes || '';

  // Recurring: generate all instances
  if (Array.isArray(recur_days) && recur_days.length > 0 && recur_until) {
    const groupId = `grp_${Date.now()}_${req.user.id}`;
    const base = new Date(scheduled_at);
    const until = new Date(recur_until);
    until.setHours(23, 59, 59);
    const days = recur_days.map(Number);

    const createAll = db.transaction(() => {
      const created = [];
      const cur = new Date(base);
      // start from Monday of the base week so we don't miss the base day itself
      cur.setHours(base.getHours(), base.getMinutes(), 0, 0);
      // scan day by day from base date to until
      const scan = new Date(base);
      while (scan <= until) {
        if (days.includes(scan.getDay())) {
          const dt = new Date(scan);
          dt.setHours(base.getHours(), base.getMinutes(), 0, 0);
          const iso = dt.toISOString().slice(0, 16).replace('T', ' ');
          const info = ins.run(req.user.id, student_id, iso, dur, meet, n, groupId);
          created.push(db.prepare('SELECT * FROM scheduled_classes WHERE id = ?').get(info.lastInsertRowid));
        }
        scan.setDate(scan.getDate() + 1);
      }
      return created;
    });
    const classes = createAll();
    return res.status(201).json({ classes, count: classes.length });
  }

  // Single class
  const info = ins.run(req.user.id, student_id, scheduled_at, dur, meet, n, null);
  const created = db.prepare('SELECT * FROM scheduled_classes WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json({ class: created, classes: [created], count: 1 });
});

router.put('/classes/:id', (req, res) => {
  const cls = db.prepare('SELECT * FROM scheduled_classes WHERE id = ? AND teacher_id = ?').get(req.params.id, req.user.id);
  if (!cls) return res.status(404).json({ error: 'Clase no encontrada' });
  const { scheduled_at, duration_min, meet_link, notes, status } = req.body || {};
  const VALID_STATUS = ['scheduled', 'done', 'cancelled'];
  db.prepare(`UPDATE scheduled_classes SET
    scheduled_at = COALESCE(?, scheduled_at),
    duration_min = COALESCE(?, duration_min),
    meet_link = COALESCE(?, meet_link),
    notes = COALESCE(?, notes),
    status = COALESCE(?, status)
    WHERE id = ?`).run(
    scheduled_at ?? null,
    duration_min != null ? Number(duration_min) : null,
    meet_link ?? null,
    notes ?? null,
    status && VALID_STATUS.includes(status) ? status : null,
    cls.id
  );
  const updated = db.prepare('SELECT * FROM scheduled_classes WHERE id = ?').get(cls.id);
  res.json({ class: updated });
});

router.delete('/classes/:id', (req, res) => {
  const cls = db.prepare('SELECT * FROM scheduled_classes WHERE id = ? AND teacher_id = ?').get(req.params.id, req.user.id);
  if (!cls) return res.status(404).json({ error: 'Clase no encontrada' });
  const { all_in_group } = req.query;
  if (all_in_group === '1' && cls.recurrence_group_id) {
    const siblings = db.prepare('SELECT id FROM scheduled_classes WHERE recurrence_group_id = ? AND teacher_id = ?')
      .all(cls.recurrence_group_id, req.user.id);
    const delAtt = db.prepare('DELETE FROM class_attendance WHERE class_id = ?');
    const delCls = db.prepare('DELETE FROM scheduled_classes WHERE id = ?');
    db.transaction(() => { for (const s of siblings) { delAtt.run(s.id); delCls.run(s.id); } })();
    return res.json({ ok: true, deleted: siblings.length });
  }
  db.prepare('DELETE FROM class_attendance WHERE class_id = ?').run(cls.id);
  db.prepare('DELETE FROM scheduled_classes WHERE id = ?').run(cls.id);
  res.json({ ok: true, deleted: 1 });
});

// ── Attendance / material ────────────────────────────────────────────────────

router.put('/classes/:id/attendance', (req, res) => {
  const cls = db.prepare('SELECT * FROM scheduled_classes WHERE id = ? AND teacher_id = ?').get(req.params.id, req.user.id);
  if (!cls) return res.status(404).json({ error: 'Clase no encontrada' });
  const { attended, material_covered } = req.body || {};
  db.prepare(`INSERT INTO class_attendance (class_id, student_id, attended, material_covered)
    VALUES (?,?,?,?)
    ON CONFLICT(class_id, student_id) DO UPDATE SET
      attended = excluded.attended,
      material_covered = excluded.material_covered`)
    .run(cls.id, cls.student_id, attended ? 1 : 0, material_covered || '');
  // mark class as done
  db.prepare("UPDATE scheduled_classes SET status = 'done' WHERE id = ?").run(cls.id);
  res.json({ ok: true });
});

// ── Messages ─────────────────────────────────────────────────────────────────

router.get('/messages', (req, res) => {
  const { studentId } = req.query;
  let sql = `SELECT m.*, u.name, u.last_name FROM student_messages m
    JOIN users u ON u.id = m.student_id WHERE m.teacher_id = ?`;
  const params = [req.user.id];
  if (studentId) { sql += ' AND m.student_id = ?'; params.push(studentId); }
  sql += ' ORDER BY m.created_at';
  const messages = db.prepare(sql).all(...params);
  // mark teacher-side as read
  if (studentId) {
    db.prepare("UPDATE student_messages SET read_by_teacher = 1 WHERE teacher_id = ? AND student_id = ?")
      .run(req.user.id, studentId);
  }
  res.json({ messages });
});

router.post('/messages', (req, res) => {
  const { student_id, body } = req.body || {};
  if (!student_id || !body) return res.status(400).json({ error: 'student_id and body required' });
  const student = db.prepare('SELECT id FROM users WHERE id = ? AND role = ?').get(student_id, 'student');
  if (!student) return res.status(404).json({ error: 'Alumno no encontrado' });
  const info = db.prepare(
    `INSERT INTO student_messages (student_id, teacher_id, sender_role, body, read_by_teacher)
     VALUES (?,?,?,?,?)`
  ).run(student_id, req.user.id, 'teacher', body, 1);
  const msg = db.prepare('SELECT * FROM student_messages WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json({ message: msg });
});

router.get('/messages/unread-count', (req, res) => {
  const count = db.prepare(
    "SELECT COUNT(*) c FROM student_messages WHERE teacher_id = ? AND read_by_teacher = 0 AND sender_role = 'student'"
  ).get(req.user.id).c;
  res.json({ count });
});

module.exports = router;
