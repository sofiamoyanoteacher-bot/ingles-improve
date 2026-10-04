const express = require('express');
const db = require('../db');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();
router.use(verifyToken);

function parseClassProgress(raw) {
  try {
    return { '1': false, '2': false, '3': false, '4': false, ...JSON.parse(raw || '{}') };
  } catch {
    return { '1': false, '2': false, '3': false, '4': false };
  }
}

function withParsedClassProgress(row) {
  return row ? { ...row, class_progress: parseClassProgress(row.class_progress) } : row;
}

router.get('/progress', (req, res) => {
  const rows = db.prepare('SELECT * FROM unit_progress WHERE user_id = ?').all(req.user.id);
  res.json({ progress: rows.map(withParsedClassProgress) });
});

router.put('/progress/:unitIndex', (req, res) => {
  const unitIndex = Number(req.params.unitIndex);
  const { reading_done, grammar_done, listening_done, letstalk_done, listening_score, class_number } = req.body || {};

  const existing = db.prepare('SELECT * FROM unit_progress WHERE user_id = ? AND unit_index = ?')
    .get(req.user.id, unitIndex);

  let classProgressJson = null;
  if (class_number != null) {
    const current = parseClassProgress(existing?.class_progress);
    current[String(class_number)] = true;
    classProgressJson = JSON.stringify(current);
  }

  if (existing) {
    db.prepare(`UPDATE unit_progress SET
        reading_done = COALESCE(?, reading_done),
        grammar_done = COALESCE(?, grammar_done),
        listening_done = COALESCE(?, listening_done),
        letstalk_done = COALESCE(?, letstalk_done),
        listening_score = COALESCE(?, listening_score),
        class_progress = COALESCE(?, class_progress),
        updated_at = datetime('now')
      WHERE id = ?`).run(
      reading_done != null ? Number(reading_done) : null,
      grammar_done != null ? Number(grammar_done) : null,
      listening_done != null ? Number(listening_done) : null,
      letstalk_done != null ? Number(letstalk_done) : null,
      listening_score != null ? Number(listening_score) : null,
      classProgressJson,
      existing.id
    );
  } else {
    db.prepare(`INSERT INTO unit_progress
        (user_id, unit_index, reading_done, grammar_done, listening_done, letstalk_done, listening_score, class_progress)
        VALUES (?,?,?,?,?,?,?,?)`).run(
      req.user.id, unitIndex,
      reading_done ? 1 : 0,
      grammar_done ? 1 : 0,
      listening_done ? 1 : 0,
      letstalk_done ? 1 : 0,
      listening_score != null ? Number(listening_score) : null,
      classProgressJson || JSON.stringify(Object.fromEntries(Array.from({ length: 12 }, (_, i) => [String(i + 1), false])))
    );
  }

  const row = db.prepare('SELECT * FROM unit_progress WHERE user_id = ? AND unit_index = ?')
    .get(req.user.id, unitIndex);
  res.json({ progress: withParsedClassProgress(row) });
});

router.put('/profile', (req, res) => {
  const { name, last_name, age, profession, email } = req.body || {};
  if (email && email !== req.user.email) {
    const taken = db.prepare('SELECT id FROM users WHERE email = ? AND id != ?').get(email, req.user.id);
    if (taken) return res.status(409).json({ error: 'Ese email ya está en uso' });
  }
  db.prepare(`UPDATE users SET
      name = COALESCE(?, name),
      last_name = COALESCE(?, last_name),
      age = COALESCE(?, age),
      profession = COALESCE(?, profession),
      email = COALESCE(?, email)
      WHERE id = ?`).run(
    name ?? null, last_name ?? null, age != null ? Number(age) : null, profession ?? null, email ?? null, req.user.id
  );
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  res.json({ user: { id: user.id, email: user.email, name: user.name, last_name: user.last_name, age: user.age, profession: user.profession, role: user.role } });
});

router.get('/payment-status', (req, res) => {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  const current = db.prepare('SELECT paid FROM monthly_payments WHERE user_id = ? AND year = ? AND month = ?')
    .get(req.user.id, year, month);
  // If current month is already paid, show next month's status
  if (current?.paid) {
    month += 1;
    if (month > 12) { month = 1; year += 1; }
  }
  const row = db.prepare('SELECT paid FROM monthly_payments WHERE user_id = ? AND year = ? AND month = ?')
    .get(req.user.id, year, month);
  res.json({ year, month, paid: row ? !!row.paid : false });
});

// Student → teacher messaging
router.get('/messages', (req, res) => {
  const messages = db.prepare(
    'SELECT * FROM student_messages WHERE student_id = ? ORDER BY created_at'
  ).all(req.user.id);
  res.json({ messages });
});

router.post('/messages', (req, res) => {
  const { body } = req.body || {};
  if (!body) return res.status(400).json({ error: 'body required' });
  // Find any teacher assigned — for now use the first teacher in DB
  const teacher = db.prepare("SELECT id FROM users WHERE role = 'teacher' ORDER BY id LIMIT 1").get();
  if (!teacher) return res.status(500).json({ error: 'No teacher available' });
  const info = db.prepare(
    `INSERT INTO student_messages (student_id, teacher_id, sender_role, body) VALUES (?,?,?,?)`
  ).run(req.user.id, teacher.id, 'student', body);
  const msg = db.prepare('SELECT * FROM student_messages WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json({ message: msg });
});

// Student upcoming classes
router.get('/classes', (req, res) => {
  const classes = db.prepare(`
    SELECT sc.*, u.name AS teacher_name, u.last_name AS teacher_last_name
    FROM scheduled_classes sc
    JOIN users u ON u.id = sc.teacher_id
    WHERE sc.student_id = ? AND sc.status = 'scheduled'
    ORDER BY sc.scheduled_at
  `).all(req.user.id);
  res.json({ classes });
});

module.exports = router;
