// Seed for scheduled_classes + attendance — captured 2026-10-11
// Runs automatically on boot when scheduled_classes table is empty (fresh DB).
// Safe to run multiple times: each INSERT is guarded by a duplicate check.
const db = require('./db');

const classCount = db.prepare('SELECT COUNT(*) c FROM scheduled_classes').get().c;
if (classCount > 0) {
  console.log(`[seed-classes] ${classCount} classes already present — skipping`);
  return;
}

console.log('[seed-classes] scheduled_classes is empty — seeding class data...');

function teacherId(email) {
  const row = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (!row) { console.warn(`[seed-classes] teacher not found: ${email}`); return null; }
  return row.id;
}
function studentId(email) {
  const row = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (!row) { console.warn(`[seed-classes] student not found: ${email}`); return null; }
  return row.id;
}

// Missing students not in the main seed (added here for completeness)
const bcrypt = require('bcrypt');
function upsertStudent(email, name, last_name, program) {
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) return existing.id;
  const hash = bcrypt.hashSync('Student123', 10);
  const info = db.prepare(
    'INSERT INTO users (email, password_hash, name, last_name, role, program) VALUES (?,?,?,?,?,?)'
  ).run(email, hash, name, last_name, 'student', program);
  return info.lastInsertRowid;
}
upsertStudent('julietamilano1995@gmail.com', 'Julieta', 'Milano', 'basic');
upsertStudent('design@rupt.com', 'Design', 'Rupt', 'highpro');

// ---------- SCHEDULED CLASSES ----------
const classes = [
  // teacherailin
  { te: 'teacherailin@improve.com',   se: 'agustinalalluf@improve.com',    at: '2026-10-05 15:00', dur: 60, link: 'https://meet.google.com/sts-owxc-tdu', status: 'done',      grp: 'grp_1791161141965_7' },
  { te: 'teacherailin@improve.com',   se: 'lucaslaluf@improve.com',        at: '2026-10-05 16:00', dur: 60, link: 'https://meet.google.com/ykj-mafj-rap', status: 'done',      grp: 'grp_1791161270529_7' },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-05 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  { te: 'teacherailin@improve.com',   se: 'agustinalalluf@improve.com',    at: '2026-10-07 14:30', dur: 60, link: 'https://meet.google.com/sts-owxc-tdu?pli=1&authuser=1', status: 'done', grp: null },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-07 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  { te: 'teacherailin@improve.com',   se: 'agustinalalluf@improve.com',    at: '2026-10-12 15:00', dur: 60, link: 'https://meet.google.com/sts-owxc-tdu', status: 'scheduled', grp: 'grp_1791161141965_7' },
  { te: 'teacherailin@improve.com',   se: 'lucaslaluf@improve.com',        at: '2026-10-12 16:00', dur: 60, link: 'https://meet.google.com/ykj-mafj-rap', status: 'scheduled', grp: 'grp_1791161270529_7' },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-12 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-14 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  { te: 'teacherailin@improve.com',   se: 'agustinalalluf@improve.com',    at: '2026-10-19 15:00', dur: 60, link: 'https://meet.google.com/sts-owxc-tdu', status: 'scheduled', grp: 'grp_1791161141965_7' },
  { te: 'teacherailin@improve.com',   se: 'lucaslaluf@improve.com',        at: '2026-10-19 16:00', dur: 60, link: 'https://meet.google.com/ykj-mafj-rap', status: 'scheduled', grp: 'grp_1791161270529_7' },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-19 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-21 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  { te: 'teacherailin@improve.com',   se: 'agustinalalluf@improve.com',    at: '2026-10-26 15:00', dur: 60, link: 'https://meet.google.com/sts-owxc-tdu', status: 'scheduled', grp: 'grp_1791161141965_7' },
  { te: 'teacherailin@improve.com',   se: 'lucaslaluf@improve.com',        at: '2026-10-26 16:00', dur: 60, link: 'https://meet.google.com/ykj-mafj-rap', status: 'scheduled', grp: 'grp_1791161270529_7' },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-26 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  { te: 'teacherailin@improve.com',   se: 'andresrodriguez@improve.com',   at: '2026-10-28 18:00', dur: 60, link: 'https://meet.google.com/nev-xkrm-bfe', status: 'scheduled', grp: 'grp_1791391285927_7' },
  // teacherdelfina
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-05 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'done',      grp: 'grp_1791162076206_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-06 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'done',      grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-08 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'done',      grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-09 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'scheduled', grp: 'grp_1791162076206_6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-12 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'scheduled', grp: 'grp_1791162076206_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-13 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'scheduled', grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-15 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'scheduled', grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-16 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'scheduled', grp: 'grp_1791162076206_6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-19 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'scheduled', grp: 'grp_1791162076206_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-20 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'scheduled', grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-22 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'scheduled', grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-23 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'scheduled', grp: 'grp_1791162076206_6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-26 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'scheduled', grp: 'grp_1791162076206_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-27 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'scheduled', grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',           at: '2026-10-29 15:00', dur: 60, link: 'https://meet.google.com/dcp-hdve-ifn', status: 'scheduled', grp: 'grp_1791162270774_6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',               at: '2026-10-30 10:00', dur: 60, link: 'https://meet.google.com/wnt-tvca-tqf', status: 'scheduled', grp: 'grp_1791162076206_6' },
  // teachermaira
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-05 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'done',      grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'julietamilano1995@gmail.com',   at: '2026-10-06 09:00', dur: 60, link: 'https://meet.google.com/oxi-aacc-bxk', status: 'done',      grp: 'grp_1791131723535_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-06 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'done',      grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-06 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'done',      grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-06 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'done',      grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-06 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'done',      grp: 'grp_1791131851492_5' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-07 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'done',      grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-08 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'done',      grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-08 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'done',      grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-08 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'done',      grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-09 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'done',      grp: 'grp_1791131851492_5' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-12 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'scheduled', grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'julietamilano1995@gmail.com',   at: '2026-10-13 09:00', dur: 60, link: 'https://meet.google.com/oxi-aacc-bxk', status: 'scheduled', grp: 'grp_1791131723535_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-13 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'scheduled', grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-13 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'scheduled', grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-13 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'scheduled', grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-13 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'scheduled', grp: 'grp_1791131851492_5' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-14 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'scheduled', grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-15 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'scheduled', grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-15 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'scheduled', grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-15 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'scheduled', grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-16 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'scheduled', grp: 'grp_1791131851492_5' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-19 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'scheduled', grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'julietamilano1995@gmail.com',   at: '2026-10-20 09:00', dur: 60, link: 'https://meet.google.com/oxi-aacc-bxk', status: 'scheduled', grp: 'grp_1791131723535_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-20 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'scheduled', grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-20 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'scheduled', grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-20 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'scheduled', grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-20 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'scheduled', grp: 'grp_1791131851492_5' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-21 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'scheduled', grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-22 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'scheduled', grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-22 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'scheduled', grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-22 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'scheduled', grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-23 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'scheduled', grp: 'grp_1791131851492_5' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-26 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'scheduled', grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'julietamilano1995@gmail.com',   at: '2026-10-27 09:00', dur: 60, link: 'https://meet.google.com/oxi-aacc-bxk', status: 'scheduled', grp: 'grp_1791131723535_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-27 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'scheduled', grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-27 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'scheduled', grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-27 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'scheduled', grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-27 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'scheduled', grp: 'grp_1791131851492_5' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',       at: '2026-10-28 09:00', dur: 60, link: 'https://meet.google.com/hqj-dvnv-cio', status: 'scheduled', grp: 'grp_1791131398999_5' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',         at: '2026-10-29 10:00', dur: 60, link: 'https://meet.google.com/zbt-uwcv-eeu', status: 'scheduled', grp: 'grp_1791131678243_5' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com',   at: '2026-10-29 16:00', dur: 60, link: 'https://meet.google.com/pns-casz-ymr', status: 'scheduled', grp: 'grp_1791131771211_5' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',       at: '2026-10-29 17:00', dur: 60, link: 'https://meet.google.com/unv-ssik-zsa', status: 'scheduled', grp: 'grp_1791131810697_5' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',        at: '2026-10-30 18:00', dur: 60, link: 'https://meet.google.com/pkt-dnki-oce', status: 'scheduled', grp: 'grp_1791131851492_5' },
];

const insertClass = db.prepare(
  `INSERT INTO scheduled_classes (teacher_id, student_id, scheduled_at, duration_min, meet_link, notes, status, recurrence_group_id)
   VALUES (?,?,?,?,?,?,?,?)`
);

// Map to remember the inserted class IDs by (teacher_email+student_email+scheduled_at)
const classIdMap = {};

const insertAll = db.transaction(() => {
  for (const c of classes) {
    const tid = teacherId(c.te);
    const sid = studentId(c.se);
    if (!tid || !sid) continue;
    const info = insertClass.run(tid, sid, c.at, c.dur, c.link, '', c.status, c.grp);
    classIdMap[`${c.te}|${c.se}|${c.at}`] = info.lastInsertRowid;
  }
});
insertAll();
console.log(`[seed-classes] inserted ${Object.keys(classIdMap).length} classes`);

// ---------- ATTENDANCE ----------
// attendance rows are matched to the class by teacher+student+scheduled_at
const attendance = [
  { te: 'teacherailin@improve.com',   se: 'agustinalalluf@improve.com',  at: '2026-10-05 15:00', attended: 0, material: '' },
  { te: 'teacherailin@improve.com',   se: 'lucaslaluf@improve.com',      at: '2026-10-05 16:00', attended: 1, material: 'Tourism in Spain: Advantages and Disadvantages ' },
  { te: 'teacherailin@improve.com',   se: 'agustinalalluf@improve.com',  at: '2026-10-07 14:30', attended: 1, material: 'Getting to know each other ' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',         at: '2026-10-06 15:00', attended: 1, material: 'class 6' },
  { te: 'teacherdelfina@improve.com', se: 'design@rupt.com',             at: '2026-10-05 10:00', attended: 0, material: '' },
  { te: 'teacherdelfina@improve.com', se: 'martinc@improve.com',         at: '2026-10-08 15:00', attended: 0, material: '' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',     at: '2026-10-05 09:00', attended: 1, material: '' },
  { te: 'teachermaira@improve.com',   se: 'julietamilano1995@gmail.com', at: '2026-10-06 09:00', attended: 1, material: '' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',       at: '2026-10-06 10:00', attended: 1, material: '' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com', at: '2026-10-06 16:00', attended: 1, material: 'Absent' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',     at: '2026-10-06 17:00', attended: 1, material: '' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',      at: '2026-10-06 18:00', attended: 0, material: 'Absent' },
  { te: 'teachermaira@improve.com',   se: 'mauro.zuppone@gmail.com',     at: '2026-10-07 09:00', attended: 1, material: '' },
  { te: 'teachermaira@improve.com',   se: 'leanlestani@gmail.com',       at: '2026-10-08 10:00', attended: 1, material: '' },
  { te: 'teachermaira@improve.com',   se: 'nacho.garciax@gmail.com',     at: '2026-10-08 17:00', attended: 1, material: '' },
  { te: 'teachermaira@improve.com',   se: 'Martinezrosaa2908@gmail.com', at: '2026-10-08 16:00', attended: 1, material: 'Absent' },
  { te: 'teachermaira@improve.com',   se: 'matialegre82@gmail.com',      at: '2026-10-09 18:00', attended: 1, material: '' },
];

const insertAttendance = db.prepare(
  `INSERT OR IGNORE INTO class_attendance (class_id, student_id, attended, material_covered) VALUES (?,?,?,?)`
);
const insertAtAll = db.transaction(() => {
  for (const a of attendance) {
    const classId = classIdMap[`${a.te}|${a.se}|${a.at}`];
    const sid = studentId(a.se);
    if (!classId || !sid) { console.warn(`[seed-classes] no class found for attendance: ${a.te}|${a.se}|${a.at}`); continue; }
    insertAttendance.run(classId, sid, a.attended, a.material);
  }
});
insertAtAll();
console.log('[seed-classes] attendance records seeded');
