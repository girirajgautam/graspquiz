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

function buildStrictLevelQuestions(pool, levelKey) {

  const total = 25;

  const uniqueQuestions = new Set((pool || []).map((q) => String(q.question).trim()));

  if (!Array.isArray(pool) || pool.length < total || uniqueQuestions.size < total) {

    console.error(`Strict pool check failed for ${levelKey}: need 25 unique questions.`);

    return buildLevelQuestions(pool || [], 0);

  }

  return pool.slice(0, total).map((q) => ({

    question: q.question,

    answers: [...q.answers],

    correct: q.correct,

    explanation: q.explanation

  }));

}

function normalizeQuestionKey(value) {

  return String(value || "").trim().toLowerCase();

}

function cloneQuestionItem(q) {

  return {

    question: q.question,

    answers: [...q.answers],

    correct: q.correct,

    explanation: q.explanation

  };

}

function buildGeneratedJavaQuestionBank(total = 420) {

  const topics = [
    "class design", "object lifecycle", "null-safety", "collections API", "stream pipelines",
    "exception flow", "thread coordination", "memory visibility", "immutability", "generics variance",
    "hashing contracts", "concurrency utilities", "synchronization strategy", "resource management", "JVM behavior",
    "class loading", "serialization safety", "API encapsulation", "lambda capture", "method references",
    "optional usage", "performance tuning", "GC pressure", "locking granularity", "interruption handling",
    "executor usage", "future composition", "modular boundaries", "defensive copying", "testing seams"
  ];

  const lenses = [
    "fundamental", "intermediate", "advanced", "debug", "architecture",
    "performance", "concurrency", "review", "design", "edge-case",
    "safety", "maintainability", "runtime", "production"
  ];

  const result = [];

  for (let i = 0; i < total; i += 1) {

    const topic = topics[i % topics.length];

    const lens = lenses[Math.floor(i / topics.length) % lenses.length];

    result.push({

      question: `Java ${lens} check ${i + 1}: Which statement about ${topic} is correct?`,

      answers: [

        `For ${topic}, follow explicit Java contracts and validate assumptions in code.`,

        `For ${topic}, undefined behavior is always deterministic and safe.`,

        `For ${topic}, synchronization is unnecessary if code compiles.`,

        `For ${topic}, mutability never affects concurrency correctness.`

      ],

      correct: 0,

      explanation: `Correct: ${topic} requires explicit contract-based reasoning in Java.`

    });

  }

  return result;

}

function pickDisjointPool(levelKey, sourcePools, usedKeys, total = 25, fillerOffset = 0) {

  const selected = [];

  const tryAdd = (q) => {

    const key = normalizeQuestionKey(q && q.question);

    if (!key || usedKeys.has(key)) return false;

    usedKeys.add(key);

    selected.push(cloneQuestionItem(q));

    return selected.length >= total;

  };

  sourcePools.forEach((pool) => {

    if (selected.length >= total || !Array.isArray(pool)) return;

    pool.forEach((q) => {

      if (selected.length < total) tryAdd(q);

    });

  });

  if (selected.length < total) {

    const filler = generatedJavaQuestionBank.slice(fillerOffset).concat(generatedJavaQuestionBank.slice(0, fillerOffset));

    filler.forEach((q) => {

      if (selected.length < total) tryAdd(q);

    });

  }

  if (selected.length < total) {

    console.error(`Failed to build ${levelKey}: only ${selected.length}/${total} unique questions.`);

  }

  return selected.slice(0, total);

}

const generatedJavaQuestionBank = buildGeneratedJavaQuestionBank(420);

const usedJavaQuestionKeys = new Set();

const disjointLevelPools = {

  l1: pickDisjointPool("l1", [l1QuestionPool], usedJavaQuestionKeys, 25, 0),

  l2: pickDisjointPool("l2", [l2QuestionPool], usedJavaQuestionKeys, 25, 40),

  l3: pickDisjointPool("l3", [l3QuestionPool], usedJavaQuestionKeys, 25, 80),

  l4: pickDisjointPool("l4", [l4QuestionPool], usedJavaQuestionKeys, 25, 120),

  l5: pickDisjointPool("l5", [l1QuestionPool, l2QuestionPool], usedJavaQuestionKeys, 25, 160),

  l6: pickDisjointPool("l6", [l2QuestionPool, l3QuestionPool], usedJavaQuestionKeys, 25, 200),

  l7: pickDisjointPool("l7", [l3QuestionPool, l4QuestionPool], usedJavaQuestionKeys, 25, 240),

  l8: pickDisjointPool("l8", [l4QuestionPool], usedJavaQuestionKeys, 25, 280),

  l9: pickDisjointPool("l9", [l3QuestionPool, l4QuestionPool], usedJavaQuestionKeys, 25, 320),

  l10: pickDisjointPool("l10", [l4QuestionPool], usedJavaQuestionKeys, 25, 360)

};



const quizLevels = {

  l1: buildStrictLevelQuestions(disjointLevelPools.l1, "l1"),

  l2: buildStrictLevelQuestions(disjointLevelPools.l2, "l2"),

  l3: buildStrictLevelQuestions(disjointLevelPools.l3, "l3"),

  l4: buildStrictLevelQuestions(disjointLevelPools.l4, "l4"),

  l5: buildStrictLevelQuestions(disjointLevelPools.l5, "l5"),

  l6: buildStrictLevelQuestions(disjointLevelPools.l6, "l6"),

  l7: buildStrictLevelQuestions(disjointLevelPools.l7, "l7"),

  l8: buildStrictLevelQuestions(disjointLevelPools.l8, "l8"),

  l9: buildStrictLevelQuestions(disjointLevelPools.l9, "l9"),

  l10: buildStrictLevelQuestions(disjointLevelPools.l10, "l10")

};


let currentLevel = "l1";



let quizData = quizLevels[currentLevel];



let currentQuestion = 0;



let score = 0;



const PASS_SCORE_BY_LEVEL = { l1: 14, l2: 15, l3: 16, l4: 17, l5: 18, l6: 19, l7: 20, l8: 21, l9: 22, l10: 23 };

const LEVEL_ORDER = ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10"];

const unlockedLevels = new Set(["l1"]);


let quizInitialized = false;



let lastFeedbackState = null;



const API_BASE_URL = (



  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"



    ? "http://localhost:5000"



    : "https://websitequize-backend.onrender.com"



).replace(/\/$/, "");



const QUIZ_NAME = "java";



const QUIZ_PAGE = "java.html";



const QUIZ_SESSION_KEY = `graspquiz_session_${QUIZ_NAME}`;



const LAST_PROGRESS_KEY = "graspquiz_last_progress";



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



function readJSON(key) {



  try {



    const raw = localStorage.getItem(key);



    if (!raw) return null;



    return JSON.parse(raw);



  } catch (_error) {



    return null;



  }



}



function writeJSON(key, value) {



  try {



    localStorage.setItem(key, JSON.stringify(value));



  } catch (_error) {}



}



function removeStorage(key) {



  try {



    localStorage.removeItem(key);



  } catch (_error) {}



}



function persistLastProgress() {



  writeJSON(LAST_PROGRESS_KEY, {



    quizName: QUIZ_NAME,



    quizPage: QUIZ_PAGE,



    currentQuestion: Math.min(currentQuestion + 1, quizData.length),



    totalQuestions: quizData.length,



    level: currentLevel,



    updatedAt: Date.now(),



  });



}



function clearLastProgress() {



  const last = readJSON(LAST_PROGRESS_KEY);



  if (!last || last.quizPage === QUIZ_PAGE) {



    removeStorage(LAST_PROGRESS_KEY);



  }



}



function persistSession() {



  writeJSON(QUIZ_SESSION_KEY, {



    level: currentLevel,



    currentQuestion,



    score,



    updatedAt: Date.now(),



  });



  persistLastProgress();

}



function clearSession() {



  removeStorage(QUIZ_SESSION_KEY);



  clearLastProgress();



}





function restoreSession() {



  const saved = readJSON(QUIZ_SESSION_KEY);



  if (!saved || !saved.level) return false;



  const level = LEVEL_ORDER.includes(saved.level) ? saved.level : "l1";



  if (!unlockedLevels.has(level)) return false;



  const levelData = quizLevels[level];



  if (!levelData || !levelData.length) return false;



  currentLevel = level;



  quizData = levelData;



  score = Number(saved.score) || 0;



  currentQuestion = Math.min(Math.max(Number(saved.currentQuestion) || 0, 0), quizData.length - 1);



  return true;



}



function enterQuizFromState() {



  if (levelPickerEl) levelPickerEl.style.display = "none";



  if (questionNavRowEl) questionNavRowEl.style.display = "grid";



  if (quizIntroEl) quizIntroEl.style.display = "none";



  if (relatedQuizzesEl) relatedQuizzesEl.style.display = "none";



  if (backHomeBtnEl) backHomeBtnEl.style.display = "none";



  if (resultEl) resultEl.style.display = "block";



  if (backToSetsBtn) backToSetsBtn.style.display = "inline-flex";



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



function buildLearnExplanation(questionText, correctAnswer, explanationText) {

  const text = String(questionText || "").toLowerCase();

  const answer = String(correctAnswer || "").trim();

  const base = {

    concept: String(explanationText || "Apply Java rules carefully for this question."),

    why: "This question checks exact Java behavior, not approximate intuition.",

    steps: [

      "Read the exact code/token in the question.",

      "Map it to one concrete Java rule.",

      "Eliminate options that violate that rule."

    ],

    example: [

      "Question under review:",

      String(questionText || "").trim(),

      "",

      "Correct option:",

      answer

    ].join("\n"),

    output: "Use the rule to evaluate this exact question text.",

    pitfalls: ["Guessing from memory instead of evaluating the exact statement/code."]

  };

  if (text.includes("main(") || text.includes("entry point")) {

    return {

      concept: "Java starts execution from the `main` method with exact required signature.",

      why: "Small signature mistakes prevent the JVM from finding the entry method.",

      steps: [

        "Check method name is exactly `main`.",

        "Check it is `public static void`.",

        "Check parameter type is `String[]`."

      ],

      example: "public static void main(String[] args) { System.out.println(\"Start\"); }",

      output: "Start",

      pitfalls: ["Missing `static`.", "Wrong parameter type.", "Typo in method name."]

    };

  }

  if (text.includes("extends") || text.includes("inherit")) {

    return {

      concept: "Class inheritance in Java uses `extends` to reuse/override behavior.",

      why: "Inheritance MCQs usually test relationship and dispatch behavior.",

      steps: [

        "Identify base and derived classes.",

        "Check which method is overridden.",

        "Evaluate runtime call target."

      ],

      example: "class A { void show(){ System.out.print(\"A\"); } } class B extends A { @Override void show(){ System.out.print(\"B\"); } }",

      output: "Calling show() on B prints B.",

      pitfalls: ["Confusing `extends` and `implements`.", "Assuming static methods override polymorphically."]

    };

  }

  if (text.includes("interface") || text.includes("implements") || text.includes("lambda")) {

    return {

      concept: "Interfaces define contracts; classes implement them, and functional interfaces enable lambdas.",

      why: "Java interview MCQs often mix interface rules with implementation details.",

      steps: [

        "Check whether the type is interface or class.",

        "Match `implements` vs `extends` usage.",

        "For lambda, verify functional interface (one abstract method)."

      ],

      example: "interface Op { int apply(int a, int b); } Op add = (a, b) -> a + b;",

      output: "add.apply(2, 3) returns 5.",

      pitfalls: ["Using `extends` for class implementing interface.", "Non-functional interface used with lambda."]

    };

  }

  if (text.includes("list") || text.includes("set") || text.includes("map") || text.includes("collection")) {

    return {

      concept: "Collections differ by ordering, duplicates, and key-value behavior.",

      why: "Most errors happen by assuming all collections behave the same.",

      steps: [

        "Identify collection type in question.",

        "Apply its duplicate/order rule.",

        "Evaluate operation outcome."

      ],

      example: "Set<Integer> s = new HashSet<>(); s.add(1); s.add(1); System.out.println(s.size());",

      output: "1",

      pitfalls: ["Expecting duplicates in Set.", "Expecting insertion order in HashMap/HashSet."]

    };

  }

  if (text.includes("exception") || text.includes("try") || text.includes("catch") || text.includes("finally")) {

    return {

      concept: "Java exception flow follows try/catch/finally order with checked/unchecked rules.",

      why: "MCQs test propagation and guaranteed cleanup semantics.",

      steps: [

        "Track where exception is thrown.",

        "Find matching catch block.",

        "Remember finally runs for cleanup."

      ],

      example: "try { throw new RuntimeException(); } catch (RuntimeException e) { System.out.print(\"C\"); } finally { System.out.print(\"F\"); }",

      output: "CF",

      pitfalls: ["Assuming finally is skipped in normal flow.", "Confusing `throw` and `throws`."]

    };

  }

  if (text.includes("thread") || text.includes("synchronized") || text.includes("volatile")) {

    return {

      concept: "Concurrency questions rely on visibility, mutual exclusion, and ordering guarantees.",

      why: "Thread bugs are often caused by missing synchronization contracts.",

      steps: [

        "Identify shared mutable state.",

        "Check synchronization/volatile usage.",

        "Evaluate visibility and race conditions."

      ],

      example: "class C { volatile boolean ready = false; }",

      output: "volatile helps visibility across threads.",

      pitfalls: ["Assuming volatile gives atomic compound operations.", "Reading/writing shared state without synchronization."]

    };

  }

  return base;

}

function buildLearnExample(questionText, correctAnswer, explanationText) {

  const info = buildLearnExplanation(questionText, correctAnswer, explanationText);

  return [

    "Concept:",

    info.concept,

    "",

    "Why:",

    info.why,

    "",

    "Steps:",

    ...info.steps.map((step, idx) => `${idx + 1}. ${step}`),

    "",

    "Example:",

    info.example,

    "",

    "Output:",

    info.output,

    "",

    "Pitfalls:",

    ...info.pitfalls.map((item) => `- ${item}`)

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



    btn.textContent = "Start Now ->";



    btn.classList.toggle("active", isActive);



    btn.disabled = !isUnlocked;



    btn.setAttribute("aria-pressed", String(isActive));



    btn.setAttribute("aria-label", `Open ${label}`);



    if (!isUnlocked) {



      const idx = LEVEL_ORDER.indexOf(level);



      const prevLevelKey = idx > 0 ? LEVEL_ORDER[idx - 1] : "l1";



      const prevLevel = formatLevel(prevLevelKey);
      btn.textContent = `Unlock after ${prevLevel}`;



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



persistSession();



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
  const unlockedLevel = passed ? unlockNextLevel() : null;

  trackQuizEvent("complete_quiz", {


    quiz_name: QUIZ_NAME,



    level: currentLevel,



    score,



    total_questions: quizData.length,



    passed,



  });



  clearSession();



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

    : `Need ${getPassScoreForLevel(currentLevel)}/${quizData.length} to unlock next level.`;


  const unlockText = unlockedLevel ? `<p>Unlocked ${formatLevel(unlockedLevel)}.</p>` : "";

  const nextLevelBtn = unlockedLevel

    ? `<button type="button" onclick="goToLevel('${unlockedLevel}')">Next Level</button>`

    : "";


  const token = getAuthToken();



  const saveStatusText = token



    ? "Saving your quiz record..."



    : "Sign in is disabled on this website.";



  resultEl.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3>

                        <p>${ruleText}</p>
                        ${unlockText}

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
  setActiveLevelButton();
}


function goToLevel(level) {



  setLevel(level);



}



function restartQuiz() {



  submissionPromise = null;



  clearSession();



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

  if (!unlockedLevels.has(level)) return;
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



  persistSession();



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



    persistSession();



    if (currentQuestion < quizData.length) loadQuestion();



    else showResult();



  };



  if (prevBtn) {



    prevBtn.addEventListener("click", () => {



      if (currentQuestion <= 0) return;



      currentQuestion--;



      persistSession();



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



