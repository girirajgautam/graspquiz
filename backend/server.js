const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const pool = require("./db");
require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT || 5000);
const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "";
const googleClient = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in environment.");
}

const allowedOrigins = CORS_ORIGIN.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
  })
);
app.use(express.json());

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(120) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS quiz_attempts (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      quiz_name VARCHAR(80) NOT NULL,
      level VARCHAR(10) NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      passed BOOLEAN NOT NULL,
      submitted_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_submitted_at
    ON quiz_attempts (user_id, submitted_at DESC);
  `);
}

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Missing or invalid authorization token." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
}

function buildAuthResponse(user) {
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    token,
    user: {
      id: user.id,
      fullName: user.full_name,
      email: user.email,
    },
  };
}

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/auth/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "fullName, email and password are required." });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existing = await pool.query("SELECT id FROM users WHERE email = $1", [normalizedEmail]);
    if (existing.rowCount > 0) {
      return res.status(409).json({ message: "Email already registered." });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const result = await pool.query(
      `INSERT INTO users (full_name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, full_name, email, created_at`,
      [fullName.trim(), normalizedEmail, passwordHash]
    );

    return res.status(201).json({ user: result.rows[0] });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required." });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [normalizedEmail]);
    if (result.rowCount === 0) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    return res.json(buildAuthResponse(user));
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.get("/auth/google/config", (_req, res) => {
  return res.json({ clientId: GOOGLE_CLIENT_ID || null });
});

app.post("/auth/google", async (req, res) => {
  try {
    if (!googleClient || !GOOGLE_CLIENT_ID) {
      return res.status(500).json({ message: "Google login is not configured on server." });
    }

    const { idToken } = req.body;
    if (!idToken) {
      return res.status(400).json({ message: "idToken is required." });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: String(idToken),
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = String(payload && payload.email ? payload.email : "").trim().toLowerCase();
    const name = String(payload && payload.name ? payload.name : "").trim();
    const emailVerified = Boolean(payload && payload.email_verified);

    if (!email || !emailVerified) {
      return res.status(401).json({ message: "Google account email is missing or not verified." });
    }

    let userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    let user = userResult.rows[0];

    if (!user) {
      const fallbackName = name || email.split("@")[0] || "Google User";
      const generatedPassword = `google_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const passwordHash = await bcrypt.hash(generatedPassword, 12);

      const insertResult = await pool.query(
        `INSERT INTO users (full_name, email, password_hash)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [fallbackName, email, passwordHash]
      );
      user = insertResult.rows[0];
    }

    return res.json(buildAuthResponse(user));
  } catch (error) {
    console.error("Google login error:", error);
    return res.status(401).json({ message: "Google token verification failed." });
  }
});

app.post("/quiz/submit", requireAuth, async (req, res) => {
  try {
    const { quizName, level, score, totalQuestions, passed } = req.body;

    if (!quizName || !level || !Number.isInteger(score) || !Number.isInteger(totalQuestions)) {
      return res.status(400).json({
        message: "quizName, level, score, and totalQuestions are required.",
      });
    }

    const insertResult = await pool.query(
      `INSERT INTO quiz_attempts (user_id, quiz_name, level, score, total_questions, passed)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, user_id, quiz_name, level, score, total_questions, passed, submitted_at`,
      [
        req.user.userId,
        String(quizName).trim(),
        String(level).trim().toLowerCase(),
        score,
        totalQuestions,
        Boolean(passed),
      ]
    );

    return res.status(201).json({ attempt: insertResult.rows[0] });
  } catch (error) {
    console.error("Quiz submit error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.get("/quiz/history", requireAuth, async (req, res) => {
  try {
    const historyResult = await pool.query(
      `SELECT id, quiz_name, level, score, total_questions, passed, submitted_at
       FROM quiz_attempts
       WHERE user_id = $1
       ORDER BY submitted_at DESC
       LIMIT 50`,
      [req.user.userId]
    );

    return res.json({ attempts: historyResult.rows });
  } catch (error) {
    console.error("Quiz history error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

async function startServer() {
  try {
    await ensureSchema();
    app.listen(PORT, () => {
      console.log(`Auth API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize server:", error);
    process.exit(1);
  }
}

startServer();
