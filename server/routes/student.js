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
      classProgressJson || JSON.stringify({ '1': false, '2': false, '3': false, '4': false })
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

module.exports = router;
