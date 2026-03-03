const l1QuestionPool = [
  { question: "What does SQL stand for?", answers: ["Structured Query Language", "Simple Query List", "Sequential Question Language", "System Query Logic"], correct: 0, explanation: "SQL stands for Structured Query Language." },
  { question: "Which SQL statement retrieves data from a table?", answers: ["GET", "FETCH", "SELECT", "READ"], correct: 2, explanation: "SELECT is used to read/query rows." },
  { question: "Which clause filters rows by condition?", answers: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], correct: 2, explanation: "WHERE filters rows before grouping." },
  { question: "Which keyword removes duplicate rows in results?", answers: ["UNIQUE", "DISTINCT", "DIFFERENT", "NODUP"], correct: 1, explanation: "DISTINCT returns unique result rows." },
  { question: "Which statement inserts a new row?", answers: ["ADD", "INSERT INTO", "PUT", "APPEND"], correct: 1, explanation: "INSERT INTO adds new records." },
  { question: "Which statement changes existing row values?", answers: ["MODIFY", "UPDATE", "CHANGE", "ALTER ROW"], correct: 1, explanation: "UPDATE modifies existing rows." },
  { question: "Which statement deletes rows from a table?", answers: ["REMOVE", "DELETE", "DROP", "ERASE"], correct: 1, explanation: "DELETE removes rows matching a condition." },
  { question: "Which clause sorts result rows?", answers: ["GROUP BY", "ORDER BY", "SORT BY", "RANK BY"], correct: 1, explanation: "ORDER BY controls sort order." },
  { question: "Which aggregate function counts rows?", answers: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"], correct: 1, explanation: "COUNT() returns number of rows/non-null values depending usage." },
  { question: "Which symbol is commonly used as wildcard in LIKE?", answers: ["*", "%", "_", "#"], correct: 1, explanation: "% matches zero or more characters." },
  { question: "Which command creates a new table?", answers: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"], correct: 1, explanation: "CREATE TABLE defines a new table schema." },
  { question: "Which command removes an entire table structure and data?", answers: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "TRUNCATE TABLE"], correct: 1, explanation: "DROP TABLE removes table definition and data." },
  { question: "Which key uniquely identifies each row?", answers: ["Foreign Key", "Primary Key", "Unique Key", "Composite Key"], correct: 1, explanation: "Primary key uniquely identifies each row." },
  { question: "Which key links rows between two tables?", answers: ["Primary Key", "Candidate Key", "Foreign Key", "Index Key"], correct: 2, explanation: "Foreign key references a key in another table." },
  { question: "Which operator tests a range of values?", answers: ["IN", "LIKE", "BETWEEN", "RANGE"], correct: 2, explanation: "BETWEEN checks inclusive lower/upper bounds." }
];

const l2QuestionPool = [
  { question: "What is the default join type when using just JOIN in many SQL dialects?", answers: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], correct: 2, explanation: "JOIN usually means INNER JOIN." },
  { question: "Which join returns all rows from left table and matched rows from right table?", answers: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"], correct: 1, explanation: "LEFT JOIN preserves all left-table rows." },
  { question: "Which clause filters groups after GROUP BY?", answers: ["WHERE", "HAVING", "ORDER BY", "LIMIT"], correct: 1, explanation: "HAVING filters grouped results." },
  { question: "Which SQL function returns the largest value?", answers: ["HIGH()", "MAX()", "TOP()", "LARGE()"], correct: 1, explanation: "MAX() returns highest value in a column/group." },
  { question: "What does NULL represent?", answers: ["Zero", "Empty string", "Unknown/missing value", "False"], correct: 2, explanation: "NULL means no known value, not zero or empty string." },
  { question: "How do you test NULL values?", answers: ["= NULL", "== NULL", "IS NULL", "NULL()"], correct: 2, explanation: "Use IS NULL / IS NOT NULL." },
  { question: "Which clause limits number of returned rows in MySQL/PostgreSQL?", answers: ["TOP", "LIMIT", "ROWCOUNT", "FETCH FIRST only"], correct: 1, explanation: "LIMIT restricts result size." },
  { question: "Which command removes all rows but keeps table structure?", answers: ["DELETE", "DROP", "TRUNCATE", "CLEAR"], correct: 2, explanation: "TRUNCATE removes all rows and keeps table definition." },
  { question: "What does GROUP BY do?", answers: ["Sort rows only", "Combine rows into summary groups", "Filter duplicates", "Join tables"], correct: 1, explanation: "GROUP BY creates groups for aggregate calculations." },
  { question: "Which clause is executed before GROUP BY logically?", answers: ["HAVING", "ORDER BY", "WHERE", "SELECT"], correct: 2, explanation: "WHERE filters rows before grouping." },
  { question: "What is a composite key?", answers: ["Key with one column", "Primary key with auto increment", "Key built from multiple columns", "Foreign key with index"], correct: 2, explanation: "Composite key uses two or more columns." },
  { question: "What does UNION do by default?", answers: ["Keeps duplicates", "Removes duplicates between result sets", "Joins tables by key", "Appends columns"], correct: 1, explanation: "UNION combines results and removes duplicates by default." },
  { question: "Which operator checks if value exists in a list?", answers: ["ANY", "IN", "EXISTS", "MATCH"], correct: 1, explanation: "IN checks membership in a list/subquery result." },
  { question: "Which command adds a new column to existing table?", answers: ["UPDATE TABLE", "ALTER TABLE ... ADD", "MODIFY TABLE", "CREATE COLUMN"], correct: 1, explanation: "Use ALTER TABLE with ADD clause." },
  { question: "What is an index primarily used for?", answers: ["Increase storage only", "Speed up data retrieval", "Encrypt data", "Prevent nulls"], correct: 1, explanation: "Indexes improve lookup/search performance (with write overhead)." }
];

const l3QuestionPool = [
  { question: "What is a subquery?", answers: ["A temporary table only", "Query nested inside another query", "A join alias", "A database schema"], correct: 1, explanation: "Subquery is an inner query used by an outer query." },
  { question: "Which SQL construct is best for checking existence of related rows efficiently?", answers: ["IN with long literal list", "EXISTS", "ORDER BY", "DISTINCT"], correct: 1, explanation: "EXISTS can be efficient for existence checks." },
  { question: "Which normal form removes partial dependency on composite key?", answers: ["1NF", "2NF", "3NF", "BCNF"], correct: 1, explanation: "2NF removes partial dependencies on part of a composite key." },
  { question: "Which normal form removes transitive dependency?", answers: ["1NF", "2NF", "3NF", "4NF"], correct: 2, explanation: "3NF addresses transitive dependencies." },
  { question: "What is ACID property 'A'?", answers: ["Accuracy", "Atomicity", "Availability", "Aggregation"], correct: 1, explanation: "Atomicity means all-or-nothing transaction behavior." },
  { question: "What does COMMIT do?", answers: ["Undo changes", "Save transaction changes permanently", "Lock table", "Start transaction"], correct: 1, explanation: "COMMIT finalizes current transaction changes." },
  { question: "What does ROLLBACK do?", answers: ["Persist changes", "Undo uncommitted changes", "Drop database", "Reindex table"], correct: 1, explanation: "ROLLBACK reverts transaction changes not yet committed." },
  { question: "Which isolation issue allows reading uncommitted data?", answers: ["Phantom read", "Dirty read", "Non-repeatable read", "Lost update"], correct: 1, explanation: "Dirty read occurs when reading uncommitted changes." },
  { question: "What is window function ROW_NUMBER() used for?", answers: ["Count total table rows only", "Assign sequential row numbers over a partition/order", "Generate primary keys", "Sort table physically"], correct: 1, explanation: "ROW_NUMBER() numbers rows in ordered partitions." },
  { question: "Which clause defines partitioning/order for window functions?", answers: ["GROUP BY only", "OVER (...)", "WINDOW BY", "FRAME"], correct: 1, explanation: "Window functions use OVER clause." },
  { question: "What is a CTE in SQL?", answers: ["Column Type Expression", "Common Table Expression", "Cross Table Engine", "Compiled Table Entity"], correct: 1, explanation: "CTE is a named temporary result set in a query." },
  { question: "Which statement best describes LEFT JOIN with unmatched right rows?", answers: ["Rows are dropped", "Right columns become NULL", "Query fails", "Rows duplicate always"], correct: 1, explanation: "Unmatched right side columns are NULL in LEFT JOIN output." },
  { question: "What is the purpose of EXPLAIN query plans?", answers: ["Encrypt queries", "Show how database executes a query", "Format output", "Convert SQL dialect"], correct: 1, explanation: "EXPLAIN helps optimize queries by revealing execution strategy." },
  { question: "Why can SELECT * be problematic in production queries?", answers: ["Always fastest", "Can fetch unnecessary columns and break callers after schema changes", "Cannot be indexed", "Invalid SQL"], correct: 1, explanation: "Explicit columns are safer and often more efficient." },
  { question: "Which join can create Cartesian product if no condition is applied?", answers: ["INNER JOIN with ON", "LEFT JOIN", "CROSS JOIN", "FULL JOIN"], correct: 2, explanation: "CROSS JOIN returns Cartesian product." }
];

const l4QuestionPool = [
  { question: "What is a common cause of deadlocks in transactional systems?", answers: ["Only read-only queries", "Conflicting lock order between transactions", "Using indexes", "Using SELECT"], correct: 1, explanation: "Different lock acquisition order can produce deadlocks." },
  { question: "Which indexing strategy helps prefix searches like WHERE name LIKE 'ab%';", answers: ["Hash index only", "B-tree index", "No index can help", "Bitmap always"], correct: 1, explanation: "B-tree indexes support ordered prefix lookups in many engines." },
  { question: "What is cardinality in query optimization context?", answers: ["Column width in bytes", "Estimated number of rows for an operation", "Number of tables in database", "Count of indexes"], correct: 1, explanation: "Cardinality estimates guide optimizer decisions." },
  { question: "What is the N+1 query problem?", answers: ["One query too many in SQL syntax", "Running one query for parent rows and extra query per row for children", "Using UNION many times", "Query timeout on first run"], correct: 1, explanation: "N+1 hurts performance due to many round-trips." },
  { question: "Which approach usually improves large pagination performance over OFFSET at deep pages?", answers: ["Larger OFFSET", "Keyset/seek pagination", "SELECT *", "ORDER BY RAND()"], correct: 1, explanation: "Keyset pagination avoids scanning skipped rows." },
  { question: "Why can functions on indexed columns in WHERE hurt performance?", answers: ["They make SQL invalid", "They can prevent index usage (non-sargable predicates)", "They always lock rows", "They force full transaction rollback"], correct: 1, explanation: "Wrapping indexed columns may disable efficient index seek." },
  { question: "What is a covering index?", answers: ["Index that covers only primary key", "Index containing all columns needed by a query", "Index on every table column always", "Temporary index for transaction"], correct: 1, explanation: "Covering index can satisfy query without table lookup." },
  { question: "What does idempotent upsert aim to guarantee?", answers: ["Insert duplicates each run", "Repeated same operation yields same end state", "Always update all rows", "Disable constraints"], correct: 1, explanation: "Idempotency avoids unintended duplicate effects." },
  { question: "Which technique helps enforce data integrity across related tables?", answers: ["Only application checks", "Foreign keys with constraints", "Avoid transactions", "Disable NULL checks"], correct: 1, explanation: "Foreign key constraints keep references valid." },
  { question: "What is denormalization tradeoff?", answers: ["No downside", "Faster reads in some cases but more redundancy/update complexity", "Always slower reads", "Removes need for indexes"], correct: 1, explanation: "Denormalization can improve reads but increases write maintenance cost." },
  { question: "Why are prepared statements recommended?", answers: ["Only for formatting output", "Performance reuse and SQL injection risk reduction", "Required for SELECT only", "They encrypt database"], correct: 1, explanation: "Prepared statements separate query structure from data parameters." },
  { question: "What does eventual consistency imply?", answers: ["Immediate consistency always", "Data replicas may be temporarily out of sync but converge later", "No replication", "Single-node storage"], correct: 1, explanation: "Eventually consistent systems converge over time." },
  { question: "What is write amplification concern with too many indexes?", answers: ["Reads become impossible", "More indexes increase write/update overhead", "Indexes reduce disk usage always", "Queries stop using optimizer"], correct: 1, explanation: "Each write may update multiple indexes." },
  { question: "Which transaction isolation generally prevents phantom reads in standard SQL levels?", answers: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ always in all DBs", "SERIALIZABLE"], correct: 3, explanation: "SERIALIZABLE is the strict level that prevents phantoms per standard model." },
  { question: "What is a materialized view?", answers: ["A normal view only", "Persisted query result that can speed reads", "Temporary table dropped instantly", "Index alias"], correct: 1, explanation: "Materialized views store precomputed results for faster querying." }
];

function buildLevelQuestions(pool, offset) {
  const total = 25;
  return Array.from({ length: total }, (_, idx) => {
    const q = pool[(idx + offset) % pool.length];
    return { question: q.question, answers: [...q.answers], correct: q.correct, explanation: q.explanation };
  });
}

const quizLevels = {
  l1: buildLevelQuestions(l1QuestionPool, 0),
  l2: buildLevelQuestions(l2QuestionPool, 0),
  l3: buildLevelQuestions(l3QuestionPool, 0),
  l4: buildLevelQuestions(l4QuestionPool, 0)
};

let currentLevel = "l1";
let quizData = quizLevels[currentLevel];
let currentQuestion = 0;
let score = 0;
const PASS_SCORE_BY_LEVEL = { l1: 16, l2: 18, l3: 20, l4: 22 };
const LEVEL_ORDER = ["l1", "l2", "l3", "l4"];
const unlockedLevels = new Set(LEVEL_ORDER);
let quizInitialized = false;
let lastFeedbackState = null;
const API_BASE_URL = (
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000"
    : "https://websitequize-backend.onrender.com"
).replace(/\/$/, "");
const QUIZ_NAME = "sql";
let submissionPromise = null;
function trackQuizEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const explanationEl = document.getElementById("explanation");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const levelMetaEl = document.getElementById("levelMeta");
const questionNavRowEl = document.getElementById("questionNavRow");
const prevBtn = document.getElementById("prevBtn");
const quizIntroEl = document.querySelector(".quiz-intro");
const relatedQuizzesEl = document.querySelector(".related-quizzes");
const backHomeBtnEl = document.querySelector("button[onclick*='index.html']");
const levelButtons = document.querySelectorAll(".level-btn");
const levelPickerEl = document.getElementById("levelPicker");
const quizContainerEl = document.querySelector(".quiz-container");
const topActionsEl = document.querySelector(".quiz-top-actions");
const backToSetsBtn = (() => {
  if (!quizContainerEl && !topActionsEl) return null;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "back-to-sets-btn";
  btn.textContent = "<- Back to Sets";
  btn.style.display = "none";
  btn.addEventListener("click", () => showLevelSelection());
  if (topActionsEl) topActionsEl.insertBefore(btn, topActionsEl.firstChild);
  else if (quizContainerEl) quizContainerEl.insertBefore(btn, quizContainerEl.firstChild);
  return btn;
})();


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildLearnExample(questionText, correctAnswer) {
  const text = String(questionText || "").toLowerCase();
  const answer = String(correctAnswer || "").trim();

  if (text.includes("defines a function in python") || answer === "def") {
    return [
      "Python example:",
      "def greet(name):",
      "    return f\"Hello, {name}\"",
      "",
      "print(greet(\"Ram\"))  # Hello, Ram"
    ].join("\n");
  }

  return [
    "Quick example:",
    "Question type: " + String(questionText).trim(),
    "Correct option: " + answer,
    "",
    "Use case:",
    "Use '" + answer + "' when this concept appears in a similar question."
  ].join("\n");
}

function showLearnMore(questionData, correctIndex) {
  if (!explanationEl || !questionData) return;
  const correctAnswer = questionData.answers[correctIndex];
  const questionText = questionData.question;
  const explanationText = questionData.explanation;

  lastFeedbackState = {
    className: explanationEl.className,
    html: explanationEl.innerHTML,
    questionData,
    correctIndex,
  };

  explanationEl.className = "feedback-box feedback-learn";
  explanationEl.innerHTML = `
    <div class="learn-more-head">
      <button type="button" class="learn-more-back">Back</button>
      <span class="learn-more-badge">Learn More</span>
    </div>
    <p><strong>Question:</strong> ${escapeHtml(questionText)}</p>
    <p><strong>Correct Answer:</strong> ${escapeHtml(correctAnswer)}</p>
    <p><strong>Why:</strong> ${escapeHtml(explanationText)}</p>
    <pre><code>${escapeHtml(buildLearnExample(questionText, correctAnswer))}</code></pre>
  `;

  const backBtn = explanationEl.querySelector(".learn-more-back");
  if (!backBtn) return;
  backBtn.addEventListener("click", () => {
    if (!lastFeedbackState) return;
    explanationEl.className = lastFeedbackState.className;
    explanationEl.innerHTML = lastFeedbackState.html;
    attachLearnMore(lastFeedbackState.questionData, lastFeedbackState.correctIndex);
  });
}

function attachLearnMore(questionData, correctIndex) {
  if (!explanationEl) return;
  const learnMoreBtn = explanationEl.querySelector(".learn-more-btn");
  if (!learnMoreBtn) return;
  learnMoreBtn.addEventListener("click", () => showLearnMore(questionData, correctIndex));
}

function reportRuntimeError(message) { if (questionEl) questionEl.textContent = message; }
if (questionEl && String(questionEl.textContent).trim() === "Question text will appear here") {
  const firstQuestion = l1QuestionPool && l1QuestionPool[0] ? l1QuestionPool[0].question : "No questions loaded.";
  questionEl.textContent = firstQuestion;
}
window.addEventListener("error", (event) => { const msg = event && event.message ? event.message : "Unknown runtime error"; reportRuntimeError(`Quiz runtime error: ${msg}`); });
if (nextBtn && nextBtn.parentElement !== document.body) document.body.appendChild(nextBtn);

function pinNextButton() {
  if (!nextBtn) return;
  nextBtn.style.position = "fixed";
  nextBtn.style.left = "12px";
  nextBtn.style.right = "12px";
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  nextBtn.style.setProperty("bottom", isMobile ? "calc(env(safe-area-inset-bottom, 0px) + 8px)" : "16px", "important");
  nextBtn.style.zIndex = "4000";
  nextBtn.style.width = "auto";
  nextBtn.style.maxWidth = isMobile ? "360px" : "460px";
  nextBtn.style.marginLeft = "auto";
  nextBtn.style.marginRight = "auto";
}

try { pinNextButton(); } catch (error) { reportRuntimeError(`Quiz init error: ${error.message}`); }
window.addEventListener("resize", pinNextButton);

function snapToQuizTop() { if (quizContainerEl) quizContainerEl.scrollIntoView({ behavior: "auto", block: "start" }); }
function formatLevel(level) {
  const n = String(level).replace(/[^0-9]/g, "");
  return `Set ${n || "1"}`;
}
function getPassScoreForLevel(level) { return PASS_SCORE_BY_LEVEL[level] || 20; }
function updateLevelMeta() { levelMetaEl.textContent = `${formatLevel(currentLevel)} | Question ${currentQuestion + 1}/${quizData.length}`; }
function updatePrevButton() {
  if (!prevBtn) return;
  prevBtn.disabled = currentQuestion === 0;
}

function setActiveLevelButton() {
  levelButtons.forEach((btn) => {
    const level = btn.dataset.level;
    const isUnlocked = unlockedLevels.has(level);
    const isActive = btn.dataset.level === currentLevel;
    const label = formatLevel(level);
    btn.textContent = isUnlocked ? "Start Now ->" : "Locked";
    btn.classList.toggle("active", isActive);
    btn.disabled = !isUnlocked;
    btn.setAttribute("aria-pressed", String(isActive));
    btn.setAttribute("aria-label", `Open ${label}`);
    if (!isUnlocked) {
      const idx = LEVEL_ORDER.indexOf(level);
      const prevLevelKey = idx > 0 ? LEVEL_ORDER[idx - 1] : "l1";
      const prevLevel = formatLevel(prevLevelKey);
      const prevPassScore = getPassScoreForLevel(prevLevelKey);
      btn.title = `Score ${prevPassScore}/25 in ${prevLevel} to unlock`;
    } else {
      btn.title = "";
    }
  });
}

function unlockNextLevel() {
  const currentIdx = LEVEL_ORDER.indexOf(currentLevel);
  if (currentIdx < 0 || currentIdx >= LEVEL_ORDER.length - 1) return null;
  const nextLevel = LEVEL_ORDER[currentIdx + 1];
  unlockedLevels.add(nextLevel);
  return nextLevel;
}

function loadQuestion() {
  snapToQuizTop();
  const q = quizData[currentQuestion];
  updateLevelMeta();
  updatePrevButton();
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  explanationEl.innerHTML = "";
  explanationEl.className = "";
  nextBtn.style.display = "none";
  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = ans;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  const correctIndex = q.correct;
  if (index === correctIndex) score++;
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    if (i === correctIndex) {
      btn.style.background = "#16a34a";
      btn.style.color = "#ffffff";
    } else if (i === index) {
      btn.style.background = "#dc2626";
      btn.style.color = "#ffffff";
    } else {
      btn.style.background = "#cbd5e1";
      btn.style.color = "#1e293b";
    }
    btn.disabled = true;
  });

  if (index === correctIndex) {
    explanationEl.className = "feedback-box feedback-correct";
    explanationEl.innerHTML = `
      <div class="feedback-title">Right</div>
      <p><strong>${q.answers[correctIndex]}</strong> is correct.</p>
      <p>${q.explanation}</p>
      <div class="feedback-actions">
        <button type="button" class="learn-more-btn">Learn More</button>
      </div>
    `;
  } else {
    explanationEl.className = "feedback-box feedback-wrong";
    explanationEl.innerHTML = `
      <div class="feedback-title">Wrong</div>
      <p>Right answer: <strong>${q.answers[correctIndex]}</strong></p>
      <p>${q.explanation}</p>
      <div class="feedback-actions">
        <button type="button" class="learn-more-btn">Learn More</button>
      </div>
    `;
  }

  attachLearnMore(q, correctIndex);
nextBtn.style.display = "inline-block";
  snapToQuizTop();

  submitQuizRecord(currentQuestion + 1, false).catch((error) => {
    console.error("Quiz progress save failed:", error);
  });
}

function getAuthToken() {
  try {
    return localStorage.getItem("authToken") || "";
  } catch (_error) {
    return "";
  }
}

async function submitQuizRecord(totalQuestions = quizData.length, isFinal = false) {

  const token = getAuthToken();
  if (!token) {
    return { skipped: true, message: "Not logged in." };
  }

  const payload = {
    quizName: QUIZ_NAME,
    level: currentLevel,
    score,
    totalQuestions,
    passed: isFinal ? score >= getPassScoreForLevel(currentLevel) : false,
  };

  submissionPromise = fetch(`${API_BASE_URL}/quiz/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(async (response) => {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to save quiz record.");
    }
    return data;
  });

  return submissionPromise;
}
function showResult() {
  const passed = score >= getPassScoreForLevel(currentLevel);
  trackQuizEvent("complete_quiz", {
    quiz_name: QUIZ_NAME,
    level: currentLevel,
    score,
    total_questions: quizData.length,
    passed,
  });
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  explanationEl.style.display = "none";
  nextBtn.style.display = "none";
  if (relatedQuizzesEl) relatedQuizzesEl.style.display = "block";
  if (questionNavRowEl) questionNavRowEl.style.display = "none";
  levelMetaEl.textContent = `${formatLevel(currentLevel)} completed | Score ${score}/${quizData.length}`;
  setActiveLevelButton();
  const ruleText = passed
    ? `Pass rule met (${score}/${quizData.length}).`
    : `Score ${score}/${quizData.length}.`;
  const currentIdx = LEVEL_ORDER.indexOf(currentLevel);
  const nextLevel = currentIdx >= 0 && currentIdx < LEVEL_ORDER.length - 1
    ? LEVEL_ORDER[currentIdx + 1]
    : null;
  const nextLevelBtn = nextLevel
    ? `<button type="button" onclick="goToLevel('${nextLevel}')">Next Level</button>`
    : "";
  const token = getAuthToken();
  const saveStatusText = token
    ? "Saving your quiz record..."
    : "Sign in is disabled on this website.";

  resultEl.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3>
                        <p>${ruleText}</p>
                        <p id="saveStatus">${saveStatusText}</p>
                        ${nextLevelBtn}
                        <button type="button" onclick="restartQuiz()">Try Again</button>
                        <button type="button" onclick="shareScore()">Share Score</button>`;

  if (!token) return;

  const saveStatusEl = document.getElementById("saveStatus");
  submitQuizRecord(quizData.length, true)
    .then(() => {
      if (saveStatusEl) saveStatusEl.textContent = "Quiz record saved.";
    })
    .catch((error) => {
      if (saveStatusEl) saveStatusEl.textContent = `Failed to save record: ${error.message}`;
      console.error("Quiz save failed:", error);
    });
}
function shareScore() {
  const shareText = `I scored ${score}/${quizData.length} in ${String(QUIZ_NAME).toUpperCase()} ${formatLevel(currentLevel)} on GraspQuiz!`;
  const shareUrl = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: "GraspQuiz Score",
      text: shareText,
      url: shareUrl,
    }).catch(() => {});
    return;
  }

  const fallback = `${shareText} ${shareUrl}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fallback)
      .then(() => alert("Score link copied. Share it anywhere."))
      .catch(() => prompt("Copy and share your score:", fallback));
    return;
  }

  prompt("Copy and share your score:", fallback);
}
function showLevelSelection() {
  if (levelPickerEl) levelPickerEl.style.display = "grid";
  if (questionNavRowEl) questionNavRowEl.style.display = "none";
  if (quizIntroEl) quizIntroEl.style.display = "block";
  if (relatedQuizzesEl) relatedQuizzesEl.style.display = "block";
  if (backToSetsBtn) backToSetsBtn.style.display = "none";
  if (backHomeBtnEl) backHomeBtnEl.style.display = "inline-block";
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  explanationEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.style.display = "none";
}

function goToLevel(level) {
  setLevel(level);
}
function restartQuiz() {
  submissionPromise = null;
  currentQuestion = 0;
  score = 0;
  questionEl.style.display = "block";
  answersEl.style.display = "grid";
  explanationEl.style.display = "block";
  explanationEl.innerHTML = "";
  explanationEl.className = "";
  resultEl.innerHTML = "";
  if (relatedQuizzesEl) relatedQuizzesEl.style.display = "none";
  if (backHomeBtnEl) backHomeBtnEl.style.display = "none";
  if (questionNavRowEl) questionNavRowEl.style.display = "grid";
  loadQuestion();
}

function setLevel(level) {
  if (!quizLevels[level]) return;
  trackQuizEvent("start_quiz", {
    quiz_name: QUIZ_NAME,
    level,
    source: "level_selection",
  });
  submissionPromise = null;
  if (levelPickerEl) levelPickerEl.style.display = "none";
  if (questionNavRowEl) questionNavRowEl.style.display = "grid";
  if (quizIntroEl) quizIntroEl.style.display = "none";
  if (relatedQuizzesEl) relatedQuizzesEl.style.display = "none";
  if (backHomeBtnEl) backHomeBtnEl.style.display = "none";
  if (resultEl) resultEl.style.display = "block";
  if (backToSetsBtn) backToSetsBtn.style.display = "inline-flex";
  currentLevel = level;
  quizData = quizLevels[currentLevel];
  currentQuestion = 0;
  score = 0;
  questionEl.style.display = "block";
  answersEl.style.display = "grid";
  explanationEl.style.display = "block";
  explanationEl.innerHTML = "";
  explanationEl.className = "";
  resultEl.innerHTML = "";
  nextBtn.style.display = "none";
  setActiveLevelButton();
  loadQuestion();
}

function showInitError(message) { if (questionEl) questionEl.textContent = message; }

function initQuiz() {
  if (quizInitialized) return true;
  if (!(questionEl && answersEl && explanationEl && nextBtn && resultEl && levelMetaEl && levelButtons.length > 0)) {
    showInitError("Quiz failed to initialize: required page elements are missing.");
    return false;
  }

  nextBtn.onclick = (event) => {
    event.preventDefault();
    currentQuestion++;
    if (currentQuestion < quizData.length) loadQuestion();
    else showResult();
  };

  
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentQuestion <= 0) return;
      currentQuestion--;
      loadQuestion();
    });
  }
  levelButtons.forEach((btn) => { btn.addEventListener("click", () => setLevel(btn.dataset.level)); });
  showLevelSelection();
  quizInitialized = true;
  return true;
}

if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", initQuiz, { once: true }); }
initQuiz();
setTimeout(initQuiz, 0);
setTimeout(initQuiz, 200);












