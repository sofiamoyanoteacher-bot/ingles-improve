const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const db = require('../db');
const { verifyToken, requireTeacher } = require('../middleware/auth');

const router = express.Router();
router.use(verifyToken, requireTeacher);

const UPLOADS_DIR = process.env.UPLOADS_DIR
  ? path.resolve(process.env.UPLOADS_DIR)
  : path.join(__dirname, '..', '..', 'uploads');

router.get('/students', (req, res) => {
  const students = db.prepare(`
    SELECT u.id, u.email, u.name, u.last_name, u.age, u.profession, u.active, u.created_at,
      (SELECT COUNT(*) FROM homework_submissions s WHERE s.user_id = u.id) AS total_submissions,
      (SELECT COUNT(*) FROM homework_submissions s WHERE s.user_id = u.id AND s.status = 'pending') AS pending_submissions,
      (SELECT MAX(submitted_at) FROM homework_submissions s WHERE s.user_id = u.id) AS last_activity
    FROM users u WHERE u.role = 'student' ORDER BY u.name
  `).all();
  res.json({ students });
});

router.post('/students', (req, res) => {
  const { name, last_name, email, password } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ error: 'Faltan campos' });
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) return res.status(409).json({ error: 'Ese email ya existe' });
  const hash = bcrypt.hashSync(password, 10);
  const info = db.prepare(
    'INSERT INTO users (email, password_hash, name, last_name, role) VALUES (?,?,?,?,?)'
  ).run(email, hash, name, last_name || '', 'student');
  const student = db.prepare('SELECT id, email, name, last_name, role, active FROM users WHERE id = ?')
    .get(info.lastInsertRowid);
  res.status(201).json({ student });
});

router.put('/students/:id', (req, res) => {
  const { name, last_name, age, profession, email, active } = req.body || {};
  const student = db.prepare('SELECT * FROM users WHERE id = ? AND role = ?').get(req.params.id, 'student');
  if (!student) return res.status(404).json({ error: 'Alumno no encontrado' });
  db.prepare(`UPDATE users SET
      name = COALESCE(?, name), last_name = COALESCE(?, last_name),
      age = COALESCE(?, age), profession = COALESCE(?, profession),
      email = COALESCE(?, email), active = COALESCE(?, active)
      WHERE id = ?`).run(
    name ?? null, last_name ?? null, age != null ? Number(age) : null,
    profession ?? null, email ?? null, active != null ? Number(active) : null, student.id
  );
  const updated = db.prepare('SELECT id, email, name, last_name, age, profession, active FROM users WHERE id = ?')
    .get(student.id);
  res.json({ student: updated });
});

router.get('/students/:id/progress', (req, res) => {
  const progress = db.prepare('SELECT * FROM unit_progress WHERE user_id = ?').all(req.params.id);
  res.json({ progress });
});

router.get('/homework', (req, res) => {
  const { studentId, unitIndex, status } = req.query;
  let sql = `SELECT s.*, u.name, u.last_name, u.email FROM homework_submissions s
    JOIN users u ON u.id = s.user_id WHERE 1=1`;
  const params = [];
  if (studentId) { sql += ' AND s.user_id = ?'; params.push(studentId); }
  if (unitIndex !== undefined) { sql += ' AND s.unit_index = ?'; params.push(unitIndex); }
  if (status) { sql += ' AND s.status = ?'; params.push(status); }
  sql += ' ORDER BY s.submitted_at DESC';
  const subs = db.prepare(sql).all(...params);
  const filesStmt = db.prepare('SELECT * FROM homework_files WHERE submission_id = ?');
  res.json({ submissions: subs.map((s) => ({ ...s, files: filesStmt.all(s.id) })) });
});

router.get('/homework/:id/files/:filename', (req, res) => {
  const sub = db.prepare('SELECT * FROM homework_submissions WHERE id = ?').get(req.params.id);
  if (!sub) return res.status(404).json({ error: 'No encontrado' });
  const file = db.prepare('SELECT * FROM homework_files WHERE submission_id = ? AND filename = ?')
    .get(req.params.id, req.params.filename);
  if (!file) return res.status(404).json({ error: 'Archivo no encontrado' });
  const filePath = path.join(UPLOADS_DIR, String(sub.user_id), String(sub.id), file.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Archivo no encontrado en disco' });
  res.download(filePath, file.original_name);
});

router.post('/homework/:id/feedback', (req, res) => {
  const { feedback_text } = req.body || {};
  if (!feedback_text) return res.status(400).json({ error: 'feedback_text es requerido' });
  const sub = db.prepare('SELECT * FROM homework_submissions WHERE id = ?').get(req.params.id);
  if (!sub) return res.status(404).json({ error: 'No encontrado' });
  db.prepare(`UPDATE homework_submissions SET
      feedback_text = ?, feedback_at = datetime('now'), status = 'reviewed' WHERE id = ?`)
    .run(feedback_text, sub.id);
  const updated = db.prepare('SELECT * FROM homework_submissions WHERE id = ?').get(sub.id);
  res.json({ submission: updated });
});

router.put('/homework/:id/feedback', (req, res) => {
  const { feedback_text } = req.body || {};
  if (!feedback_text) return res.status(400).json({ error: 'feedback_text es requerido' });
  const sub = db.prepare('SELECT * FROM homework_submissions WHERE id = ?').get(req.params.id);
  if (!sub) return res.status(404).json({ error: 'No encontrado' });
  db.prepare(`UPDATE homework_submissions SET feedback_text = ?, feedback_at = datetime('now') WHERE id = ?`)
    .run(feedback_text, sub.id);
  const updated = db.prepare('SELECT * FROM homework_submissions WHERE id = ?').get(sub.id);
  res.json({ submission: updated });
});

router.get('/stats', (req, res) => {
  const activeStudents = db.prepare("SELECT COUNT(*) c FROM users WHERE role='student' AND active=1").get().c;
  const pending = db.prepare("SELECT COUNT(*) c FROM homework_submissions WHERE status='pending'").get().c;
  const total = db.prepare('SELECT COUNT(*) c FROM homework_submissions').get().c;
  res.json({ activeStudents, pending, total });
});

module.exports = router;
