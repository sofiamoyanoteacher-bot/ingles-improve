const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const multer = require('multer');
const db = require('../db');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();
router.use(verifyToken);

const UPLOADS_DIR = process.env.UPLOADS_DIR
  ? path.resolve(process.env.UPLOADS_DIR)
  : path.join(__dirname, '..', '..', 'uploads');

const ALLOWED_EXT = ['.mp3', '.m4a', '.wav', '.mp4', '.doc', '.docx', '.pdf'];
const MAX_FILE_SIZE = 100 * 1024 * 1024;
const MAX_FILES = 5;

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = path.join(UPLOADS_DIR, String(req.user.id), 'tmp');
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, crypto.randomUUID() + ext);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE, files: MAX_FILES },
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) return cb(new Error('Formato de archivo no permitido'));
    cb(null, true);
  },
});

function fileType(ext) {
  if (['.mp3', '.m4a', '.wav'].includes(ext)) return 'audio';
  if (ext === '.mp4') return 'video';
  return 'doc';
}

router.get('/my-submissions', (req, res) => {
  const subs = db.prepare('SELECT * FROM homework_submissions WHERE user_id = ? ORDER BY submitted_at DESC')
    .all(req.user.id);
  const files = db.prepare('SELECT * FROM homework_files WHERE submission_id = ?');
  const result = subs.map((s) => ({ ...s, files: files.all(s.id) }));
  res.json({ submissions: result });
});

router.post('/submit', upload.array('files', MAX_FILES), (req, res) => {
  const unitIndex = Number(req.body.unit_index);
  if (Number.isNaN(unitIndex)) return res.status(400).json({ error: 'unit_index es requerido' });
  if (!req.files || req.files.length === 0) return res.status(400).json({ error: 'Subí al menos un archivo' });

  const info = db.prepare(
    'INSERT INTO homework_submissions (user_id, unit_index, status) VALUES (?,?,?)'
  ).run(req.user.id, unitIndex, 'pending');
  const submissionId = info.lastInsertRowid;

  const finalDir = path.join(UPLOADS_DIR, String(req.user.id), String(submissionId));
  fs.mkdirSync(finalDir, { recursive: true });

  for (const f of req.files) {
    const finalPath = path.join(finalDir, f.filename);
    fs.renameSync(f.path, finalPath);
    const ext = path.extname(f.originalname).toLowerCase();
    db.prepare(
      'INSERT INTO homework_files (submission_id, filename, original_name, file_type, file_size) VALUES (?,?,?,?,?)'
    ).run(submissionId, f.filename, f.originalname, fileType(ext), f.size);
  }

  const submission = db.prepare('SELECT * FROM homework_submissions WHERE id = ?').get(submissionId);
  const files = db.prepare('SELECT * FROM homework_files WHERE submission_id = ?').all(submissionId);
  res.status(201).json({ submission: { ...submission, files } });
});

router.get('/:submissionId/feedback', (req, res) => {
  const sub = db.prepare('SELECT * FROM homework_submissions WHERE id = ?').get(req.params.submissionId);
  if (!sub || sub.user_id !== req.user.id) return res.status(404).json({ error: 'No encontrado' });
  res.json({ status: sub.status, feedback_text: sub.feedback_text, feedback_at: sub.feedback_at });
});

module.exports = router;
