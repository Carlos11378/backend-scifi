# backend-scifidaily

Node.js + Express backend scaffold for Sci-Fi Daily / Geopolítica / Assistente Pessoal.

Features:
- REST endpoints: auth, feeds, articles, notes, tasks, events, push subscribe
- Prisma + PostgreSQL schema
- RSS feed fetch job (rss-parser)
- Web Push support (web-push + VAPID)
- Scripts: start, dev, fetch-feeds

## Local setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill values (DATABASE_URL, JWT_SECRET, VAPID keys)
3. `npx prisma migrate dev --name init`
4. `npx prisma generate`
5. `npm run dev`

## Fetch feeds manually
`npm run fetch-feeds`

## Deploy (Render)
1. Create GitHub repo with these files.
2. On Render, create a new Web Service and connect the repo.
3. Set build command: `npm install`
4. Start command: `npm start`
5. Add environment variables from `.env.example` in Render dashboard.
6. Configure a Scheduled Job (Render) to run `npm run fetch-feeds` daily.

