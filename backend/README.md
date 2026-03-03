# Backend Setup

## Local run
1. Install dependencies:
```bash
cd backend
npm install
```

2. Create env file:
```bash
copy .env.example .env
```

3. Fill `.env`:
- `DATABASE_URL`
- `JWT_SECRET`
- `CORS_ORIGIN` (optional for local, required for production)
- `GOOGLE_CLIENT_ID` (optional if you use Google login)

4. Start server:
```bash
npm run dev
```

## Free deploy (Render + Neon)
1. Create a Neon Postgres database and copy its connection string into `DATABASE_URL`.
2. Push this repo to GitHub.
3. In Render, create a new Blueprint deploy from repo root (`render.yaml` is already included).
4. Set Render environment variables:
- `DATABASE_URL` = Neon connection string
- `JWT_SECRET` = a long random secret
- `CORS_ORIGIN` = your frontend URL (example: `https://your-site.netlify.app`)
- `GOOGLE_CLIENT_ID` = your Google web client id (only if needed)
5. Deploy and verify:
- `GET https://<your-render-service>.onrender.com/health`

## Frontend API URL
Frontend scripts now use:
- `http://localhost:5000` on localhost
- `https://websitequize-backend.onrender.com` on production

If your Render service name is different, update the production URL in frontend JS files.

## API Endpoints
- `GET /health`
- `POST /auth/register` with `{ "fullName", "email", "password" }`
- `POST /auth/login` with `{ "email", "password" }`
