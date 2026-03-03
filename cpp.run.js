const l1QuestionPool = [
  { question: "Which symbol is used for C++ stream output?", answers: [">>", "<<", "::", "->"], correct: 1, explanation: "cout uses << to send output to console." },
  { question: "Which header provides std::cout?", answers: ["<stdio.h>", "<iostream>", "<stream>", "<output>"], correct: 1, explanation: "std::cout is declared in <iostream>." },
  { question: "How do you declare an integer variable x in C++?", answers: ["integer x;", "int x;", "var x: int;", "num x;"], correct: 1, explanation: "int x; is the correct declaration." },
  { question: "Which keyword creates a class?", answers: ["struct", "object", "class", "newclass"], correct: 2, explanation: "class defines a user-defined type." },
  { question: "Which function is the program entry point?", answers: ["start()", "main()", "entry()", "run()"], correct: 1, explanation: "C++ program starts from main()." },
  { question: "Which operator accesses member via object pointer?", answers: [".", "::", "->", "*"], correct: 2, explanation: "Use -> for pointer to object member access." },
  { question: "What does std::endl do?", answers: ["Delete line", "Print newline and flush", "Print tab", "End program"], correct: 1, explanation: "std::endl inserts newline and flushes stream." },
  { question: "Which keyword allocates memory dynamically in C++?", answers: ["malloc", "alloc", "new", "make"], correct: 2, explanation: "new allocates and also calls constructors." },
  { question: "Which keyword releases memory from new?", answers: ["free", "delete", "remove", "dispose"], correct: 1, explanation: "delete releases memory allocated with new." },
  { question: "Which is used for single-line comment?", answers: ["#", "//", "--", "/*"], correct: 1, explanation: "// starts single-line comments." },
  { question: "What is correct namespace for standard library types?", answers: ["core", "standard", "std", "lib"], correct: 2, explanation: "The standard namespace is std." },
  { question: "Which loop checks condition before body execution?", answers: ["do-while", "while", "foreach", "repeat"], correct: 1, explanation: "while evaluates condition first." },
  { question: "Which container stores dynamic array in C++ STL?", answers: ["list", "array", "vector", "map"], correct: 2, explanation: "std::vector is dynamic array container." },
  { question: "Which type stores true/false?", answers: ["bit", "bool", "flag", "logic"], correct: 1, explanation: "bool stores boolean values." },
  { question: "What does const mean?", answers: ["Variable is dynamic", "Value cannot be modified through that name", "Type is pointer", "Variable is global"], correct: 1, explanation: "const makes data read-only via that identifier." }
];

const l2QuestionPool = [
  { question: "What is function overloading?", answers: ["Same function name with different parameter lists", "Function inside function", "Calling recursively only", "Template specialization"], correct: 0, explanation: "Overloading uses same name with different signatures." },
  { question: "What is constructor purpose?", answers: ["Destroy object", "Initialize object state", "Allocate global memory", "Create namespace"], correct: 1, explanation: "Constructors run during object creation for initialization." },
  { question: "What does this pointer represent?", answers: ["Pointer to class type", "Pointer to current object", "Pointer to function", "Null pointer"], correct: 1, explanation: "this points to the current instance." },
  { question: "Which access specifier allows use anywhere?", answers: ["private", "protected", "public", "internal"], correct: 2, explanation: "public members are accessible broadly." },
  { question: "Difference between struct and class in C++ default access?", answers: ["No difference", "struct default public, class default private", "struct cannot have methods", "class cannot inherit"], correct: 1, explanation: "Default access differs: struct public, class private." },
  { question: "What is inheritance?", answers: ["Creating object copy", "Deriving new class from existing class", "Function recursion", "Linking libraries"], correct: 1, explanation: "Inheritance reuses and extends base class behavior." },
  { question: "What is virtual function for?", answers: ["Compile-time binding", "Runtime polymorphism", "Memory allocation", "Template deduction"], correct: 1, explanation: "virtual enables dynamic dispatch through base pointers/references." },
  { question: "Which keyword prevents further overriding?", answers: ["static", "final", "sealed", "const"], correct: 1, explanation: "C++ uses final to prevent override/derivation." },
  { question: "Which STL container offers key-value mapping ordered by key?", answers: ["unordered_map", "map", "vector", "set"], correct: 1, explanation: "std::map stores ordered key-value pairs." },
  { question: "What does auto keyword do?", answers: ["Makes variable static", "Type deduction from initializer", "Allocates heap", "Imports namespace"], correct: 1, explanation: "auto deduces type at compile time." },
  { question: "What is RAII in C++?", answers: ["Runtime API interface", "Resource tied to object lifetime", "Random access iterator interface", "Pointer arithmetic rule"], correct: 1, explanation: "RAII manages resources via constructors/destructors." },
  { question: "Which smart pointer has shared ownership?", answers: ["unique_ptr", "shared_ptr", "weak_ptr", "raw_ptr"], correct: 1, explanation: "shared_ptr uses reference counting ownership." },
  { question: "Which smart pointer cannot be copied?", answers: ["shared_ptr", "unique_ptr", "weak_ptr", "all can"], correct: 1, explanation: "unique_ptr enforces unique ownership." },
  { question: "What does nullptr represent?", answers: ["Integer zero", "Type-safe null pointer literal", "Invalid reference", "Empty object"], correct: 1, explanation: "nullptr is preferred null pointer literal in modern C++." },
  { question: "What is difference between pass-by-value and pass-by-reference?", answers: ["No difference", "Value copies data, reference aliases original", "Reference always const", "Value is faster always"], correct: 1, explanation: "Reference avoids copy and can modify original (unless const)." }
];

const l3QuestionPool = [
  { question: "What is template in C++?", answers: ["Runtime class", "Generic compile-time blueprint", "Dynamic library", "Namespace alias"], correct: 1, explanation: "Templates enable generic programming resolved at compile time." },
  { question: "What is move semantics primarily for?", answers: ["Threading", "Avoiding expensive deep copies by transferring resources", "Garbage collection", "Polymorphism"], correct: 1, explanation: "Moves transfer ownership of resources efficiently." },
  { question: "Which special member enables move construction?", answers: ["copy constructor", "move constructor", "destructor", "assignment only"], correct: 1, explanation: "Move constructor takes rvalue reference parameter." },
  { question: "What does std::move do?", answers: ["Moves object immediately", "Casts expression to rvalue enabling move operations", "Swaps objects", "Deletes source"], correct: 1, explanation: "std::move is a cast; actual move depends on type operations." },
  { question: "What is lambda capture by reference syntax?", answers: ["[=]", "[&]", "[*]", "[ref]"], correct: 1, explanation: "[&] captures outer variables by reference." },
  { question: "What is exception-safe resource management best practice?", answers: ["Use raw new/delete everywhere", "Use RAII and smart pointers", "Disable exceptions", "Use global state"], correct: 1, explanation: "RAII ensures cleanup during stack unwinding." },
  { question: "Which cast is safest for polymorphic downcasting?", answers: ["static_cast", "reinterpret_cast", "dynamic_cast", "const_cast"], correct: 2, explanation: "dynamic_cast checks runtime type for polymorphic classes." },
  { question: "What does override keyword help with?", answers: ["Faster dispatch", "Compiler verifies virtual override correctness", "Makes method static", "Disables inheritance"], correct: 1, explanation: "override catches signature mismatch bugs." },
  { question: "What is complexity of std::map lookup typically?", answers: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "std::map is tree-based, usually logarithmic operations." },
  { question: "Difference between std::map and std::unordered_map average lookup?", answers: ["Both O(log n)", "map O(log n), unordered_map average O(1)", "map O(1), unordered_map O(log n)", "both O(n)"], correct: 1, explanation: "unordered_map uses hashing with average constant lookup." },
  { question: "What is dangling reference/pointer?", answers: ["Reference to valid static object", "Reference/pointer to destroyed object", "Null pointer", "Const pointer"], correct: 1, explanation: "Dangling access leads to undefined behavior." },
  { question: "What does constexpr imply?", answers: ["Always runtime", "Potential compile-time evaluation for constant expressions", "Dynamic allocation", "No optimization"], correct: 1, explanation: "constexpr enables compile-time computation where possible." },
  { question: "What is one-definition rule (ODR) about?", answers: ["One variable in whole program only", "Entities must have a single consistent definition across program", "Only one header allowed", "One namespace rule"], correct: 1, explanation: "ODR violations can cause linker/runtime inconsistencies." },
  { question: "Why prefer emplace over push in some STL contexts?", answers: ["Always faster by guarantee", "Constructs element in-place reducing temporary copies", "Required by compiler", "Only for maps"], correct: 1, explanation: "emplace can avoid extra construction/copy in many cases." },
  { question: "What is undefined behavior in C++?", answers: ["Guaranteed exception", "Behavior not defined by language standard", "Compiler warning only", "Same as runtime error"], correct: 1, explanation: "UB allows any result; avoid by strict correctness." }
];

const l4QuestionPool = [
  { question: "Why is deleting derived object through base pointer without virtual destructor dangerous?", answers: ["No issue", "Only base destructor runs causing leaks/partial cleanup", "Compile error always", "It calls all destructors automatically"], correct: 1, explanation: "Base class intended polymorphic deletion needs virtual destructor." },
  { question: "What does Rule of Five refer to?", answers: ["Five STL containers", "If class manages resources, define/care about copy/move ctor, copy/move assign, destructor", "Five access modifiers", "Five inheritance types"], correct: 1, explanation: "Resource-owning types need special member function strategy." },
  { question: "What is perfect forwarding used for?", answers: ["Runtime optimization only", "Preserving value category in template forwarding", "Thread scheduling", "Memory pooling"], correct: 1, explanation: "std::forward keeps lvalue/rvalue nature through wrappers." },
  { question: "What can happen with data races in C++ memory model?", answers: ["Safe but slow", "Undefined behavior", "Automatic locking", "Deterministic output"], correct: 1, explanation: "Unsynchronized conflicting accesses produce UB." },
  { question: "What is strict aliasing issue about?", answers: ["Header include order", "Compiler assumptions about pointer types affecting optimization", "Thread deadlock", "Template recursion"], correct: 1, explanation: "Violating aliasing assumptions can break optimized code correctness." },
  { question: "Why can returning reference to local variable be invalid?", answers: ["Local lifetime ends after function returns", "References copy value", "Compiler converts to static", "Reference becomes nullptr"], correct: 0, explanation: "Local stack object dies at return, leaving dangling reference." },
  { question: "What is SFINAE conceptually?", answers: ["Runtime exception handling", "Template substitution failure removes candidate without hard error", "Manual memory strategy", "Inheritance rule"], correct: 1, explanation: "SFINAE controls template overload resolution by substitution validity." },
  { question: "What does noexcept influence?", answers: ["Only comments", "Optimization and exception guarantees (e.g., move operations)", "Forces throw", "Disables templates"], correct: 1, explanation: "noexcept affects library behavior and optimization choices." },
  { question: "What is major pitfall of capturing this in async lambda?", answers: ["Cannot compile", "Object may be destroyed before lambda runs", "this copied deeply", "No access to members"], correct: 1, explanation: "Need lifetime management (shared_ptr/weak_ptr patterns)." },
  { question: "When is std::weak_ptr useful?", answers: ["Unique ownership", "Breaking shared_ptr reference cycles", "Faster map lookup", "Replacing raw references always"], correct: 1, explanation: "weak_ptr observes without owning to avoid cycles." },
  { question: "What is ABI concern in C++ libraries?", answers: ["Audio bitrate", "Binary compatibility across compiler/library versions", "Algorithm complexity", "Async callback interface only"], correct: 1, explanation: "ABI mismatches can break linkage/runtime even with same source API." },
  { question: "What is purpose of pimpl idiom?", answers: ["Speed up loops", "Hide implementation details and reduce rebuild coupling", "Replace templates", "Avoid constructors"], correct: 1, explanation: "Pimpl improves encapsulation and compile-time isolation." },
  { question: "What does memory_order_relaxed imply for atomics?", answers: ["No atomicity", "Atomic operation without synchronization ordering guarantees", "Sequential consistency", "Locks thread"], correct: 1, explanation: "Relaxed keeps atomicity but minimal ordering constraints." },
  { question: "What is common danger of reinterpret_cast?", answers: ["Always safe conversion", "Can produce non-portable/undefined behavior if misused", "Only works for pointers", "Equivalent to static_cast"], correct: 1, explanation: "reinterpret_cast is low-level and unsafe unless carefully justified." },
  { question: "Why prefer span/string_view in APIs?", answers: ["They own memory", "Non-owning views reduce copies and improve flexibility", "They are faster than all types always", "Required by compiler"], correct: 1, explanation: "Views express read-only/non-owning ranges cleanly." }
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
  l4: buildLevelQuestions(l4QuestionPool, 0),
  l5: buildLevelQuestions(l1QuestionPool, 7),
  l6: buildLevelQuestions(l2QuestionPool, 9),
  l7: buildLevelQuestions(l3QuestionPool, 11),
  l8: buildLevelQuestions(l4QuestionPool, 13)
};

let currentLevel = "l1";
let quizData = quizLevels[currentLevel];
let currentQuestion = 0;
let score = 0;
const PASS_SCORE_BY_LEVEL = { l1: 16, l2: 18, l3: 20, l4: 22, l5: 22, l6: 23, l7: 23, l8: 24 };
const LEVEL_ORDER = ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"];
const unlockedLevels = new Set(LEVEL_ORDER);
let quizInitialized = false;
let lastFeedbackState = null;
const API_BASE_URL = (
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000"
    : "https://websitequize-backend.onrender.com"
).replace(/\/$/, "");
const QUIZ_NAME = "cpp";
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

function buildLearnExplanation(questionText, correctAnswer, explanationText) {
  const text = String(questionText || "").toLowerCase();
  const answer = String(correctAnswer || "").trim();

  if (text.includes("reference")) {
    return {
      concept: "A reference is an alias to an existing variable and must be initialized once.",
      example: [
        "int a = 10;",
        "int &ref = a;",
        "ref = 20;",
        "cout << a; // 20"
      ].join("\n")
    };
  }

  if (text.includes("pointer") || text.includes("nullptr")) {
    return {
      concept: "Pointers store memory addresses. Use nullptr for safe initialization.",
      example: [
        "int x = 5;",
        "int *p = &x;",
        "cout << *p; // 5",
        "p = nullptr;"
      ].join("\n")
    };
  }

  if (text.includes("virtual")) {
    return {
      concept: "Virtual functions enable runtime polymorphism through base-class pointers/references.",
      example: [
        "class Base { public: virtual void show(){ cout << \"Base\"; } };",
        "class Derived : public Base { public: void show() override { cout << \"Derived\"; } };",
        "Base *b = new Derived();",
        "b->show(); // Derived"
      ].join("\n")
    };
  }

  if (text.includes("template")) {
    return {
      concept: "Templates allow writing generic code for multiple data types.",
      example: [
        "template <typename T>",
        "T add(T a, T b) { return a + b; }",
        "cout << add<int>(2, 3); // 5"
      ].join("\n")
    };
  }

  if (text.includes("vector") || text.includes("stl")) {
    return {
      concept: "STL containers (like vector) provide safe and reusable data structures.",
      example: [
        "vector<int> v = {1,2,3};",
        "v.push_back(4);",
        "cout << v.size(); // 4"
      ].join("\n")
    };
  }

  if (text.includes("constructor") || text.includes("destructor")) {
    return {
      concept: "Constructor initializes object state. Destructor releases resources when object ends.",
      example: [
        "class Box {",
        "public:",
        "  Box(){ cout << \"Construct\"; }",
        "  ~Box(){ cout << \"Destroy\"; }",
        "};"
      ].join("\n")
    };
  }

  if (text.includes("smart pointer") || text.includes("unique_ptr") || text.includes("shared_ptr")) {
    return {
      concept: "Smart pointers automate memory management and reduce manual delete errors.",
      example: [
        "#include <memory>",
        "auto p = std::make_unique<int>(42);",
        "cout << *p; // 42"
      ].join("\n")
    };
  }

  return {
    concept: String(explanationText || "Use the correct option based on core C++ syntax and behavior."),
    example: [
      "Question:",
      String(questionText || "").trim(),
      "",
      "Correct option:",
      answer,
      "",
      "Tip:",
      "Remember this C++ rule and apply it in similar interview MCQs."
    ].join("\n")
  };
}

function buildLearnExample(questionText, correctAnswer, explanationText) {
  const info = buildLearnExplanation(questionText, correctAnswer, explanationText);
  return [
    "Concept:",
    info.concept,
    "",
    "Example:",
    info.example
  ].join("\n");
}

function showLearnMore(questionData, correctIndex) {
  if (!explanationEl || !questionData) return;
  const correctAnswer = questionData.answers[correctIndex];
  const questionText = questionData.question;
  const explanationText = questionData.explanation;
  const learnInfo = buildLearnExplanation(questionText, correctAnswer, explanationText);

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
    <p><strong>Concept:</strong> ${escapeHtml(learnInfo.concept)}</p>
    <pre><code>${escapeHtml(buildLearnExample(questionText, correctAnswer, explanationText))}</code></pre>
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

if (questionEl && String(questionEl.textContent).trim() === "Question text will appear here") {
  const firstQuestion = l1QuestionPool && l1QuestionPool[0] ? l1QuestionPool[0].question : "No questions loaded.";
  questionEl.textContent = firstQuestion;
}

window.addEventListener("error", (event) => {
  const msg = event && event.message ? event.message : "Unknown runtime error";
  reportRuntimeError(`Quiz runtime error: ${msg}`);
});

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












