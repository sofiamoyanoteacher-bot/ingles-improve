const express = require('express');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { pool, initDB } = require('./db/init');
const { requireAuth, requireTeacher } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure upload directories exist
['uploads', 'resources', 'module-content', 'profiles'].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Multer configs
const submissionStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const resourceStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'resources/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const moduleContentStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'module-content/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'profiles/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const uploadVideo = multer({ storage: submissionStorage, limits: { fileSize: 500 * 1024 * 1024 } });
const uploadProfilePhoto = multer({ storage: profileStorage, limits: { fileSize: 10 * 1024 * 1024 } });
const uploadResource = multer({ storage: resourceStorage, limits: { fileSize: 500 * 1024 * 1024 } });
const uploadModulePdf = multer({ storage: moduleContentStorage, limits: { fileSize: 500 * 1024 * 1024 } });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use('/resources', express.static('resources'));
app.use('/module-content', express.static('module-content'));
app.use('/profiles', express.static('profiles'));

app.use(session({
  store: new pgSession({ pool, createTableIfMissing: true }),
  secret: process.env.SESSION_SECRET || 'improve-secret-2025',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
}));

// ─── AUTH ROUTES ────────────────────────────────────────────────────────────

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });
    req.session.userId = user.id;
    req.session.role = user.role;
    req.session.name = user.name;
    res.json({ role: user.role, name: user.name });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get('/api/me', (req, res) => {
  if (!req.session.userId) return res.status(401).json({ error: 'Not authenticated' });
  res.json({ id: req.session.userId, name: req.session.name, role: req.session.role });
});

// ─── PROFILE ────────────────────────────────────────────────────────────────

app.get('/api/profile', requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, email, age, profession, photo, role FROM users WHERE id = $1',
      [req.session.userId]
    );
    res.json(result.rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/profile', requireAuth, async (req, res) => {
  const { name, email, age, profession } = req.body;
  try {
    await pool.query(
      'UPDATE users SET name=$1, email=$2, age=$3, profession=$4 WHERE id=$5',
      [name, email, age || null, profession || null, req.session.userId]
    );
    req.session.name = name;
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/profile/photo', requireAuth, uploadProfilePhoto.single('photo'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    await pool.query('UPDATE users SET photo=$1 WHERE id=$2', [req.file.filename, req.session.userId]);
    res.json({ ok: true, filename: req.file.filename });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ─── MODULES ────────────────────────────────────────────────────────────────

app.get('/api/modules', requireAuth, async (req, res) => {
  try {
    let query = 'SELECT * FROM modules ORDER BY number';
    if (req.session.role !== 'teacher') {
      query = 'SELECT * FROM modules WHERE is_unlocked = TRUE ORDER BY number';
    }
    const result = await pool.query(query);
    // Teachers get all, including locked (but we expose lock status)
    if (req.session.role === 'teacher') {
      return res.json(await pool.query('SELECT * FROM modules ORDER BY number').then(r => r.rows));
    }
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── SUBMISSIONS ────────────────────────────────────────────────────────────

app.get('/api/submissions/mine', requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.*, m.title as module_title, m.number as module_number
       FROM submissions s JOIN modules m ON s.module_id = m.id
       WHERE s.user_id = $1 ORDER BY s.created_at DESC`,
      [req.session.userId]
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/submissions', requireAuth, uploadVideo.single('video'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const { module_id, notes } = req.body;
  try {
    await pool.query(
      `INSERT INTO submissions (user_id, module_id, filename, original_name, notes)
       VALUES ($1, $2, $3, $4, $5)`,
      [req.session.userId, module_id, req.file.filename, req.file.originalname, notes || null]
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── ADMIN ROUTES ────────────────────────────────────────────────────────────

app.get('/admin/api/submissions', requireTeacher, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.*, u.name as student_name, u.email as student_email,
              m.title as module_title, m.number as module_number
       FROM submissions s
       JOIN users u ON s.user_id = u.id
       JOIN modules m ON s.module_id = m.id
       ORDER BY s.created_at DESC`
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/admin/api/feedback/:id', requireTeacher, async (req, res) => {
  const { feedback } = req.body;
  try {
    await pool.query(
      `UPDATE submissions SET feedback = $1, status = 'reviewed' WHERE id = $2`,
      [feedback, req.params.id]
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/admin/api/module/:id/video', requireTeacher, async (req, res) => {
  const { video_url } = req.body;
  try {
    await pool.query('UPDATE modules SET video_url = $1 WHERE id = $2', [video_url, req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/admin/api/module/:id/pdf', requireTeacher, uploadModulePdf.single('pdf'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    await pool.query('UPDATE modules SET pdf_filename = $1 WHERE id = $2', [req.file.filename, req.params.id]);
    res.json({ ok: true, filename: req.file.filename });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/admin/api/students', requireTeacher, async (req, res) => {
  try {
    const students = await pool.query(
      `SELECT u.id, u.name, u.email, u.created_at,
        (SELECT COUNT(*) FROM submissions s WHERE s.user_id = u.id) as total_submissions,
        (SELECT COUNT(*) FROM submissions s WHERE s.user_id = u.id AND s.status = 'reviewed') as reviewed_submissions
       FROM users u WHERE u.role = 'student' ORDER BY u.name`
    );
    res.json(students.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/admin/api/module/:id/unlock', requireTeacher, async (req, res) => {
  try {
    const result = await pool.query(
      `UPDATE modules SET is_unlocked = NOT is_unlocked WHERE id = $1 RETURNING is_unlocked`,
      [req.params.id]
    );
    res.json({ is_unlocked: result.rows[0].is_unlocked });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/admin/api/resources', requireTeacher, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM resources ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/admin/api/resources', requireTeacher, uploadResource.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const { title } = req.body;
  const ext = path.extname(req.file.originalname).replace('.', '').toUpperCase();
  const fileType = ['PDF', 'DOC', 'DOCX', 'XLS', 'XLSX'].includes(ext) ? (ext.startsWith('DOC') ? 'DOC' : ext.startsWith('XLS') ? 'XLS' : ext) : ext;
  try {
    await pool.query(
      'INSERT INTO resources (title, file_type, filename) VALUES ($1, $2, $3)',
      [title, fileType, req.file.filename]
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── PAGE ROUTES ─────────────────────────────────────────────────────────────

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ─── START ───────────────────────────────────────────────────────────────────

initDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('DB init failed:', err);
    process.exit(1);
  });
