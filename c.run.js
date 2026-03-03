const l1QuestionPool = [
  {
    question: "What does 'printf' function do in C?",
    answers: ["Takes input from user", "Prints output to console", "Performs calculation", "Declares a variable"],
    correct: 1,
    explanation: "'printf' displays formatted output on the console."
  },
  {
    question: "Which header file is needed for 'printf'?",
    answers: ["<stdio.h>", "<conio.h>", "<stdlib.h>", "<string.h>"],
    correct: 0,
    explanation: "'printf' is declared in <stdio.h>."
  },
  {
    question: "Which operator is used for assignment in C?",
    answers: ["=", "==", "+=", "-="],
    correct: 0,
    explanation: "'=' assigns a value; '==' compares two values."
  },
  {
    question: "What is the return type of 'main' in standard C?",
    answers: ["void", "int", "float", "char"],
    correct: 1,
    explanation: "main should return int to indicate exit status."
  },
  {
    question: "Which keyword defines a constant variable?",
    answers: ["fixed", "const", "static", "define"],
    correct: 1,
    explanation: "const prevents changing the variable value after initialization."
  },
  {
    question: "Which loop runs at least once?",
    answers: ["for", "while", "do...while", "foreach"],
    correct: 2,
    explanation: "do...while checks the condition after executing the loop body."
  },
  {
    question: "Which operator dereferences a pointer?",
    answers: ["&", "*", "->", "#"],
    correct: 1,
    explanation: "The * operator accesses the value at a pointer address."
  },
  {
    question: "Which function reads formatted input?",
    answers: ["printf()", "scanf()", "gets()", "putchar()"],
    correct: 1,
    explanation: "scanf() reads formatted input from stdin."
  },
  {
    question: "What is the first valid index in a C array?",
    answers: ["1", "-1", "0", "Depends on compiler"],
    correct: 2,
    explanation: "C arrays are zero-indexed."
  },
  {
    question: "Which header provides malloc() and free()?",
    answers: ["<string.h>", "<stdlib.h>", "<math.h>", "<ctype.h>"],
    correct: 1,
    explanation: "Dynamic memory helpers are declared in <stdlib.h>."
  },
  {
    question: "Which symbol starts a single-line comment?",
    answers: ["/*", "//", "#", "--"],
    correct: 1,
    explanation: "// starts a comment until end of line."
  },
  {
    question: "What is sizeof(char) in C?",
    answers: ["1 byte", "2 bytes", "4 bytes", "Compiler always picks 8 bytes"],
    correct: 0,
    explanation: "By definition, sizeof(char) is always 1."
  },
  {
    question: "What is the format specifier for int?",
    answers: ["%f", "%d", "%c", "%s"],
    correct: 1,
    explanation: "%d prints/reads int values."
  },
  {
    question: "Which operator means logical AND?",
    answers: ["&", "&&", "||", "!&"],
    correct: 1,
    explanation: "&& returns true only when both conditions are true."
  },
  {
    question: "What does 'break' do in a loop?",
    answers: ["Skips current iteration", "Exits the loop", "Restarts the loop", "Pauses execution"],
    correct: 1,
    explanation: "break immediately exits the nearest loop/switch."
  },
  {
    question: "What does 'continue' do in a loop?",
    answers: ["Ends the program", "Exits loop completely", "Skips to next iteration", "Prints current value"],
    correct: 2,
    explanation: "continue skips remaining statements for the current iteration."
  },
  {
    question: "Which character marks end of a C string?",
    answers: ["\\n", "\\0", "\\t", "EOF"],
    correct: 1,
    explanation: "Strings are null-terminated using '\\0'."
  },
  {
    question: "Which header declares strlen()?",
    answers: ["<stdio.h>", "<math.h>", "<string.h>", "<ctype.h>"],
    correct: 2,
    explanation: "strlen() is declared in <string.h>."
  },
  {
    question: "Which return type is used when function returns nothing?",
    answers: ["null", "none", "void", "empty"],
    correct: 2,
    explanation: "void indicates no return value."
  },
  {
    question: "In switch, which label handles unmatched cases?",
    answers: ["case else", "default", "otherwise", "none"],
    correct: 1,
    explanation: "default runs when no case matches."
  },
  {
    question: "What does ++i do?",
    answers: ["Adds 2 to i", "Decrements i", "Increments i by 1", "Multiplies i by 1"],
    correct: 2,
    explanation: "++i increases i by one (prefix increment)."
  },
  {
    question: "Which operator gives the address of a variable?",
    answers: ["*", "&", "->", "%"],
    correct: 1,
    explanation: "&variable gives its memory address."
  },
  {
    question: "Which header file declares fopen()?",
    answers: ["<stdlib.h>", "<string.h>", "<stdio.h>", "<time.h>"],
    correct: 2,
    explanation: "fopen() belongs to standard I/O, declared in <stdio.h>."
  },
  {
    question: "Which is the correct order in a for loop?",
    answers: ["condition; init; increment", "init; condition; increment", "increment; condition; init", "init; increment; condition"],
    correct: 1,
    explanation: "for(init; condition; increment) is the correct pattern."
  },
  {
    question: "What should be used to release memory allocated by malloc()?",
    answers: ["delete", "remove", "free()", "clear()"],
    correct: 2,
    explanation: "Use free() to release dynamically allocated memory."
  }
];

const l2QuestionPool = [
  {
    question: "What is printed by: int a = 5; printf(\"%d\", a++ + ++a);",
    answers: ["11", "12", "Undefined behavior", "10"],
    correct: 2,
    explanation: "Modifying 'a' more than once between sequence points in C causes undefined behavior."
  },
  {
    question: "Which storage class keeps a local variable value between function calls?",
    answers: ["auto", "register", "static", "extern"],
    correct: 2,
    explanation: "A local static variable has block scope but static storage duration."
  },
  {
    question: "What does 'const int *p' mean?",
    answers: ["Pointer is constant", "Pointed value is constant", "Both are constant", "Invalid syntax"],
    correct: 1,
    explanation: "You cannot modify the pointed-to int through p, but p itself can point elsewhere."
  },
  {
    question: "What does 'int *const p' mean?",
    answers: ["Pointer is constant", "Pointed value is constant", "Both are constant", "p is volatile"],
    correct: 0,
    explanation: "p must always point to the same address; pointed data can still be modified."
  },
  {
    question: "Which function should be used instead of gets() for safer input?",
    answers: ["scanf()", "fgets()", "readln()", "input()"],
    correct: 1,
    explanation: "gets() is unsafe; fgets() reads with size limits."
  },
  {
    question: "Which is true for 'extern int x;'?",
    answers: ["Defines x", "Declares x without defining", "Makes x local", "Creates constant x"],
    correct: 1,
    explanation: "extern declares a variable defined in another translation unit (or later)."
  },
  {
    question: "What is the result type of sizeof expression?",
    answers: ["int", "long", "size_t", "unsigned int"],
    correct: 2,
    explanation: "sizeof returns size_t."
  },
  {
    question: "Which statement about pointer arithmetic is valid?",
    answers: ["p + 1 adds 1 byte always", "p + 1 moves by sizeof(*p)", "p + 1 invalid for arrays", "p + 1 same as ++*p"],
    correct: 1,
    explanation: "Pointer arithmetic advances by the size of the pointed type."
  },
  {
    question: "What does this declare? int (*fp)(int, int);",
    answers: ["Function returning int*", "Pointer to function returning int", "Array of function pointers", "Pointer to int array"],
    correct: 1,
    explanation: "Parentheses bind *fp first: it is a function pointer."
  },
  {
    question: "Which header is required for strcmp()?",
    answers: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<ctype.h>"],
    correct: 2,
    explanation: "strcmp() is declared in <string.h>."
  },
  {
    question: "What happens if free() is called twice on same pointer?",
    answers: ["No effect", "Memory leak only", "Undefined behavior", "Compile-time error"],
    correct: 2,
    explanation: "Double free invokes undefined behavior."
  },
  {
    question: "Which is the correct way to allocate memory for 10 ints?",
    answers: ["malloc(10)", "malloc(10 * sizeof(int))", "alloc(int,10)", "new int[10]"],
    correct: 1,
    explanation: "Always multiply element count by sizeof(type)."
  },
  {
    question: "What is the danger of using scanf(\"%s\", str) without width?",
    answers: ["Type mismatch", "Buffer overflow risk", "Always reads empty", "Only reads one char"],
    correct: 1,
    explanation: "Without max width, input may exceed buffer size."
  },
  {
    question: "Which operation is invalid on FILE *fp opened with \"r\" mode?",
    answers: ["fgetc(fp)", "fprintf(fp, \"x\")", "fscanf(fp, \"%d\", &x)", "feof(fp)"],
    correct: 1,
    explanation: "Read-only mode disallows write operations."
  },
  {
    question: "What is true about recursion in C?",
    answers: ["Not supported", "Needs global variables", "Must have base case to terminate", "Only for int return type"],
    correct: 2,
    explanation: "A recursion base case is required to avoid infinite recursion/stack overflow."
  },
  {
    question: "What does volatile indicate?",
    answers: ["Variable in RAM only", "Value may change unexpectedly", "Makes variable thread-safe", "Prevents optimization entirely"],
    correct: 1,
    explanation: "volatile tells compiler that value can change outside normal code flow."
  },
  {
    question: "Which cast is needed to store malloc result in C?",
    answers: ["Always required", "Never required in C", "Required only in C99", "Required only for structs"],
    correct: 1,
    explanation: "In C, void* converts implicitly; cast is unnecessary."
  },
  {
    question: "What is an include guard used for?",
    answers: ["Speed up loops", "Prevent multiple header inclusion", "Encrypt source files", "Avoid linker warnings only"],
    correct: 1,
    explanation: "Include guards prevent duplicate declarations from repeated inclusion."
  },
  {
    question: "Which of these best describes undefined behavior?",
    answers: ["Compiler rejects code", "Runtime error guaranteed", "Program behavior not defined by C standard", "Always returns zero"],
    correct: 2,
    explanation: "Undefined behavior gives compilers freedom; any result is possible."
  },
  {
    question: "What is printed by printf(\"%zu\", sizeof(\"abc\"));",
    answers: ["3", "4", "Depends on compiler", "2"],
    correct: 1,
    explanation: "String literal \"abc\" includes null terminator, size is 4."
  },
  {
    question: "Which expression accesses struct pointer member 'x'?",
    answers: ["p.x", "p->x", "*p.x", "p=>x"],
    correct: 1,
    explanation: "Use -> for member access through struct pointers."
  },
  {
    question: "What is the scope of a variable declared inside braces {}?",
    answers: ["File scope", "Function scope", "Block scope", "Program scope"],
    correct: 2,
    explanation: "Variables declared in a block are visible only inside that block."
  },
  {
    question: "Which function converts string to integer?",
    answers: ["stoi()", "atoi()", "strint()", "toint()"],
    correct: 1,
    explanation: "atoi() converts C-string to int (with limitations)."
  },
  {
    question: "Which format specifier prints size_t safely?",
    answers: ["%d", "%ld", "%zu", "%u"],
    correct: 2,
    explanation: "%zu is the correct printf specifier for size_t."
  },
  {
    question: "What is the main purpose of typedef?",
    answers: ["Create new storage class", "Create type alias", "Allocate memory", "Replace preprocessor macros"],
    correct: 1,
    explanation: "typedef gives an existing type a new alias."
  }
];

const l3QuestionPool = [
  {
    question: "Given int a[5]={1,2,3,4,5}; what is *(a + 3)?",
    answers: ["3", "4", "5", "Undefined behavior"],
    correct: 1,
    explanation: "a + 3 points to the 4th element (index 3)."
  },
  {
    question: "What does this declaration mean? int (*arr[3])(void);",
    answers: ["Array of 3 ints", "Pointer to array of 3 ints", "Array of 3 pointers to functions returning int", "Function returning pointer to int array"],
    correct: 2,
    explanation: "arr is an array of three function pointers."
  },
  {
    question: "Which behavior is guaranteed by 'realloc(ptr, newSize)' on success?",
    answers: ["Old pointer always valid", "Data up to min(old,new) size preserved", "Memory always moved", "New bytes always zeroed"],
    correct: 1,
    explanation: "realloc preserves existing data up to the smaller size."
  },
  {
    question: "What is wrong with returning address of a local variable?",
    answers: ["Nothing", "Address may become invalid after function returns", "Only works in C++", "It leaks memory"],
    correct: 1,
    explanation: "Local variables have automatic storage duration and die after return."
  },
  {
    question: "Which is true about strict aliasing in C?",
    answers: ["Any pointer can alias any type safely", "Violating aliasing rules can break optimizations", "Alias rules apply only to arrays", "char* cannot alias other types"],
    correct: 1,
    explanation: "Breaking strict aliasing may produce unexpected behavior under optimization."
  },
  {
    question: "What does 'sizeof(int*)' depend on?",
    answers: ["Size of int", "CPU architecture / data model", "Compiler optimization level", "Number of pointers used"],
    correct: 1,
    explanation: "Pointer size depends on target architecture/data model."
  },
  {
    question: "Which is the safest pattern after free(p)?",
    answers: ["Leave p unchanged", "Set p = NULL", "Increment p", "Call free(p) again"],
    correct: 1,
    explanation: "Setting pointer to NULL helps avoid accidental reuse/double free."
  },
  {
    question: "What does this expression evaluate first? *p++",
    answers: ["*(++p)", "(*p)++", "*(p++)", "Undefined"],
    correct: 2,
    explanation: "Post-increment has higher precedence on pointer variable: *(p++)."
  },
  {
    question: "Which file mode truncates file and allows read/write?",
    answers: ["r+", "w+", "a+", "rb+"],
    correct: 1,
    explanation: "w+ creates/truncates and allows both read and write."
  },
  {
    question: "What is the correct check for malloc failure?",
    answers: ["if (p == 0x0)", "if (!p)", "if (p < 0)", "if (p == EOF)"],
    correct: 1,
    explanation: "malloc returns NULL on allocation failure."
  },
  {
    question: "Which statement about enum is correct?",
    answers: ["Enum constants are floating values", "Enum constants are compile-time integer constants", "Enums cannot be compared", "Enums require malloc"],
    correct: 1,
    explanation: "Enum values are integral constants."
  },
  {
    question: "What is the effect of '#define SQR(x) x*x' used as SQR(1+2)?",
    answers: ["9", "5", "6", "Compiler error"],
    correct: 1,
    explanation: "Macro expands to 1+2*1+2; parentheses are required in macro definitions."
  },
  {
    question: "Which declaration gives read-only pointer to read-only int?",
    answers: ["int *const p", "const int *p", "const int *const p", "volatile int *p"],
    correct: 2,
    explanation: "Both pointed data and pointer are const."
  },
  {
    question: "What does this do? memmove(dst, src, n);",
    answers: ["Copies memory; overlap is unsafe", "Copies memory; overlap handled safely", "Compares memory", "Allocates memory"],
    correct: 1,
    explanation: "memmove handles overlapping memory regions safely."
  },
  {
    question: "Which operator has higher precedence?",
    answers: ["&& over ==", "== over &&", "Same precedence", "Depends on compiler"],
    correct: 1,
    explanation: "Relational/equality operators are evaluated before logical AND."
  },
  {
    question: "What is UB here? int x=1; int y=x++ + x++;",
    answers: ["No UB", "UB due to multiple unsequenced modifications", "Only warning", "y always 3"],
    correct: 1,
    explanation: "x is modified multiple times without sequencing."
  },
  {
    question: "Which header declares qsort()?",
    answers: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<search.h>"],
    correct: 1,
    explanation: "qsort is declared in <stdlib.h>."
  },
  {
    question: "What should a comparator for qsort return?",
    answers: ["Only 0 or 1", "Negative/zero/positive by ordering", "Boolean true/false", "Pointer difference only"],
    correct: 1,
    explanation: "Comparator returns <0, 0, >0 for ordering."
  },
  {
    question: "What is true for static global variable?",
    answers: ["Visible across all translation units", "Internal linkage (file scope only)", "Allocated on stack", "Must be const"],
    correct: 1,
    explanation: "static at file scope gives internal linkage."
  },
  {
    question: "Why use 'size_t i' for array indexing?",
    answers: ["It is always signed", "Matches object size type and avoids sign issues", "Faster than int always", "Required by standard for loops"],
    correct: 1,
    explanation: "size_t is the unsigned type used for object sizes/indices."
  },
  {
    question: "What does this mean? int (*p)[10];",
    answers: ["Pointer to int", "Array of 10 int pointers", "Pointer to array of 10 ints", "Function pointer"],
    correct: 2,
    explanation: "p points to an array containing 10 ints."
  },
  {
    question: "Which is true about fgets(buffer, n, stdin)?",
    answers: ["Never stores newline", "May store newline if read before limit", "Always null-terminates even on n=0", "Reads unlimited input"],
    correct: 1,
    explanation: "fgets may include newline and null-terminates when possible."
  },
  {
    question: "What is the safe way to print pointer value?",
    answers: ["%d", "%u", "%p", "%x"],
    correct: 2,
    explanation: "Use %p for pointer addresses."
  },
  {
    question: "Which statement about bit-fields is correct?",
    answers: ["Layout is fully portable", "Signedness and layout can be implementation-defined", "Bit-fields can be arrays", "Bit-fields allow taking address always"],
    correct: 1,
    explanation: "Bit-field representation details are often implementation-defined."
  },
  {
    question: "Which construct best prevents macro side effects?",
    answers: ["Use macros for everything", "Use inline function where possible", "Remove parentheses in macros", "Use global variables"],
    correct: 1,
    explanation: "Inline functions avoid multiple evaluation issues in macros."
  }
];

const l4QuestionPool = [
  {
    question: "What is undefined behavior in C?",
    answers: ["Compiler warning only", "Behavior defined by OS", "Program behavior not defined by standard", "Always runtime crash"],
    correct: 2,
    explanation: "Undefined behavior means the C standard imposes no requirements on what happens."
  },
  {
    question: "Why is returning address of a local variable dangerous?",
    answers: ["It is always NULL", "Local storage is invalid after function returns", "Address becomes read-only", "Compiler forbids it"],
    correct: 1,
    explanation: "Local variables have automatic storage duration and their lifetime ends after return."
  },
  {
    question: "What is strict aliasing violation likely to cause?",
    answers: ["Faster code always", "Optimization-related misbehavior", "Guaranteed compile error", "Memory leak only"],
    correct: 1,
    explanation: "Violating aliasing rules can break assumptions used by optimizers."
  },
  {
    question: "Which expression has undefined behavior?",
    answers: ["x = x + 1", "x++ + ++x", "x += 1", "++x"],
    correct: 1,
    explanation: "Modifying a variable multiple times without sequencing leads to UB."
  },
  {
    question: "What does volatile guarantee?",
    answers: ["Thread safety", "No optimization at all", "Value may change unexpectedly and accesses must be emitted", "Atomicity"],
    correct: 2,
    explanation: "volatile affects optimization around reads/writes, not atomic synchronization."
  },
  {
    question: "What is the safest way to avoid double free?",
    answers: ["Call free twice to ensure release", "Set pointer to NULL after free", "Use realloc only", "Use static pointers"],
    correct: 1,
    explanation: "Nulling the pointer after free helps prevent accidental reuse/double free."
  },
  {
    question: "What is the purpose of include guards?",
    answers: ["Speed CPU", "Prevent multiple inclusion of same header definitions", "Encrypt headers", "Replace linker"],
    correct: 1,
    explanation: "Include guards avoid duplicate declarations/errors from repeated header inclusion."
  },
  {
    question: "Which format specifier is correct for size_t?",
    answers: ["%d", "%u", "%zu", "%ld"],
    correct: 2,
    explanation: "%zu is the portable printf specifier for size_t."
  },
  {
    question: "What does int (*p)[10] represent?",
    answers: ["Array of 10 int pointers", "Pointer to array of 10 ints", "Function pointer", "Pointer to int"],
    correct: 1,
    explanation: "Parentheses bind *p first, so p points to an array of 10 ints."
  },
  {
    question: "Which memory copy function is safe for overlap?",
    answers: ["memcpy", "strcpy", "memmove", "bcopy only"],
    correct: 2,
    explanation: "memmove handles overlapping ranges safely; memcpy does not."
  },
  {
    question: "What is true about bit-field layout?",
    answers: ["Fully portable", "Implementation-defined in several aspects", "Always big-endian", "Cannot be used in structs"],
    correct: 1,
    explanation: "Bit-field order/sign/layout details can vary by implementation."
  },
  {
    question: "Why use inline functions instead of complex macros?",
    answers: ["Macros are always slower", "Inline functions avoid multiple-evaluation side effects", "Macros cannot return values", "Inline works only in C++"],
    correct: 1,
    explanation: "Macros may evaluate arguments multiple times; inline functions are safer."
  },
  {
    question: "What does internal linkage mean for static global variable?",
    answers: ["Visible across all files", "Visible only within current translation unit", "Allocated on stack", "Read-only"],
    correct: 1,
    explanation: "static at file scope limits symbol visibility to that source file."
  },
  {
    question: "Which is a correct qsort comparator contract?",
    answers: ["Return only 0/1", "Return negative/zero/positive based on ordering", "Return pointer", "Return bool only"],
    correct: 1,
    explanation: "Comparator must indicate ordering relation with sign."
  },
  {
    question: "What does const int *const p mean?",
    answers: ["Neither const", "Const pointer to const int", "Const pointer only", "Const int only"],
    correct: 1,
    explanation: "Both pointed value and pointer itself are const."
  }
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

function buildStrictLevelQuestions(pool, levelKey) {
  const total = 25;
  const uniqueQuestions = new Set(pool.map((q) => String(q.question).trim()));
  if (pool.length < total || uniqueQuestions.size < total) {
    console.error(`Strict pool check failed for ${levelKey}: need 25 unique questions.`);
    return buildLevelQuestions(pool, 0);
  }
  return pool.slice(0, total).map((q) => ({
    question: q.question,
    answers: [...q.answers],
    correct: q.correct,
    explanation: q.explanation
  }));
}

function buildShiftedUniquePool(bank, offset = 0, total = 25) {
  const seen = new Set();
  const unique = [];
  bank.forEach((q) => {
    const key = String(q.question || "").trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    unique.push({
      question: q.question,
      answers: [...q.answers],
      correct: q.correct,
      explanation: q.explanation
    });
  });

  if (unique.length < total) {
    return unique;
  }

  const start = ((offset % unique.length) + unique.length) % unique.length;
  const rotated = unique.slice(start).concat(unique.slice(0, start));
  return rotated.slice(0, total);
}

const advancedCQuestionBank = [
  ...l1QuestionPool,
  ...l2QuestionPool,
  ...l3QuestionPool,
  ...l4QuestionPool
];

const l5QuestionPool = buildShiftedUniquePool(advancedCQuestionBank, 7, 25);
const l6QuestionPool = buildShiftedUniquePool(advancedCQuestionBank, 19, 25);
const l7QuestionPool = buildShiftedUniquePool(advancedCQuestionBank, 31, 25);
const l8QuestionPool = buildShiftedUniquePool(advancedCQuestionBank, 43, 25);

const quizLevels = {
  l1: buildLevelQuestions(l1QuestionPool, 0),
  l2: buildLevelQuestions(l2QuestionPool, 0),
  l3: buildLevelQuestions(l3QuestionPool, 0),
  l4: buildLevelQuestions(l4QuestionPool, 0),
  l5: buildStrictLevelQuestions(l5QuestionPool, "l5"),
  l6: buildStrictLevelQuestions(l6QuestionPool, "l6"),
  l7: buildStrictLevelQuestions(l7QuestionPool, "l7"),
  l8: buildStrictLevelQuestions(l8QuestionPool, "l8")
};

let currentLevel = "l1";
let quizData = quizLevels[currentLevel];
let currentQuestion = 0;
let score = 0;
let userSelections = [];
const PASS_SCORE_BY_LEVEL = { l1: 14, l2: 15, l3: 16, l4: 17, l5: 18, l6: 19, l7: 20, l8: 21 };
const LEVEL_ORDER = ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"];
const unlockedLevels = new Set(LEVEL_ORDER);
let quizInitialized = false;
let lastFeedbackState = null;
const API_BASE_URL = (
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000"
    : "https://websitequize-backend.onrender.com"
).replace(/\/$/, "");
const QUIZ_NAME = "c_programming";
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

  if (text.includes("printf") || answer.includes("printf")) {
    return {
      concept: "`printf` writes formatted text to standard output.",
      why: "In C, output is explicit. You use format specifiers like `%d`, `%f`, `%c` to print variables safely.",
      steps: [
        "Include `stdio.h` for `printf` declaration.",
        "Choose correct format specifier for variable type.",
        "Pass variables in same order as format specifiers."
      ],
      example: [
        "#include <stdio.h>",
        "int main(void) {",
        "    int x = 10;",
        "    printf(\"x = %d\\n\", x);",
        "    return 0;",
        "}"
      ].join("\n"),
      output: "x = 10",
      pitfalls: ["Using wrong format specifier (e.g., `%f` for int).", "Forgetting `\\n` in interactive outputs."]
    };
  }

  if (text.includes("scanf") || answer.includes("scanf")) {
    return {
      concept: "`scanf` reads input and stores values in variables.",
      why: "C has pass-by-value, so `scanf` needs memory addresses (`&var`) to modify variables.",
      steps: [
        "Declare variable with correct type.",
        "Use matching format specifier.",
        "Pass address using `&` for non-array variables."
      ],
      example: [
        "#include <stdio.h>",
        "int main(void) {",
        "    int n;",
        "    scanf(\"%d\", &n);",
        "    printf(\"%d\\n\", n);",
        "}"
      ].join("\n"),
      output: "Input: 42 -> Output: 42",
      pitfalls: ["Using `scanf(\"%d\", n)` without `&`.", "Using `%d` for a float variable."]
    };
  }

  if (text.includes("pointer") || answer === "*") {
    return {
      concept: "Pointer stores address; dereference (`*`) accesses value at that address.",
      why: "Pointers are core in C for arrays, function calls, dynamic memory, and performance control.",
      steps: [
        "Create normal variable.",
        "Store its address in pointer using `&`.",
        "Use `*ptr` to read/write pointed value."
      ],
      example: [
        "int a = 5;",
        "int *p = &a;",
        "printf(\"%d\\n\", *p);",
        "*p = 8;",
        "printf(\"%d\\n\", a);"
      ].join("\n"),
      output: "5\n8",
      pitfalls: ["Dereferencing uninitialized pointer.", "Using pointer after object lifetime ends."]
    };
  }

  if (text.includes("malloc") || text.includes("free") || answer.includes("free")) {
    return {
      concept: "`malloc` allocates heap memory; `free` releases it.",
      why: "Dynamic memory is needed when size is known at runtime. Not freeing memory causes leaks.",
      steps: [
        "Allocate with correct byte size (`count * sizeof(type)`).",
        "Check for NULL before using memory.",
        "Free exactly once, then set pointer to NULL."
      ],
      example: [
        "#include <stdlib.h>",
        "int *arr = malloc(5 * sizeof(int));",
        "if (!arr) return 1;",
        "arr[0] = 10;",
        "arr[1] = 20;",
        "free(arr);",
        "arr = NULL;"
      ].join("\n"),
      output: "No visible output; memory allocated and safely released.",
      pitfalls: ["Forgetting `free`.", "Double-free on same pointer.", "Using memory after free."]
    };
  }

  if (text.includes("undefined behavior") || answer.toLowerCase().includes("undefined")) {
    return {
      concept: "Undefined behavior (UB) means C standard does not define program result.",
      why: "UB can appear to work locally but fail on another compiler/optimization level.",
      steps: [
        "Identify operations that break C rules (double free, invalid access, unsequenced updates).",
        "Rewrite code to make behavior explicit and sequenced.",
        "Treat UB warnings as serious bugs."
      ],
      example: [
        "int x = 1;",
        "int y = x++ + x++;  // undefined behavior"
      ].join("\n"),
      output: "Output is unpredictable; compiler-dependent.",
      pitfalls: ["Assuming one specific output for UB code."]
    };
  }

  if (text.includes("array") || answer === "0") {
    return {
      concept: "C arrays use zero-based indexing.",
      why: "Pointer arithmetic and array indexing are linked (`a[i]` == `*(a + i)`).",
      steps: [
        "First element is index 0.",
        "Last valid index is `size - 1`.",
        "Out-of-bounds access causes UB."
      ],
      example: [
        "int a[3] = {10, 20, 30};",
        "printf(\"%d\\n\", a[0]);",
        "printf(\"%d\\n\", a[2]);"
      ].join("\n"),
      output: "10\n30",
      pitfalls: ["Using index 3 in array of size 3.", "Confusing 1-based indexing with C arrays."]
    };
  }

  if (text.includes("header") || answer.includes(".h")) {
    return {
      concept: "Header files declare functions/types/macros shared across files.",
      why: "Compiler must know function signatures before use to type-check calls.",
      steps: [
        "Include needed standard header at top.",
        "Match functions to correct headers.",
        "Use include guards for custom headers."
      ],
      example: [
        "#include <stdio.h>   // printf, scanf",
        "#include <stdlib.h>  // malloc, free"
      ].join("\n"),
      output: "Compilation succeeds with known declarations.",
      pitfalls: ["Calling library function without proper header include."]
    };
  }

  return {
    concept: String(explanationText || "Apply the rule based on C syntax and memory behavior."),
    why: "Interview MCQs usually test exact C language rules and edge cases.",
    steps: [
      "Read keyword/operator carefully.",
      "Map it to C rule.",
      "Eliminate options that violate type/memory rules."
    ],
    example: [
      "Question:",
      String(questionText || "").trim(),
      "",
      "Correct option:",
      answer,
      "",
      "Tip:",
      "Remember the C rule behind this option and apply it in similar questions."
    ].join("\n"),
    output: "Depends on question context.",
    pitfalls: ["Choosing option by guess instead of C rule."]
  };
}

function renderList(items) {
  if (!Array.isArray(items) || items.length === 0) return "";
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
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
    <p><strong>Why this matters:</strong> ${escapeHtml(learnInfo.why || "")}</p>
    <p><strong>Step-by-step:</strong></p>
    ${renderList(learnInfo.steps || [])}
    <p><strong>Example code:</strong></p>
    <pre><code>${escapeHtml(learnInfo.example || "")}</code></pre>
    <p><strong>Expected output:</strong></p>
    <pre><code>${escapeHtml(learnInfo.output || "")}</code></pre>
    <p><strong>Common mistakes:</strong></p>
    ${renderList(learnInfo.pitfalls || [])}
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

function getPassScoreForLevel(level) {
  return PASS_SCORE_BY_LEVEL[level] || 20;
}

function updateLevelMeta() {
  levelMetaEl.textContent = `${formatLevel(currentLevel)} | Question ${currentQuestion + 1}/${quizData.length}`;
}

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

  const selectedIndex = userSelections[currentQuestion];
  if (selectedIndex === null || selectedIndex === undefined) return;

  const correctIndex = q.correct;
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    if (i === correctIndex) {
      btn.style.background = "#16a34a";
      btn.style.color = "#ffffff";
    } else if (i === selectedIndex) {
      btn.style.background = "#dc2626";
      btn.style.color = "#ffffff";
    } else {
      btn.style.background = "#cbd5e1";
      btn.style.color = "#1e293b";
    }
    btn.disabled = true;
  });

  if (selectedIndex === correctIndex) {
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
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  const correctIndex = q.correct;
  if (userSelections[currentQuestion] !== null && userSelections[currentQuestion] !== undefined) return;
  userSelections[currentQuestion] = index;
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
  if (questionNavRowEl) questionNavRowEl.style.display = "none";
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
  userSelections = Array(quizData.length).fill(null);
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
  userSelections = Array(quizData.length).fill(null);

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






















