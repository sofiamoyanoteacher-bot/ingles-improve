const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('railway')
    ? { rejectUnauthorized: false }
    : false,
});

async function initDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        age INTEGER,
        profession VARCHAR(255),
        photo VARCHAR(255),
        role VARCHAR(20) DEFAULT 'student',
        is_suspended BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS modules (
        id SERIAL PRIMARY KEY,
        number INTEGER UNIQUE NOT NULL,
        month INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        practice_instructions TEXT,
        video_url VARCHAR(500),
        pdf_filename VARCHAR(255),
        is_unlocked BOOLEAN DEFAULT FALSE
      );

      CREATE TABLE IF NOT EXISTS student_module_access (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        module_id INTEGER REFERENCES modules(id) ON DELETE CASCADE,
        is_unlocked BOOLEAN DEFAULT FALSE,
        UNIQUE(user_id, module_id)
      );

      CREATE TABLE IF NOT EXISTS submissions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        module_id INTEGER REFERENCES modules(id),
        filename VARCHAR(255) NOT NULL,
        original_name VARCHAR(255) NOT NULL,
        notes TEXT,
        status VARCHAR(30) DEFAULT 'pending',
        feedback TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS resources (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        file_type VARCHAR(20),
        filename VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Migrations
    await client.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS age INTEGER;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS profession VARCHAR(255);
      ALTER TABLE users ADD COLUMN IF NOT EXISTS photo VARCHAR(255);
      ALTER TABLE users ADD COLUMN IF NOT EXISTS is_suspended BOOLEAN DEFAULT FALSE;
      ALTER TABLE modules ADD COLUMN IF NOT EXISTS month INTEGER DEFAULT 1;
      ALTER TABLE modules ADD COLUMN IF NOT EXISTS description TEXT;
      ALTER TABLE modules ADD COLUMN IF NOT EXISTS practice_instructions TEXT;
      ALTER TABLE modules ADD COLUMN IF NOT EXISTS video_url VARCHAR(500);
      ALTER TABLE modules ADD COLUMN IF NOT EXISTS pdf_filename VARCHAR(255);
      ALTER TABLE modules ADD COLUMN IF NOT EXISTS video_filename VARCHAR(255);
      ALTER TABLE modules ADD COLUMN IF NOT EXISTS is_unlocked BOOLEAN DEFAULT FALSE;
    `);

    // Seed users if empty
    const userCount = await client.query('SELECT COUNT(*) FROM users');
    if (parseInt(userCount.rows[0].count) === 0) {
      const hash = async (pw) => bcrypt.hash(pw, 10);
      await client.query(
        `INSERT INTO users (email, password_hash, name, role) VALUES
         ($1, $2, 'Profesor IMPROVE', 'teacher'),
         ($3, $4, 'María González', 'student'),
         ($5, $6, 'Carlos Rodríguez', 'student')`,
        [
          'teacher@improve.com', await hash('improve2025'),
          'alumno1@improve.com', await hash('alumno123'),
          'alumno2@improve.com', await hash('alumno123'),
        ]
      );
      console.log('Users seeded.');
    }

    // Seed modules if empty
    const modCount = await client.query('SELECT COUNT(*) FROM modules');
    const modules = [
        { n:1,  m:1, title:'The Shift — From Employee to Asset', desc:'Mindset session. Identify your unique value proposition (USP). Learn to see yourself as a business asset, not an employee.', practice:'Write your personal USP in 3 sentences: [Professional identity] + [Result you generate] + [Unique differentiator]. Record a 60-second video saying it in English.' },
        { n:2,  m:1, title:'The Elevator Pitch', desc:'Structure and practice to introduce yourself and hook your listener in just 60 seconds. 4-step method with real examples.', practice:'Record your complete elevator pitch (60 sec max). Use the structure: Identity → Result → Differentiator → Hook. No reading, no cuts.' },
        { n:3,  m:1, title:'Professional Storytelling', desc:'Mastering the STAR Method to narrate past achievements and experiences in an engaging way for any international recruiter.', practice:'Record 3 STAR stories from your career. At least one must include a concrete impact number.' },
        { n:4,  m:1, title:'Data & KPIs', desc:'How to talk about numbers, percentages, and financial metrics in English without hesitation. Specific high-level corporate vocabulary.', practice:null },
        { n:5,  m:1, title:'Modern Corporate Jargon', desc:'Incorporating C-Suite language and jargon. Phrases that communicate authority without sounding artificial.', practice:null },
        { n:6,  m:1, title:'Active Listening', desc:'Sales techniques applied to active listening to detect a company\'s pain points during a conversation.', practice:null },
        { n:7,  m:1, title:'Overcoming Blocks', desc:'Coaching session to overcome impostor syndrome and prioritize conviction over perfection.', practice:'Record 90 seconds talking about your greatest professional achievement. No editing, no cuts. Conviction matters more than perfection.' },
        { n:8,  m:1, title:'Overcoming Objections', desc:'The art of strategically answering tough questions about your resume without losing authority.', practice:'Record answers to these 3 questions: "Why did you leave your last job?", "What\'s your biggest weakness?", "Why should we hire you?".' },
        { n:9,  m:2, title:'Leadership & Influence', desc:'Authority vocabulary and impact verbs to demonstrate leadership ability in front of any international panel.', practice:null },
        { n:10, m:2, title:'Behavioral Interview Mastery', desc:'Mock interview and analysis to answer senior management behavioral questions with structure and confidence.', practice:'Record full STAR answers to these questions: "Tell me about a time you led a team through a challenge." / "Describe a situation where you had to meet a tight deadline."' },
        { n:11, m:2, title:'Problem Solving Under Pressure', desc:'Linguistic structure to demonstrate emotional control and real-time crisis resolution.', practice:null },
        { n:12, m:2, title:'Cultural Fit & Closing', desc:'How to assess company culture and close the interview with strategic questions for the recruiter.', practice:null },
        { n:13, m:2, title:'High-Impact Written Pitch', desc:'The art of writing executive cold emails that land meetings. Structure, tone, and length for maximum impact.', practice:'Write a cold email to a real company you\'re interested in. Send it in writing (not video).' },
        { n:14, m:2, title:'Executive Forms & ATS Filters', desc:'Optimizing cover letters and corporate forms to beat AI screening filters.', practice:null },
        { n:15, m:2, title:'The Mock Interview Part 1', desc:'Full mock interview simulation — technical and profile-based — with feedback on structure, vocabulary, and body language.', practice:'Record an 8-10 minute simulated interview answering: Tell me about yourself / Why this company / Greatest achievement / Where do you see yourself in 5 years / Do you have questions for us.' },
        { n:16, m:2, title:'The Mock Interview Part 2', desc:'Fine-tuning intonation, body language, and polishing errors detected in the previous session.', practice:'Re-record the mock interview incorporating the feedback received. Compare both versions.' },
        { n:17, m:3, title:'Neurosales Concepts', desc:'Psychological hooks to speak to the decision-making brain of the client or boss.', practice:null },
        { n:18, m:3, title:'Value-Based Pricing', desc:'Advanced salary negotiation strategies, budget handling, and numeric anchors.', practice:'Record a simulated 2-minute salary negotiation using the anchor phrase from the module.' },
        { n:19, m:3, title:'B2B Meeting Setups', desc:'How to open and lead a virtual or in-person meeting as a strategic consultant, not as a vendor.', practice:null },
        { n:20, m:3, title:'Discovery Calls', desc:'Crafting surgical questions so the other party admits their operational weaknesses.', practice:'Record a simulated 3-minute discovery call with questions like: "What\'s the biggest challenge your team is facing right now?"' },
        { n:21, m:3, title:'High-Stakes Presentations', desc:'Zoom and Teams techniques to keep the audience\'s attention and handle interruptions with authority.', practice:null },
        { n:22, m:3, title:'Live Fire Objections', desc:'Extreme practice rebutting tough sales objections live in English without losing your composure.', practice:'Record answers to these objections: "It\'s too expensive." / "We already have a provider." / "I need to think about it."' },
        { n:23, m:3, title:'Internal Selling — Winning Stakeholders', desc:'How to sell innovation projects or ideas to directors in other areas of the company.', practice:null },
        { n:24, m:3, title:'Executive Follow-Up & Scale Plan', desc:'The art of professional follow-up without coming across as pushy. Program closing and future roadmap.', practice:null },
    ];

    if (parseInt(modCount.rows[0].count) === 0) {
      for (const mod of modules) {
        await client.query(
          `INSERT INTO modules (number, month, title, description, practice_instructions, is_unlocked) VALUES ($1,$2,$3,$4,$5,$6)`,
          [mod.n, mod.m, mod.title, mod.desc, mod.practice || null, mod.n <= 6]
        );
      }
      console.log('Modules seeded.');
    } else {
      // Always correct month values based on module number (fixes DEFAULT=1 applied to all rows)
      await client.query(`
        UPDATE modules SET month = CASE
          WHEN number BETWEEN 1  AND 8  THEN 1
          WHEN number BETWEEN 9  AND 16 THEN 2
          WHEN number BETWEEN 17 AND 24 THEN 3
          ELSE 1 END
      `);
      // Re-translate description/practice_instructions to English for modules seeded before the translation
      for (const mod of modules) {
        await client.query(
          'UPDATE modules SET title=$1, description=$2, practice_instructions=$3 WHERE number=$4',
          [mod.title, mod.desc, mod.practice || null, mod.n]
        );
      }
    }

    // Create a demo student account if it doesn't exist yet
    const demoCheck = await client.query("SELECT id FROM users WHERE email = 'demo@improve.com'");
    if (!demoCheck.rows.length) {
      const demoHash = await bcrypt.hash('demo2025', 10);
      const demoResult = await client.query(
        `INSERT INTO users (email, password_hash, name, role) VALUES ($1, $2, 'Demo Student', 'student') RETURNING id`,
        ['demo@improve.com', demoHash]
      );
      const demoId = demoResult.rows[0].id;
      await client.query(
        `INSERT INTO student_module_access (user_id, module_id, is_unlocked)
         SELECT $1, id, number <= 8 FROM modules
         ON CONFLICT (user_id, module_id) DO NOTHING`,
        [demoId]
      );
      console.log('Demo student account created.');
    }

  } finally {
    client.release();
  }
}

module.exports = { pool, initDB };
