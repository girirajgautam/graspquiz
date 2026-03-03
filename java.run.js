const l1QuestionPool = [
  { question: "Which keyword defines a class in Java?", answers: ["object", "class", "struct", "define"], correct: 1, explanation: "class defines a new Java class." },
  { question: "Which method is Java program entry point?", answers: ["start()", "run()", "public static void main(String[] args)", "init()"], correct: 2, explanation: "JVM starts execution from main method." },
  { question: "Which package is imported automatically?", answers: ["java.util", "java.io", "java.lang", "java.net"], correct: 2, explanation: "java.lang is auto-imported." },
  { question: "Which keyword creates an object?", answers: ["create", "new", "make", "alloc"], correct: 1, explanation: "new allocates object memory and invokes constructor." },
  { question: "Which primitive type stores whole numbers?", answers: ["double", "boolean", "int", "char"], correct: 2, explanation: "int is 32-bit signed integer type." },
  { question: "Which symbol ends a Java statement?", answers: [":", ",", ";", "."], correct: 2, explanation: "Semicolon terminates most Java statements." },
  { question: "Which keyword is used for inheritance?", answers: ["inherits", "extends", "implements", "super"], correct: 1, explanation: "Class inheritance uses extends." },
  { question: "Which access modifier allows access everywhere?", answers: ["private", "protected", "public", "default"], correct: 2, explanation: "public members are accessible globally." },
  { question: "Which keyword prevents variable reassignment?", answers: ["static", "final", "const", "immutable"], correct: 1, explanation: "final variable cannot be reassigned." },
  { question: "Which loop runs while condition is true?", answers: ["for", "while", "do-while", "all can"], correct: 3, explanation: "All loops can continue while conditions hold." },
  { question: "What does JVM stand for?", answers: ["Java Variable Model", "Java Virtual Machine", "Joint Virtual Module", "Java Verified Mode"], correct: 1, explanation: "JVM runs Java bytecode." },
  { question: "Which collection keeps insertion order and allows duplicates?", answers: ["Set", "Map", "List", "Queue"], correct: 2, explanation: "List preserves order and allows duplicates." },
  { question: "Which operator compares primitive values for equality?", answers: ["=", "==", "equals", "!="], correct: 1, explanation: "== compares primitive values directly." },
  { question: "Which keyword refers to current object?", answers: ["self", "current", "this", "super"], correct: 2, explanation: "this points to the current instance." },
  { question: "Which keyword exits a loop immediately?", answers: ["continue", "exit", "break", "stop"], correct: 2, explanation: "break terminates nearest loop/switch." }
];

const l2QuestionPool = [
  { question: "Difference between == and equals() for objects?", answers: ["Same behavior", "== compares references, equals compares logical content (if overridden)", "equals compares references only", "== compares deep copy"], correct: 1, explanation: "Object equality usually uses equals; == checks same reference." },
  { question: "What is method overloading?", answers: ["Same name, different parameter list", "Same method in subclass only", "Runtime dispatch only", "Static variable hiding"], correct: 0, explanation: "Overloading differs by parameter signatures." },
  { question: "What is method overriding?", answers: ["Same method in same class", "Subclass provides specific implementation of inherited method", "Changing return type only", "Calling super always"], correct: 1, explanation: "Overriding supports runtime polymorphism." },
  { question: "What does static keyword on method mean?", answers: ["Method belongs to class not instance", "Method is immutable", "Method can access this directly", "Method cannot be called"], correct: 0, explanation: "Static methods are class-level." },
  { question: "Which interface allows lambda expressions with one abstract method?", answers: ["Marker interface", "Functional interface", "Serializable only", "Comparable only"], correct: 1, explanation: "Functional interface has exactly one abstract method." },
  { question: "Which collection avoids duplicates?", answers: ["List", "Set", "Queue", "ArrayList"], correct: 1, explanation: "Set stores unique elements." },
  { question: "What is exception handling block order?", answers: ["try -> catch -> finally", "catch -> try -> finally", "finally -> try -> catch", "try -> finally -> catch"], correct: 0, explanation: "Standard order is try-catch-finally." },
  { question: "Which keyword throws an exception explicitly?", answers: ["throw", "throws", "except", "raise"], correct: 0, explanation: "throw is statement to throw exception object." },
  { question: "What does `throws` in method signature indicate?", answers: ["Method catches exception", "Method may propagate specified exceptions", "Method cannot fail", "Compiler ignores exceptions"], correct: 1, explanation: "throws declares checked exceptions caller must handle." },
  { question: "What is encapsulation?", answers: ["Multiple inheritance", "Bundling data and methods with controlled access", "Runtime compilation", "Garbage collection"], correct: 1, explanation: "Encapsulation hides internals via access control." },
  { question: "What is polymorphism in Java?", answers: ["One class only", "One interface no implementation", "One reference, many method behaviors", "Static overloading only"], correct: 2, explanation: "Polymorphism enables dynamic method dispatch." },
  { question: "Which class is parent of all Java classes?", answers: ["Base", "Object", "Class", "Root"], correct: 1, explanation: "java.lang.Object is the root class." },
  { question: "What is autoboxing?", answers: ["Converting primitive to wrapper automatically", "Converting wrapper to primitive", "Array conversion", "String parsing"], correct: 0, explanation: "Autoboxing wraps primitive into object type." },
  { question: "What does interface primarily provide?", answers: ["State storage", "Contract of behavior", "Thread scheduling", "Memory allocation"], correct: 1, explanation: "Interfaces define behavior contracts." },
  { question: "Which list implementation is resizable array?", answers: ["LinkedList", "ArrayList", "HashSet", "TreeMap"], correct: 1, explanation: "ArrayList is dynamic array-backed list." }
];

const l3QuestionPool = [
  { question: "What is JVM garbage collector role?", answers: ["Compile code", "Reclaim unreachable object memory", "Encrypt bytecode", "Run tests"], correct: 1, explanation: "GC automatically frees unreachable objects." },
  { question: "What is immutability advantage?", answers: ["More mutable state", "Thread-safe sharing and predictable behavior", "Faster disk IO", "No constructors needed"], correct: 1, explanation: "Immutable objects are safer in concurrent code." },
  { question: "What does synchronized keyword provide?", answers: ["Database lock", "Mutual exclusion and memory visibility guarantees", "Compile-time optimization", "No overhead"], correct: 1, explanation: "synchronized guards critical sections." },
  { question: "Difference between HashMap and TreeMap lookup complexity typical?", answers: ["Both O(1)", "HashMap avg O(1), TreeMap O(log n)", "HashMap O(log n), TreeMap O(1)", "Both O(n)"], correct: 1, explanation: "HashMap hashing vs TreeMap balanced tree ordering." },
  { question: "What is Stream API used for?", answers: ["Network sockets only", "Declarative bulk data processing", "GUI rendering", "Thread locking"], correct: 1, explanation: "Streams support map/filter/reduce style processing." },
  { question: "What is Optional mainly for?", answers: ["Serialization", "Representing possibly-absent values safely", "Thread pooling", "Collections sorting"], correct: 1, explanation: "Optional helps avoid null-handling mistakes." },
  { question: "What does @Override annotation do?", answers: ["Makes method static", "Compiler-checks intended override", "Marks deprecated method", "Disables inheritance"], correct: 1, explanation: "@Override prevents accidental signature mistakes." },
  { question: "What is checked exception?", answers: ["Ignored by compiler", "Must be handled or declared", "Runtime-only exception", "Syntax error"], correct: 1, explanation: "Checked exceptions enforce explicit handling paths." },
  { question: "What is thread-safe singleton common pattern in modern Java?", answers: ["Double-checked locking with volatile or enum singleton", "Public static mutable field", "Recreate each call", "No constructor"], correct: 0, explanation: "Enum singleton is concise and serialization-safe." },
  { question: "What is dependency injection benefit?", answers: ["Harder testing", "Loose coupling and easier testing", "No interfaces needed", "Faster JVM startup"], correct: 1, explanation: "DI separates wiring from behavior implementation." },
  { question: "What is Big-O of binary search?", answers: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: 1, explanation: "Binary search halves search space each step." },
  { question: "What does volatile guarantee in Java?", answers: ["Atomic increments", "Visibility and ordering constraints for variable reads/writes", "Mutual exclusion", "Deep immutability"], correct: 1, explanation: "volatile ensures latest writes visible across threads." },
  { question: "What is deadlock?", answers: ["Fast lock release", "Threads waiting forever on cyclic lock dependency", "Memory leak", "Compilation error"], correct: 1, explanation: "Deadlock occurs when lock acquisition order conflicts cyclically." },
  { question: "What is purpose of finally block?", answers: ["Run only on success", "Execute cleanup regardless of exception outcome", "Replace catch", "Throw new exception always"], correct: 1, explanation: "finally is typically used for resource cleanup." },
  { question: "What is generics main benefit?", answers: ["Runtime speed only", "Compile-time type safety and reduced casts", "No classes required", "Dynamic typing"], correct: 1, explanation: "Generics catch type errors at compile time." }
];

const l4QuestionPool = [
  { question: "Why is equals/hashCode contract important for HashMap keys?", answers: ["Not important", "Incorrect contract breaks lookup/set behavior", "Only affects sorting", "Affects JVM startup"], correct: 1, explanation: "Hash-based collections require consistent equals/hashCode." },
  { question: "What issue can arise if mutable object is used as HashMap key and mutated after insertion?", answers: ["No issue", "Key may become unreachable due to hash bucket mismatch", "Automatic rehash fixes always", "Compile-time error"], correct: 1, explanation: "Changing key state used in hashCode breaks retrieval." },
  { question: "What does happens-before relation in Java memory model provide?", answers: ["Syntax sugar", "Visibility/ordering guarantee between actions", "Automatic lock removal", "Garbage collection tuning"], correct: 1, explanation: "Happens-before ensures read sees prior writes under defined synchronization." },
  { question: "Why avoid blocking calls inside parallel stream operations?", answers: ["It improves throughput", "Can starve common fork-join pool and hurt performance", "Parallel streams do not support IO", "Compiler forbids it"], correct: 1, explanation: "Blocking tasks reduce parallel pool efficiency." },
  { question: "What is key risk with exposing internal mutable collections directly?", answers: ["Faster API", "Breaks encapsulation and invariants via external mutation", "No risk", "Only affects logging"], correct: 1, explanation: "Return unmodifiable views or defensive copies." },
  { question: "What does ClassLoader isolation affect?", answers: ["Only UI layout", "Type identity and dependency compatibility across modules", "SQL parsing", "Integer math"], correct: 1, explanation: "Same class name loaded by different classloaders can be distinct types." },
  { question: "What is safest way to close resources pre-Java 7 alternative replaced by?", answers: ["finalize", "try-with-resources", "System.gc", "Thread.stop"], correct: 1, explanation: "try-with-resources ensures deterministic close." },
  { question: "What is false sharing in concurrency context?", answers: ["Sharing same object intentionally", "Performance degradation from cache-line contention", "Deadlock type", "Heap fragmentation"], correct: 1, explanation: "Independent variables on same cache line can cause contention." },
  { question: "What is difference between fail-fast and fail-safe iterators?", answers: ["No difference", "Fail-fast throws on concurrent modification; fail-safe iterates snapshot/weak consistency", "Fail-safe always faster", "Fail-fast is thread-safe"], correct: 1, explanation: "Iterator behavior differs under structural modifications." },
  { question: "Why can excessive object creation in hot path hurt latency?", answers: ["No effect", "Increases GC pressure and pause risk", "Only disk usage increases", "Compiler removes all objects"], correct: 1, explanation: "Allocation-heavy paths trigger more GC work." },
  { question: "What is purpose of bounded wildcards like <? extends T>?", answers: ["Disable generics", "Express variance constraints for flexible APIs", "Improve runtime speed", "Replace interfaces"], correct: 1, explanation: "Bounds model producer/consumer behavior safely." },
  { question: "What is major issue with swallowing InterruptedException?", answers: ["Nothing", "Loses cancellation signal and can break cooperative shutdown", "Improves responsiveness", "Disables locks"], correct: 1, explanation: "Interrupted status should be handled/restored appropriately." },
  { question: "What does lock striping optimize?", answers: ["Single global lock", "Finer-grained locking to improve concurrency", "Disable synchronization", "Only memory usage"], correct: 1, explanation: "Striped locks reduce contention compared to one coarse lock." },
  { question: "What is serialization compatibility risk with changing class fields?", answers: ["No risk", "InvalidClassException/version mismatch if serialVersionUID/contracts change", "Only compile warning", "Runtime auto migration always"], correct: 1, explanation: "Serializable evolution must be managed carefully." },
  { question: "Why prefer composition over inheritance in many designs?", answers: ["Inheritance is always wrong", "Composition reduces tight coupling and fragile base-class issues", "Composition disables polymorphism", "Only for UI"], correct: 1, explanation: "Composition often yields more maintainable flexible designs." }
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
const API_BASE_URL = (
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000"
    : "https://websitequize-backend.onrender.com"
).replace(/\/$/, "");
const QUIZ_NAME = "java";
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
    `;
  } else {
    explanationEl.className = "feedback-box feedback-wrong";
    explanationEl.innerHTML = `
      <div class="feedback-title">Wrong</div>
      <p>Right answer: <strong>${q.answers[correctIndex]}</strong></p>
      <p>${q.explanation}</p>
    `;
  }

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
  if (levelMetaEl) levelMetaEl.style.display = "none";
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
  if (levelMetaEl) levelMetaEl.style.display = "block";
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

  levelButtons.forEach((btn) => { btn.addEventListener("click", () => setLevel(btn.dataset.level)); });
  showLevelSelection();
  quizInitialized = true;
  return true;
}

if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", initQuiz, { once: true }); }
initQuiz();
setTimeout(initQuiz, 0);
setTimeout(initQuiz, 200);












