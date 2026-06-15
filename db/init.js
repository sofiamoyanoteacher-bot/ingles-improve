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
    // Create tables
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

    // Migrate: add profile columns if missing
    await client.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS age INTEGER;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS profession VARCHAR(255);
      ALTER TABLE users ADD COLUMN IF NOT EXISTS photo VARCHAR(255);
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
    if (parseInt(modCount.rows[0].count) === 0) {
      const modules = [
        // Month 1
        { n: 1, m: 1, title: 'The Shift — From Employee to Asset', desc: 'Sesión de mentalidad. Identificación de tu propuesta única de valor (USP). Aprendés a verte como un activo de negocio, no como un empleado.', practice: 'Escribí tu USP personal en 3 oraciones: [Identidad profesional] + [Resultado que generás] + [Diferencial único]. Grabá un video de 60 segundos diciéndola en inglés.' },
        { n: 2, m: 1, title: 'The Elevator Pitch', desc: 'Estructura y práctica para presentarte y enganchar a tu interlocutor en solo 60 segundos. Método de 4 pasos con ejemplos reales.', practice: 'Grabá tu elevator pitch completo (60 seg máx). Usá la estructura: Identidad → Resultado → Diferencial → Gancho. Sin leer, sin cortes.' },
        { n: 3, m: 1, title: 'Professional Storytelling', desc: 'Dominio del Método STAR para relatar logros y experiencias pasadas de forma atractiva para cualquier reclutador internacional.', practice: 'Grabá 3 historias STAR de tu carrera. Al menos una debe incluir un número concreto de impacto.' },
        { n: 4, m: 1, title: 'Data & KPIs', desc: 'Cómo hablar de números, porcentajes y métricas financieras en inglés sin dudar. Vocabulario específico de alto nivel corporativo.', practice: null },
        { n: 5, m: 1, title: 'Modern Corporate Jargon', desc: 'Incorporación del lenguaje y jerga de la alta gerencia (C-Suite). Frases que comunican autoridad sin sonar artificiales.', practice: null },
        { n: 6, m: 1, title: 'Active Listening', desc: 'Técnicas de ventas aplicadas a la escucha activa para detectar los puntos de dolor de una empresa durante una conversación.', practice: null },
        { n: 7, m: 1, title: 'Overcoming Blocks', desc: 'Sesión de coaching para vencer el síndrome del impostor y priorizar la convicción sobre la perfección.', practice: 'Grabá 90 segundos hablando de tu mayor logro profesional. Sin edición, sin cortes. La convicción importa más que la perfección.' },
        { n: 8, m: 1, title: 'Overcoming Objections', desc: 'El arte de responder preguntas difíciles sobre tu CV de manera estratégica sin perder autoridad.', practice: 'Grabá respuestas a estas 3 preguntas: "Why did you leave your last job?", "What\'s your biggest weakness?", "Why should we hire you?".' },
        // Month 2
        { n: 9, m: 2, title: 'Leadership & Influence', desc: 'Vocabulario de autoridad y verbos de impacto para demostrar capacidad de liderazgo ante cualquier panel internacional.', practice: null },
        { n: 10, m: 2, title: 'Behavioral Interview Mastery', desc: 'Simulacro y análisis para responder preguntas de comportamiento en alta gerencia con estructura y confianza.', practice: 'Grabá respuestas STAR completas a estas preguntas: "Tell me about a time you led a team through a challenge." / "Describe a situation where you had to meet a tight deadline."' },
        { n: 11, m: 2, title: 'Problem Solving Under Pressure', desc: 'Estructura lingüística para demostrar control emocional y resolución de crisis en tiempo real.', practice: null },
        { n: 12, m: 2, title: 'Cultural Fit & Closing', desc: 'Cómo evaluar la cultura de la empresa y cerrar la entrevista con preguntas estratégicas al reclutador.', practice: null },
        { n: 13, m: 2, title: 'High-Impact Written Pitch', desc: 'El arte de redactar Cold Emails ejecutivos que consiguen reuniones. Estructura, tono y longitud para máximo impacto.', practice: 'Redactá un cold email a una empresa real que te interese. Envialo por escrito (no video).' },
        { n: 14, m: 2, title: 'Executive Forms & ATS Filters', desc: 'Optimización de Cover Letters y formularios corporativos para superar filtros de inteligencia artificial.', practice: null },
        { n: 15, m: 2, title: 'The Mock Interview Part 1', desc: 'Simulacro completo de entrevista técnica y de perfil con feedback sobre estructura, vocabulario y lenguaje corporal.', practice: 'Grabá una entrevista simulada de 8-10 minutos respondiendo: Tell me about yourself / Why this company / Greatest achievement / Where do you see yourself in 5 years / Do you have questions for us.' },
        { n: 16, m: 2, title: 'The Mock Interview Part 2', desc: 'Ajustes finos de entonación, lenguaje corporal y pulido de errores detectados en la sesión anterior.', practice: 'Regrabá la mock interview incorporando el feedback recibido. Comparar ambas versiones.' },
        // Month 3
        { n: 17, m: 3, title: 'Neurosales Concepts', desc: 'Ganchos psicológicos para hablarle al cerebro tomador de decisiones del cliente o jefe.', practice: null },
        { n: 18, m: 3, title: 'Value-Based Pricing', desc: 'Estrategias de negociación salarial avanzada, manejo de presupuestos y anclas numéricas.', practice: 'Grabá una negociación salarial simulada de 2 minutos usando la frase ancla del módulo.' },
        { n: 19, m: 3, title: 'B2B Meeting Setups', desc: 'Cómo abrir y liderar una reunión virtual o presencial como consultor estratégico, no como proveedor.', practice: null },
        { n: 20, m: 3, title: 'Discovery Calls', desc: 'Formulación de preguntas quirúrgicas para que la contraparte admita sus debilidades operativas.', practice: 'Grabá una discovery call simulada de 3 minutos con preguntas tipo: "What\'s the biggest challenge your team is facing right now?"' },
        { n: 21, m: 3, title: 'High-Stakes Presentations', desc: 'Técnicas de Zoom y Teams para mantener la atención del público y manejar interrupciones con autoridad.', practice: null },
        { n: 22, m: 3, title: 'Live Fire Objections', desc: 'Práctica extrema para rebatir objeciones comerciales duras en vivo en inglés sin perder la calma.', practice: 'Grabá respuestas a estas objeciones: "It\'s too expensive." / "We already have a provider." / "I need to think about it."' },
        { n: 23, m: 3, title: 'Internal Selling — Winning Stakeholders', desc: 'Cómo vender proyectos o ideas de innovación a directores de otras áreas de la empresa.', practice: null },
        { n: 24, m: 3, title: 'Executive Follow-Up & Scale Plan', desc: 'El arte del seguimiento profesional sin caer en la persecución. Cierre del programa y mapa de ruta futuro.', practice: null },
      ];

      for (const mod of modules) {
        await client.query(
          `INSERT INTO modules (number, month, title, description, practice_instructions, is_unlocked)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [mod.n, mod.m, mod.title, mod.desc, mod.practice || null, mod.n <= 6]
        );
      }
      console.log('Modules seeded.');
    }
  } finally {
    client.release();
  }
}

module.exports = { pool, initDB };
