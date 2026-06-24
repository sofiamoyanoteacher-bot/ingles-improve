const bcrypt = require('bcrypt');
const db = require('./db');

const SALT_ROUNDS = 10;

function upsertUser({ email, password, name, last_name, age, profession, role }) {
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  const hash = bcrypt.hashSync(password, SALT_ROUNDS);
  if (existing) {
    db.prepare(
      'UPDATE users SET password_hash=?, name=?, last_name=?, age=?, profession=?, role=? WHERE id=?'
    ).run(hash, name, last_name || '', age || null, profession || null, role, existing.id);
    return existing.id;
  }
  const info = db.prepare(
    'INSERT INTO users (email, password_hash, name, last_name, age, profession, role) VALUES (?,?,?,?,?,?,?)'
  ).run(email, hash, name, last_name || '', age || null, profession || null, role);
  return info.lastInsertRowid;
}

const teacherEmail = process.env.TEACHER_EMAIL || 'teacher@improve.com';
upsertUser({
  email: teacherEmail,
  password: 'Teacher2026!',
  name: 'Profe',
  last_name: 'Improve',
  role: 'teacher',
});

const students = [
  { email: 'alumno1@improve.com', password: 'Alumno2026!', name: 'Valentina', last_name: 'Appezzatto', age: 28, profession: 'Diseñadora' },
  { email: 'alumno2@improve.com', password: 'Alumno2026!', name: 'Marcos', last_name: 'Rodríguez', age: 31, profession: 'Contador' },
  { email: 'alumno3@improve.com', password: 'Alumno2026!', name: 'Sofía', last_name: 'Medina', age: 24, profession: 'Marketing' },
  { email: 'alumno4@improve.com', password: 'Alumno2026!', name: 'Diego', last_name: 'Fernández', age: 35, profession: 'Ingeniero' },
  { email: 'alumno5@improve.com', password: 'Alumno2026!', name: 'Camila', last_name: 'Torres', age: 27, profession: 'Abogada' },
];

for (const s of students) {
  upsertUser({ ...s, role: 'student' });
}

console.log('Seed completo:');
console.log(`  Teacher: ${teacherEmail} / Teacher2026!`);
for (const s of students) console.log(`  Alumno: ${s.email} / ${s.password} (${s.name} ${s.last_name})`);
