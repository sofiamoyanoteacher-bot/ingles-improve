const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const DB_DIR = process.env.DB_DIR
  ? path.resolve(process.env.DB_DIR)
  : path.join(__dirname, '..', 'data');
if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const db = new Database(path.join(DB_DIR, 'improve.sqlite'));
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  last_name TEXT DEFAULT '',
  age INTEGER,
  profession TEXT,
  role TEXT NOT NULL DEFAULT 'student',
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS unit_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  unit_index INTEGER NOT NULL,
  reading_done INTEGER NOT NULL DEFAULT 0,
  grammar_done INTEGER NOT NULL DEFAULT 0,
  listening_done INTEGER NOT NULL DEFAULT 0,
  letstalk_done INTEGER NOT NULL DEFAULT 0,
  listening_score INTEGER,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(user_id, unit_index)
);

CREATE TABLE IF NOT EXISTS homework_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  unit_index INTEGER NOT NULL,
  submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
  status TEXT NOT NULL DEFAULT 'pending',
  feedback_text TEXT,
  feedback_at TEXT
);

CREATE TABLE IF NOT EXISTS homework_files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  submission_id INTEGER NOT NULL REFERENCES homework_submissions(id),
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_type TEXT,
  file_size INTEGER,
  uploaded_at TEXT NOT NULL DEFAULT (datetime('now'))
);
`);

module.exports = db;
