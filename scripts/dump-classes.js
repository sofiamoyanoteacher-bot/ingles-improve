// Temporary script to dump scheduled_classes + attendance for named teachers
// Run with: railway run node scripts/dump-classes.js
const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = process.env.DB_DIR
  ? path.join(process.env.DB_DIR, 'improve.sqlite')
  : process.env.RAILWAY_VOLUME_MOUNT_PATH
    ? path.join(process.env.RAILWAY_VOLUME_MOUNT_PATH, 'improve.sqlite')
    : path.join(__dirname, '..', 'data', 'improve.sqlite');

const db = new Database(DB_PATH, { readonly: true });

const teachers = ['teachermaira@improve.com', 'teacherdelfina@improve.com', 'teacherailin@improve.com'];
const placeholders = teachers.map(() => '?').join(',');

const classes = db.prepare(`
  SELECT u.email AS teacher_email, su.email AS student_email,
         sc.scheduled_at, sc.duration_min, sc.meet_link, sc.notes,
         sc.status, sc.recurrence_group_id
  FROM scheduled_classes sc
  JOIN users u  ON u.id = sc.teacher_id
  JOIN users su ON su.id = sc.student_id
  WHERE u.email IN (${placeholders})
  ORDER BY u.email, sc.scheduled_at
`).all(...teachers);

const attendance = db.prepare(`
  SELECT u.email AS teacher_email, su.email AS student_email,
         ca.attended, ca.material_covered
  FROM class_attendance ca
  JOIN scheduled_classes sc ON sc.id = ca.class_id
  JOIN users u  ON u.id = sc.teacher_id
  JOIN users su ON su.id = ca.student_id
  WHERE u.email IN (${placeholders})
`).all(...teachers);

console.log('=== CLASSES ===');
console.log(JSON.stringify(classes, null, 2));
console.log('=== ATTENDANCE ===');
console.log(JSON.stringify(attendance, null, 2));
