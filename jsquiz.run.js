const l1QuestionPool = [
  { question: "Which keyword declares a block-scoped variable?", answers: ["var", "let", "const", "both let and const"], correct: 3, explanation: "let and const are block-scoped." },
  { question: "Which method converts JSON string to object?", answers: ["JSON.object", "JSON.parse", "JSON.stringify", "parseJSON"], correct: 1, explanation: "JSON.parse converts a JSON string into an object." },
  { question: "What is the result type of typeof []?", answers: ["array", "object", "list", "undefined"], correct: 1, explanation: "Arrays are objects in JavaScript." },
  { question: "Which operator checks strict equality?", answers: ["==", "!=", "===", "="], correct: 2, explanation: "=== compares value and type." },
  { question: "Which function prints to browser console?", answers: ["print()", "console.log()", "echo()", "document.write()"], correct: 1, explanation: "console.log writes debug output to console." },
  { question: "How do you write a single-line comment in JS?", answers: ["# comment", "-- comment", "// comment", "/* comment */"], correct: 2, explanation: "// starts a single-line comment." },
  { question: "Which value means 'no value assigned'?", answers: ["null", "undefined", "NaN", "void"], correct: 1, explanation: "undefined typically means not assigned yet." },
  { question: "Which method adds item to end of array?", answers: ["shift", "push", "unshift", "concat"], correct: 1, explanation: "push appends element to array end." },
  { question: "What does NaN stand for?", answers: ["Not a Name", "New and Null", "Not a Number", "No assigned Number"], correct: 2, explanation: "NaN means Not a Number." },
  { question: "Which loop iterates over iterable values?", answers: ["for...in", "for...of", "while...in", "loop...of"], correct: 1, explanation: "for...of iterates over values of iterable objects." },
  { question: "How do you define an arrow function?", answers: ["function => ()", "() => {}", "=> function()", "lambda()"], correct: 1, explanation: "Arrow function syntax uses =>." },
  { question: "Which API stores key/value pairs in browser permanently (until cleared)?", answers: ["sessionStorage", "localStorage", "cookies only", "cacheStorage"], correct: 1, explanation: "localStorage persists across sessions." },
  { question: "Which statement creates an array?", answers: ["let a = {}", "let a = []", "let a = ()", "let a = ''"], correct: 1, explanation: "[] literal creates an array." },
  { question: "What does DOM stand for?", answers: ["Document Object Model", "Data Object Mapping", "Display Object Module", "Document Oriented Mode"], correct: 0, explanation: "DOM is Document Object Model." },
  { question: "Which method removes last array element?", answers: ["pop", "shift", "slice", "splice(0,1)"], correct: 0, explanation: "pop removes and returns the last element." }
];

const l2QuestionPool = [
  { question: "What is event bubbling?", answers: ["Event moves from parent to child", "Event moves from target up to ancestors", "Event runs only once", "Event disabled state"], correct: 1, explanation: "By default events bubble from target to ancestors." },
  { question: "Which call schedules code after current call stack is clear?", answers: ["setTimeout(fn, 0)", "while(true)", "prompt()", "alert()"], correct: 0, explanation: "setTimeout with 0ms queues callback in task queue." },
  { question: "What does JSON.stringify do?", answers: ["Converts object to JSON string", "Converts JSON to object", "Parses XML", "Clones function"], correct: 0, explanation: "JSON.stringify serializes data to a JSON string." },
  { question: "Which is true about const objects?", answers: ["Object cannot mutate", "Reference cannot be reassigned", "Properties are frozen by default", "const equals deep readonly"], correct: 1, explanation: "const prevents rebinding the reference, not mutating nested props." },
  { question: "Which method creates a new array from mapping each element?", answers: ["forEach", "map", "filter", "reduce"], correct: 1, explanation: "map transforms each element and returns a new array." },
  { question: "What does filter return?", answers: ["Single value", "Boolean", "Subset array", "Sorted array"], correct: 2, explanation: "filter returns elements where predicate is true." },
  { question: "What is closure in JS?", answers: ["Function with access to outer lexical scope", "Closed browser tab", "Private class only", "Async callback only"], correct: 0, explanation: "Closures capture surrounding lexical variables." },
  { question: "Which keyword is used to handle Promise rejection?", answers: ["except", "reject", "catch", "error"], correct: 2, explanation: "Promise rejections are handled by catch." },
  { question: "Which method merges arrays without mutating original?", answers: ["push", "splice", "concat", "pop"], correct: 2, explanation: "concat returns a new merged array." },
  { question: "Which value is falsy?", answers: ["[]", "{}", "0", "'0'"], correct: 2, explanation: "0 is falsy; empty array/object/string '0' are truthy except ''." },
  { question: "What does preventDefault() do in event handler?", answers: ["Stops bubbling", "Stops default browser action", "Stops JS execution", "Removes element"], correct: 1, explanation: "preventDefault cancels default behavior." },
  { question: "Which operator safely accesses nested property?", answers: ["??", "?:", "?.", "::"], correct: 2, explanation: "Optional chaining uses ?. operator." },
  { question: "What does nullish coalescing (??) return?", answers: ["Right operand for any falsy left", "Right only when left is null/undefined", "Always left", "Always right"], correct: 1, explanation: "?? falls back only for null or undefined." },
  { question: "Which method parses integer from string?", answers: ["Number.parseInt", "parseFloat", "toInt", "Math.int"], correct: 0, explanation: "parseInt / Number.parseInt parse integer values." },
  { question: "What does strict mode ('use strict') help with?", answers: ["Adds TypeScript types", "Catches common silent errors", "Speeds DOM rendering only", "Makes all vars global"], correct: 1, explanation: "Strict mode prevents unsafe actions and throws helpful errors." }
];

const l3QuestionPool = [
  { question: "What is the output of Promise.resolve(1).then(x => x + 1)?", answers: ["2 synchronously", "Promise resolving to 2", "undefined", "Error"], correct: 1, explanation: "then returns a Promise resolved with transformed value." },
  { question: "Which structure manages async flow with try/catch syntax?", answers: ["callbacks", "async/await", "setInterval", "switch"], correct: 1, explanation: "async/await gives readable asynchronous code." },
  { question: "What does Array.prototype.reduce do?", answers: ["Removes duplicates", "Accumulates array into single result", "Sorts array", "Creates sparse array"], correct: 1, explanation: "reduce folds array elements into one value." },
  { question: "Which statement about hoisting is true?", answers: ["let/const are initialized before declaration", "var declarations are hoisted", "Functions cannot be hoisted", "Nothing is hoisted"], correct: 1, explanation: "var declarations and function declarations are hoisted." },
  { question: "What is temporal dead zone?", answers: ["Time spent in setTimeout", "Period where let/const exists but cannot be accessed", "Garbage collection phase", "Event loop block"], correct: 1, explanation: "TDZ is before initialization of let/const variables." },
  { question: "Which collection keeps insertion order and unique values?", answers: ["Map", "Set", "Object", "WeakMap"], correct: 1, explanation: "Set stores unique values in insertion order." },
  { question: "Which is true about Map compared to Object?", answers: ["Map keys are strings only", "Map keeps insertion order and allows any key type", "Object always faster in all cases", "Map cannot iterate"], correct: 1, explanation: "Map supports any key type and iteration order." },
  { question: "What does debouncing primarily control?", answers: ["Memory usage", "Call frequency by delaying execution", "DOM size", "Promise chaining"], correct: 1, explanation: "Debounce limits bursty calls by waiting pause before run." },
  { question: "Which call clones shallowly an object obj?", answers: ["Object.assign({}, obj)", "obj.clone()", "copy(obj)", "JSON.parse(obj)"], correct: 0, explanation: "Object.assign with empty target creates shallow clone." },
  { question: "What is a pure function?", answers: ["Uses global variables", "No side effects and same input -> same output", "Returns Promise always", "Runs only once"], correct: 1, explanation: "Pure functions are deterministic and side-effect free." },
  { question: "Which browser API observes DOM mutations?", answers: ["ResizeObserver", "MutationObserver", "IntersectionObserver", "EventTarget"], correct: 1, explanation: "MutationObserver watches DOM tree changes." },
  { question: "What does event delegation improve?", answers: ["Creates more listeners", "Uses parent listener to handle child events efficiently", "Disables bubbling", "Blocks dynamic elements"], correct: 1, explanation: "Delegation scales better for dynamic child elements." },
  { question: "Which statement about this in arrow functions is correct?", answers: ["Has its own dynamic this", "Lexically captures this from enclosing scope", "Always window", "Always undefined"], correct: 1, explanation: "Arrow functions do not bind their own this." },
  { question: "What is the purpose of module exports/imports?", answers: ["Inline CSS", "Organize reusable code across files", "Store local data", "Replace functions"], correct: 1, explanation: "Modules structure and share code cleanly." },
  { question: "Which method executes callback for each array item without returning new array?", answers: ["map", "reduce", "forEach", "filter"], correct: 2, explanation: "forEach iterates for side effects and returns undefined." }
];

const l4QuestionPool = [
  { question: "What does lexical scoping imply for closures in JavaScript?", answers: ["Scope decided at runtime call-site only", "Functions capture variables from definition environment", "Only global scope captured", "Closures exist only with classes"], correct: 1, explanation: "Closures retain access to outer lexical environment where function was defined." },
  { question: "Why can var in loops cause unexpected callback results?", answers: ["var is block-scoped", "Single function-scoped binding reused across iterations", "var is constant", "Callbacks run synchronously"], correct: 1, explanation: "var is function-scoped; let creates per-iteration block binding." },
  { question: "What is the key event-loop distinction between microtasks and macrotasks?", answers: ["Macrotasks run before microtasks always", "Microtasks are drained before next macrotask", "They are identical", "Microtasks only in Node"], correct: 1, explanation: "Promise callbacks (microtasks) run before next task tick." },
  { question: "Which statement about this in arrow functions is correct?", answers: ["Dynamic this per call", "Lexically inherited this", "Always window", "Always undefined"], correct: 1, explanation: "Arrow functions do not create their own this binding." },
  { question: "What problem does event delegation solve effectively?", answers: ["Stops bubbling", "Handles many dynamic child elements with one parent listener", "Makes events synchronous", "Prevents default actions"], correct: 1, explanation: "Delegation scales and supports dynamically added elements." },
  { question: "Why can JSON.parse(JSON.stringify(obj)) be unsafe for cloning?", answers: ["Always deep perfect clone", "Drops functions, undefined, dates become strings", "Too fast", "Works only for arrays"], correct: 1, explanation: "Serialization loses non-JSON data types/behaviors." },
  { question: "What does Object.freeze guarantee?", answers: ["Deep immutability", "Shallow immutability of object properties", "No prototype", "No garbage collection"], correct: 1, explanation: "Nested objects can still mutate unless recursively frozen." },
  { question: "Which pattern helps control rapid input events (e.g., search typing)?", answers: ["Memoization", "Debounce", "Currying", "Polyfill"], correct: 1, explanation: "Debounce delays execution until user pauses input." },
  { question: "What is a pure function characteristic?", answers: ["Uses mutable global state", "Same input -> same output and no side effects", "Always async", "Returns object only"], correct: 1, explanation: "Purity improves predictability and testability." },
  { question: "How do ES modules differ from classic scripts?", answers: ["No imports allowed", "Scoped modules with explicit import/export", "Global by default always", "Cannot run in browsers"], correct: 1, explanation: "Modules encapsulate scope and formalize dependencies." },
  { question: "What is a common source of memory leaks in frontend JS?", answers: ["Using const", "Forgotten event listeners/timers referencing detached nodes", "Using map", "Using strict mode"], correct: 1, explanation: "Lingering references keep objects from garbage collection." },
  { question: "What does optional chaining (?.) prevent?", answers: ["All runtime errors", "Crashes when accessing property on null/undefined", "Network errors", "Syntax errors"], correct: 1, explanation: "It short-circuits property access when receiver is nullish." },
  { question: "Why prefer === over == in many codebases?", answers: ["It is faster in all engines", "Avoids implicit coercion surprises", "It allows coercion", "It compares objects by value"], correct: 1, explanation: "Strict equality avoids many type coercion pitfalls." },
  { question: "What is temporal dead zone for let/const?", answers: ["Time before declaration is parsed", "Period before initialization where access throws", "Garbage collection window", "Module load delay"], correct: 1, explanation: "Binding exists but is uninitialized and inaccessible." },
  { question: "What is advantage of using AbortController with fetch?", answers: ["Auto retries", "Cancelable requests to prevent stale updates", "Adds caching", "Converts to sync"], correct: 1, explanation: "AbortController helps cancel outdated/irrelevant network requests." }
];

function buildLevelQuestions(pool, offset) {
  const total = 25;
  return Array.from({ length: total }, (_, idx) => {
    const q = pool[(idx + offset) % pool.length];
    return {
      question: q.question,
      answers: [...q.answers],
      correct: q.correct,
      explanation: q.explanation
    };
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
const QUIZ_NAME = "javascript";
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

function reportRuntimeError(message) {
  if (questionEl) questionEl.textContent = message;
}

// Immediate proof that script loaded and question pool exists.
if (questionEl && String(questionEl.textContent).trim() === "Question text will appear here") {
  const firstQuestion = l1QuestionPool && l1QuestionPool[0] ? l1QuestionPool[0].question : "No questions loaded.";
  questionEl.textContent = firstQuestion;
}

window.addEventListener("error", (event) => {
  const msg = event && event.message ? event.message : "Unknown runtime error";
  reportRuntimeError(`Quiz runtime error: ${msg}`);
});

if (nextBtn && nextBtn.parentElement !== document.body) {
  document.body.appendChild(nextBtn);
}

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

function snapToQuizTop() {
  if (!quizContainerEl) return;
  quizContainerEl.scrollIntoView({ behavior: "auto", block: "start" });
}

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

function showInitError(message) {
  if (questionEl) {
    questionEl.textContent = message;
  }
}

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
  levelButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLevel(btn.dataset.level));
  });

  showLevelSelection();
  quizInitialized = true;
  return true;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuiz, { once: true });
}

initQuiz();
setTimeout(initQuiz, 0);
setTimeout(initQuiz, 200);




















