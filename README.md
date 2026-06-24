# Ingles IMPROVE

Plataforma full-stack de la escuela de inglés "Ingles IMPROVE".

## Stack

- Frontend: React + Vite + TailwindCSS
- Backend: Node.js + Express
- Base de datos: SQLite (better-sqlite3)
- Auth: JWT + bcrypt
- Uploads: Multer

## Instalación

```
1. npm install
2. cp .env.example .env        ← editá JWT_SECRET antes de producción
3. npm run seed                ← crea la DB y los usuarios iniciales
4. npm run dev                 ← arranca server (3001) + client (5173)
5. Abrir http://localhost:5173
```

## Cuentas iniciales (creadas por `npm run seed`)

```
Teacher:
  email: teacher@improve.com
  password: Teacher2026!

Alumnos:
  alumno1@improve.com / Alumno2026!  → Valentina Appezzatto
  alumno2@improve.com / Alumno2026!  → Marcos Rodríguez
  alumno3@improve.com / Alumno2026!  → Sofía Medina
  alumno4@improve.com / Alumno2026!  → Diego Fernández
  alumno5@improve.com / Alumno2026!  → Camila Torres
```

## Producción (Railway / Vercel)

```
npm run build   # build del cliente (client/dist)
npm start        # levanta el server, que también sirve client/dist
```

El server sirve los archivos estáticos del cliente compilado y expone la API en `/api/*`.

## Deploy en Railway

SQLite vive en un archivo en disco y los homework se guardan en el filesystem — el filesystem de Railway es **efímero** por defecto (se borra en cada redeploy). Para no perder datos:

1. En el proyecto de Railway, agregá un **Volume** (Settings → Volumes) montado en `/data`.
2. Configurá las variables de entorno del servicio:
   ```
   JWT_SECRET=<algo seguro y largo>
   TEACHER_EMAIL=teacher@improve.com
   DB_DIR=/data/db
   UPLOADS_DIR=/data/uploads
   ```
3. Railway detecta `railway.json` (build con `npm install && npm run build`, start con `npm start`).
4. Después del primer deploy, corré el seed una sola vez desde la shell de Railway (Settings → conectar por SSH/CLI):
   ```
   railway run npm run seed
   ```
   (o ejecutalo localmente apuntando a la misma DB si preferís sembrar antes de desplegar).
5. Cada redeploy posterior reutiliza el mismo volumen, así que alumnos, progreso y homework persisten.

Sin el volumen montado, `DB_DIR`/`UPLOADS_DIR` caen por default a `./data` y `./uploads` dentro del contenedor, que se pierden en cada redeploy.

## Estructura

```
server/        Express API, SQLite, JWT, multer
client/        React + Vite + Tailwind
uploads/       Archivos de homework (gitignored)
data/          Archivo SQLite (gitignored)
legacy/        Versión anterior de la app (no relacionada), conservada como backup
```
