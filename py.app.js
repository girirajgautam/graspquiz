const l1QuestionPool = [
  {
    question: "Which keyword defines a function in Python?",
    answers: ["function", "def", "func", "lambda"],
    correct: 1,
    explanation: "Python functions are defined with the def keyword."
  },
  {
    question: "Which data type is immutable?",
    answers: ["list", "set", "dict", "tuple"],
    correct: 3,
    explanation: "Tuple is immutable, while list/set/dict are mutable."
  },
  {
    question: "What is the output type of input() in Python 3?",
    answers: ["int", "float", "str", "bool"],
    correct: 2,
    explanation: "input() returns a string unless you cast it."
  },
  {
    question: "Which symbol starts a comment in Python?",
    answers: ["//", "#", "--", "/*"],
    correct: 1,
    explanation: "# is used for single-line comments in Python."
  },
  {
    question: "Which function prints output to console?",
    answers: ["echo()", "print()", "printf()", "write()"],
    correct: 1,
    explanation: "print() outputs text in Python."
  },
  {
    question: "How do you create an empty dictionary?",
    answers: ["[]", "()", "{}", "set()"],
    correct: 2,
    explanation: "{} creates an empty dictionary."
  },
  {
    question: "Which operator is used for exponentiation?",
    answers: ["^", "**", "%", "//"],
    correct: 1,
    explanation: "** is the exponent operator in Python."
  },
  {
    question: "What does len([1,2,3]) return?",
    answers: ["2", "3", "4", "Error"],
    correct: 1,
    explanation: "len returns number of elements: 3."
  },
  {
    question: "Which keyword handles exceptions?",
    answers: ["catch", "except", "error", "rescue"],
    correct: 1,
    explanation: "Python uses try/except for exception handling."
  },
  {
    question: "Which one is a valid Python boolean literal?",
    answers: ["true", "True", "TRUE", "bool"],
    correct: 1,
    explanation: "Boolean literals are True and False."
  },
  {
    question: "How do you import the math module?",
    answers: ["include math", "import math", "using math", "require math"],
    correct: 1,
    explanation: "import math is the valid syntax."
  },
  {
    question: "Which method adds an item to end of list?",
    answers: ["push()", "insert()", "append()", "add()"],
    correct: 2,
    explanation: "append() adds one item to list end."
  },
  {
    question: "What is the index of first item in a list?",
    answers: ["1", "-1", "0", "Depends"],
    correct: 2,
    explanation: "Python indexing starts from 0."
  },
  {
    question: "Which statement creates a loop over range 0..4?",
    answers: ["for i in range(5):", "for i=0 to 4", "loop i in 5", "for i in 0..4"],
    correct: 0,
    explanation: "range(5) produces 0,1,2,3,4."
  },
  {
    question: "What does // do in Python arithmetic?",
    answers: ["normal division", "modulo", "floor division", "power"],
    correct: 2,
    explanation: "// performs floor division."
  }
];

const l2QuestionPool = [
  {
    question: "What is list comprehension primarily used for?",
    answers: ["Defining classes", "Creating lists concisely", "Importing modules", "Handling files"],
    correct: 1,
    explanation: "List comprehensions build lists in a concise readable form."
  },
  {
    question: "What does dict.get('x', 0) do if 'x' is missing?",
    answers: ["Raises KeyError", "Returns None", "Returns 0", "Deletes key"],
    correct: 2,
    explanation: "get returns default value when key is absent."
  },
  {
    question: "Which is true about Python sets?",
    answers: ["Allow duplicates", "Ordered by default", "Store unique elements", "Index-based access"],
    correct: 2,
    explanation: "Sets store unique items and remove duplicates."
  },
  {
    question: "What does enumerate(iterable) provide?",
    answers: ["Only values", "Index and value pairs", "Sorted values", "Unique values"],
    correct: 1,
    explanation: "enumerate yields (index, value)."
  },
  {
    question: "Which statement about pass is correct?",
    answers: ["Ends loop", "Skips current iteration", "No-op placeholder", "Raises exception"],
    correct: 2,
    explanation: "pass does nothing and is often used as placeholder."
  },
  {
    question: "What does with open('file.txt') as f: help with?",
    answers: ["Faster CPU execution", "Automatic resource cleanup", "Data encryption", "Type conversion"],
    correct: 1,
    explanation: "with ensures file is closed automatically."
  },
  {
    question: "Which is correct about *args and **kwargs?",
    answers: ["Both capture positional", "Both capture keyword", "*args positional, **kwargs keyword", "Used only in classes"],
    correct: 2,
    explanation: "*args packs positional args, **kwargs packs named args."
  },
  {
    question: "What does map(function, iterable) return in Python 3?",
    answers: ["List", "Tuple", "Iterator", "Set"],
    correct: 2,
    explanation: "map returns a lazy iterator in Python 3."
  },
  {
    question: "Which is the best way to check key existence in dict d?",
    answers: ["d.has_key('k')", "'k' in d", "d.contains('k')", "exists(d,'k')"],
    correct: 1,
    explanation: "Use membership operator: 'k' in d."
  },
  {
    question: "What is the result of slicing s[::-1]?",
    answers: ["Same string", "Every second char", "Reversed sequence", "Syntax error"],
    correct: 2,
    explanation: "A step of -1 reverses sequence order."
  },
  {
    question: "Which function helps iterate two lists in parallel?",
    answers: ["pair()", "zip()", "join()", "combine()"],
    correct: 1,
    explanation: "zip pairs elements from iterables by position."
  },
  {
    question: "What does __name__ == '__main__' typically control?",
    answers: ["Module import path", "Script entry-point behavior", "Exception mode", "Garbage collector"],
    correct: 1,
    explanation: "It runs code only when file is executed directly."
  },
  {
    question: "Which exception is raised for invalid int conversion int('x')?",
    answers: ["TypeError", "ValueError", "KeyError", "IndexError"],
    correct: 1,
    explanation: "int('x') raises ValueError."
  },
  {
    question: "Which collection is best for FIFO queue operations?",
    answers: ["list", "set", "collections.deque", "tuple"],
    correct: 2,
    explanation: "deque supports efficient append/pop from both ends."
  },
  {
    question: "What does lambda create?",
    answers: ["Class", "Anonymous function", "Generator only", "Decorator only"],
    correct: 1,
    explanation: "lambda creates a small anonymous function."
  }
];

const l3QuestionPool = [
  {
    question: "Which statement about Python generators is correct?",
    answers: ["Store all values immediately", "Use yield for lazy iteration", "Cannot be looped", "Always faster than lists"],
    correct: 1,
    explanation: "Generators produce values lazily via yield."
  },
  {
    question: "What is the time complexity of dict key lookup on average?",
    answers: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correct: 2,
    explanation: "Hash-table based dict lookup is average O(1)."
  },
  {
    question: "What does @property allow in classes?",
    answers: ["Static methods only", "Getter-style attribute access", "Multiple inheritance", "Type enforcement"],
    correct: 1,
    explanation: "@property lets methods act like read-only attributes."
  },
  {
    question: "Which module is commonly used for virtual environments?",
    answers: ["venv", "envlib", "virtual", "pkg"],
    correct: 0,
    explanation: "venv is built into Python for virtual environments."
  },
  {
    question: "What is true about GIL in CPython?",
    answers: ["Allows true parallel CPU threads", "Prevents multiple Python bytecodes running at once", "Disables multiprocessing", "Only affects Windows"],
    correct: 1,
    explanation: "GIL allows only one thread to execute Python bytecode at a time."
  },
  {
    question: "Which is preferred for many independent CPU-bound tasks?",
    answers: ["threading", "asyncio", "multiprocessing", "time.sleep"],
    correct: 2,
    explanation: "multiprocessing can utilize multiple CPU cores."
  },
  {
    question: "What does dataclass provide by default?",
    answers: ["DB connection", "Auto-generated init/repr/eq", "Thread safety", "Serialization only"],
    correct: 1,
    explanation: "@dataclass generates common boilerplate methods."
  },
  {
    question: "Which is true about mutable default arguments?",
    answers: ["Safe and recommended", "Evaluated each call", "Can retain state across calls", "Only fail in classes"],
    correct: 2,
    explanation: "Mutable defaults are created once and shared across calls."
  },
  {
    question: "What does list.copy() create?",
    answers: ["Deep copy", "Shallow copy", "Reference alias", "Tuple"],
    correct: 1,
    explanation: "list.copy() makes a shallow copy."
  },
  {
    question: "Which tool is used to install packages from PyPI?",
    answers: ["npm", "pip", "gem", "apt"],
    correct: 1,
    explanation: "pip is the Python package installer."
  },
  {
    question: "What is the purpose of __init__.py in packages?",
    answers: ["Mandatory in all modern packages", "Marks directory as package and can run package init code", "Compiles bytecode", "Creates venv"],
    correct: 1,
    explanation: "It can mark/init package behavior."
  },
  {
    question: "Which statement about async/await is correct?",
    answers: ["Makes code synchronous", "Used for cooperative concurrency with event loop", "Replaces all threads", "Only for file I/O"],
    correct: 1,
    explanation: "async/await works with event loops for non-blocking tasks."
  },
  {
    question: "What is EAFP style in Python?",
    answers: ["Check everything first", "Try operation and handle exceptions", "Avoid exceptions always", "Use only if/else"],
    correct: 1,
    explanation: "EAFP means Easier to Ask Forgiveness than Permission."
  },
  {
    question: "Which built-in helps apply a function cumulatively to iterable?",
    answers: ["reduce (functools)", "accumulate (itertools)", "both depending on use", "neither"],
    correct: 2,
    explanation: "reduce and itertools.accumulate both support cumulative operations."
  },
  {
    question: "Which is best for type hints of list of integers?",
    answers: ["list(int)", "List<int>", "list[int]", "array[int]"],
    correct: 2,
    explanation: "Modern Python uses list[int] type hints."
  }
];

const l4QuestionPool = [
  { question: "What issue can mutable default arguments cause in Python functions?", answers: ["Syntax error", "Shared state across calls", "Faster execution", "Automatic deep copy"], correct: 1, explanation: "Default mutable objects are created once and reused across calls." },
  { question: "Which statement about GIL in CPython is most accurate?", answers: ["It enables true parallel CPU bytecode execution", "Only one thread executes Python bytecode at a time", "It disables async", "It affects only Linux"], correct: 1, explanation: "GIL serializes Python bytecode execution in CPython threads." },
  { question: "When is multiprocessing preferred over threading in Python?", answers: ["I/O bound tasks", "CPU-bound workloads", "UI rendering", "Simple loops"], correct: 1, explanation: "Multiprocessing bypasses GIL limits for CPU-heavy tasks." },
  { question: "What does shallow copy mean?", answers: ["Copies nested objects recursively", "Copies container but references nested objects", "Copies by pointer only", "Cannot copy dict"], correct: 1, explanation: "Shallow copies duplicate top-level structure, not deep nested objects." },
  { question: "What is EAFP style?", answers: ["Check first then do", "Try operation and handle exceptions", "Never use exceptions", "Only use if/else"], correct: 1, explanation: "Python idiom favors trying operation and catching failure." },
  { question: "What advantage do generators provide?", answers: ["Always faster CPU", "Lazy iteration with reduced memory usage", "Thread safety", "Compile-time optimization"], correct: 1, explanation: "Generators yield values on demand, avoiding full materialization." },
  { question: "What is a key difference between list and tuple?", answers: ["Tuple is mutable", "List is immutable", "Tuple is immutable", "List is hashable"], correct: 2, explanation: "Tuples are immutable and can be hashable when containing hashable items." },
  { question: "What does @property primarily improve?", answers: ["Threading", "Attribute-style access with method control", "Serialization", "Garbage collection"], correct: 1, explanation: "@property exposes controlled getter/setter logic via attribute syntax." },
  { question: "Which tool is standard for virtual environments in Python 3?", answers: ["venv", "nodeenv", "pipx", "setuptools"], correct: 0, explanation: "venv is built-in for isolated Python environments." },
  { question: "What is the common complexity for dictionary key lookup (average)?", answers: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], correct: 2, explanation: "Python dict uses hash table with average constant-time lookups." },
  { question: "What does async/await depend on?", answers: ["Thread pool always", "Event loop scheduling", "Only recursion", "Compiler macro"], correct: 1, explanation: "async/await works with event loops for cooperative concurrency." },
  { question: "Which is safer for parsing user integer input?", answers: ["int(input()) with try/except", "eval(input())", "float(input()) always", "ast.literal_eval for all"], correct: 0, explanation: "Use int conversion with exception handling to avoid crashes/code execution." },
  { question: "What can __slots__ help with?", answers: ["Automatic type hints", "Reducing per-instance memory in some classes", "Database indexing", "Package installation"], correct: 1, explanation: "__slots__ can reduce memory overhead by limiting instance dict usage." },
  { question: "Why avoid broad 'except Exception' without care?", answers: ["It is syntax error", "It can hide real bugs and make debugging harder", "It slows imports", "It breaks classes"], correct: 1, explanation: "Overly broad catches swallow unexpected problems." },
  { question: "What does list[int] represent in type hints?", answers: ["Runtime enforced type", "Static type annotation for list of ints", "Only docs string", "Tuple type"], correct: 1, explanation: "It is a type hint used by linters/type checkers, not strict runtime enforcement by default." }
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
const unlockedLevels = new Set(["l1"]);
let quizInitialized = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const explanationEl = document.getElementById("explanation");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const levelMetaEl = document.getElementById("levelMeta");
const levelButtons = document.querySelectorAll(".level-btn");
const quizContainerEl = document.querySelector(".quiz-container");

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
  nextBtn.style.setProperty("bottom", isMobile ? "calc(env(safe-area-inset-bottom, 0px) + 48px)" : "16px", "important");
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
  quizContainerEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatLevel(level) {
  return level.toUpperCase();
}

function getPassScoreForLevel(level) {
  return PASS_SCORE_BY_LEVEL[level] || 20;
}

function updateLevelMeta() {
  levelMetaEl.textContent = `Level ${formatLevel(currentLevel)} | Question ${currentQuestion + 1}/${quizData.length}`;
}

function setActiveLevelButton() {
  levelButtons.forEach((btn) => {
    const level = btn.dataset.level;
    const isUnlocked = unlockedLevels.has(level);
    const isActive = btn.dataset.level === currentLevel;
    const label = level.toUpperCase();
    btn.textContent = isUnlocked ? label : `${label} (Locked)`;
    btn.classList.toggle("active", isActive);
    btn.disabled = !isUnlocked;
    btn.setAttribute("aria-pressed", String(isActive));
    if (!isUnlocked) {
      const idx = LEVEL_ORDER.indexOf(level);
      const prevLevelKey = idx > 0 ? LEVEL_ORDER[idx - 1] : "l1";
      const prevLevel = prevLevelKey.toUpperCase();
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
    btn.style.background = i === correctIndex ? "#16a34a" : "#dc2626";
    btn.disabled = true;
  });

  if (index === correctIndex) {
    explanationEl.className = "feedback-box feedback-correct";
    explanationEl.innerHTML = `
      <div class="feedback-title">Correct Answer</div>
      <p>Great choice. <strong>${q.answers[correctIndex]}</strong> is right.</p>
      <p>${q.explanation}</p>
    `;
  } else {
    explanationEl.className = "feedback-box feedback-wrong";
    explanationEl.innerHTML = `
      <div class="feedback-title">Wrong Answer</div>
      <p>Correct option: <strong>${q.answers[correctIndex]}</strong></p>
      <p>${q.explanation}</p>
    `;
  }

  nextBtn.style.display = "inline-block";
  snapToQuizTop();
}

function showResult() {
  const passed = score >= getPassScoreForLevel(currentLevel);
  const unlockedLevel = passed ? unlockNextLevel() : null;
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  explanationEl.style.display = "none";
  nextBtn.style.display = "none";
  levelMetaEl.textContent = `Level ${formatLevel(currentLevel)} completed | Score ${score}/${quizData.length}`;
  setActiveLevelButton();
  const currentPassScore = getPassScoreForLevel(currentLevel);
  const ruleText = passed
    ? `Pass rule met (${score}/${quizData.length}).`
    : `Need ${currentPassScore}/${quizData.length} to unlock next level.`;
  const unlockText = unlockedLevel ? `<p>Unlocked ${formatLevel(unlockedLevel)}.</p>` : "";
  const nextLevelBtn = unlockedLevel
    ? `<button type="button" onclick="goToLevel('${unlockedLevel}')">Next Level</button>`
    : "";
  const googleLoginBtn = `<button type="button" onclick="goToGoogleLogin()">Login with Google</button>`;
  const loginBtn = `<button type="button" onclick="goToLogin()">Login to Save Achievement</button>`;
  resultEl.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3>
                        <p>${ruleText}</p>
                        ${unlockText}
                        ${nextLevelBtn}
                        <button type="button" onclick="restartQuiz()">Try Again</button>
                        ${googleLoginBtn}
                        ${loginBtn}`;
}

function goToLevel(level) {
  setLevel(level);
}

function goToGoogleLogin() {
  window.location.href = "index.html#google-login";
}

function goToLogin() {
  window.location.href = "index.html";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  questionEl.style.display = "block";
  answersEl.style.display = "grid";
  explanationEl.style.display = "block";
  explanationEl.innerHTML = "";
  explanationEl.className = "";
  resultEl.innerHTML = "";
  loadQuestion();
}

function setLevel(level) {
  if (!unlockedLevels.has(level)) return;
  if (!quizLevels[level]) return;
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

  levelButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLevel(btn.dataset.level));
  });

  setLevel("l1");
  quizInitialized = true;
  return true;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuiz, { once: true });
}

initQuiz();
setTimeout(initQuiz, 0);
setTimeout(initQuiz, 200);







