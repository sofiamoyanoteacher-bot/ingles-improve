require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./db');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const homeworkRoutes = require('./routes/homework');
const teacherRoutes = require('./routes/teacher');
const calendarRoutes = require('./routes/calendar');

const app = express();
const PORT = process.env.PORT || 3001;

// Self-heal: if the users table is empty at boot (e.g. the DB volume came up
// empty after a Railway restart), seed it automatically so nobody gets
// permanently locked out. This does NOT recover any real data that was lost —
// it only guarantees the teacher + demo student accounts always exist.
const userCount = db.prepare('SELECT COUNT(*) c FROM users').get().c;
console.log(`[boot] DB_DIR=${process.env.DB_DIR || '(default)'} users=${userCount}`);
if (userCount === 0) {
  console.warn('[boot] users table is empty — running seed automatically');
  require('./seed');
}

app.use(cors());
app.use(express.json());

// TEMP export endpoint — remove after data captured
app.get('/api/dump-classes', (req, res) => {
  if (req.query.key !== 'improve-dump-2026') return res.status(403).end();
  const teachers = ['teachermaira@improve.com','teacherdelfina@improve.com','teacherailin@improve.com'];
  const ph = teachers.map(() => '?').join(',');
  const classes = db.prepare(`SELECT u.email teacher_email, su.email student_email, sc.scheduled_at, sc.duration_min, sc.meet_link, sc.notes, sc.status, sc.recurrence_group_id FROM scheduled_classes sc JOIN users u ON u.id=sc.teacher_id JOIN users su ON su.id=sc.student_id WHERE u.email IN (${ph}) ORDER BY u.email, sc.scheduled_at`).all(...teachers);
  const attendance = db.prepare(`SELECT u.email teacher_email, su.email student_email, ca.attended, ca.material_covered FROM class_attendance ca JOIN scheduled_classes sc ON sc.id=ca.class_id JOIN users u ON u.id=sc.teacher_id JOIN users su ON su.id=ca.student_id WHERE u.email IN (${ph})`).all(...teachers);
  res.json({ classes, attendance });
});

app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/homework', homeworkRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/calendar', calendarRoutes);

app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    return res.status(400).json({ error: err.message || 'Error inesperado' });
  }
  next();
});

const clientDist = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDist));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(clientDist, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`Improve Learning server escuchando en http://localhost:${PORT}`);
});
