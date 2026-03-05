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

const hardCodeQuestionBank = [

  {

    question: "What is output? int a[]={2,4,6}; int *p=a; printf(\"%d\", *(p+2));",

    answers: ["2", "4", "6", "Undefined behavior"],

    correct: 2,

    explanation: "p points to a[0], so *(p+2) is a[2] which is 6."

  },

  {

    question: "What prints? int x=5; int *p=&x; *p += 3; printf(\"%d\", x);",

    answers: ["5", "3", "8", "Undefined behavior"],

    correct: 2,

    explanation: "Dereferencing p modifies x directly: x becomes 8."

  },

  {

    question: "What is safest dynamic allocation for n ints?",

    answers: ["malloc(n)", "malloc(n * sizeof(int))", "malloc(sizeof(n))", "calloc(sizeof(int), n*sizeof(int))"],

    correct: 1,

    explanation: "Allocate count * size-of-type to avoid under-allocation."

  },

  {

    question: "What prints? char s[]=\"code\"; printf(\"%zu\", sizeof(s));",

    answers: ["4", "5", "8", "Compiler dependent only"],

    correct: 1,

    explanation: "String literal includes null terminator, so array size is 5."

  },

  {

    question: "What is output? int a=10,b=20; int *p=&a; p=&b; printf(\"%d\", *p);",

    answers: ["10", "20", "Address of b", "Undefined behavior"],

    correct: 1,

    explanation: "Pointer p is reassigned to b, so *p reads 20."

  },

  {

    question: "Which declaration is pointer to function taking int and returning int?",

    answers: ["int *fp(int);", "int (*fp)(int);", "int (fp*)(int);", "int fp*(int);"],

    correct: 1,

    explanation: "Parentheses around *fp make it a function pointer."

  },

  {

    question: "What prints? int a[4]={1,2,3,4}; printf(\"%d\", *(a+1));",

    answers: ["1", "2", "3", "4"],

    correct: 1,

    explanation: "a+1 points to second element."

  },

  {

    question: "What is output? int x=3; printf(\"%d\", x<<2);",

    answers: ["6", "12", "9", "1"],

    correct: 1,

    explanation: "Left shift by 2 multiplies by 4 for this positive value: 3*4=12."

  },

  {

    question: "Which call prevents overflow for char name[10] input?",

    answers: ["scanf(\"%s\", name)", "gets(name)", "fgets(name, sizeof(name), stdin)", "input(name)"],

    correct: 2,

    explanation: "fgets limits bytes read and is safer."

  },

  {

    question: "What prints? int a=7; int *p=&a; int **pp=&p; printf(\"%d\", **pp);",

    answers: ["Address of a", "7", "0", "Undefined behavior"],

    correct: 1,

    explanation: "Double dereference reaches value of a."

  },

  {

    question: "What does this print? int a[]={1,2,3}; int *p=a; p++; printf(\"%d\", *p);",

    answers: ["1", "2", "3", "Garbage"],

    correct: 1,

    explanation: "After p++, pointer moves to a[1]."

  },

  {

    question: "What is output? int x=4; printf(\"%d\", x & 1);",

    answers: ["0", "1", "4", "Undefined behavior"],

    correct: 0,

    explanation: "Even number has least-significant bit 0."

  },

  {

    question: "What prints? int x=5; printf(\"%d\", x | 2);",

    answers: ["5", "6", "7", "10"],

    correct: 2,

    explanation: "0101 | 0010 = 0111 (7)."

  },

  {

    question: "Which is correct to free and avoid accidental reuse?",

    answers: ["free(p);", "p=NULL; free(p);", "free(p); p=NULL;", "delete p;"],

    correct: 2,

    explanation: "Free first, then set pointer to NULL."

  },

  {

    question: "What prints? int a[2][2]={{1,2},{3,4}}; printf(\"%d\", a[1][0]);",

    answers: ["1", "2", "3", "4"],

    correct: 2,

    explanation: "Row 1 col 0 is 3."

  },

  {

    question: "What is output? char s[]=\"ab\"; s[1]='z'; printf(\"%s\", s);",

    answers: ["ab", "az", "zb", "Compile error"],

    correct: 1,

    explanation: "Character array is mutable here; second char becomes z."

  },

  {

    question: "Which statement about recursion is required for correctness?",

    answers: ["Must use global variable", "Must include base case", "Must return pointer", "Must allocate heap memory"],

    correct: 1,

    explanation: "Base case is required to terminate recursive calls."

  },

  {

    question: "What prints? int x=2; x*=3+1; printf(\"%d\", x);",

    answers: ["8", "6", "5", "12"],

    correct: 0,

    explanation: "x*=expr means x = x * expr; 2*(3+1)=8."

  },

  {

    question: "Which is valid comparator return rule for qsort?",

    answers: ["Only 0 and 1", "Negative, zero, positive based on order", "Only pointer values", "Always return a-b without care"],

    correct: 1,

    explanation: "Comparator contract is sign-based ordering."

  },

  {

    question: "What prints? int x=9; int *p=&x; printf(\"%d\", sizeof(*p));",

    answers: ["Size of pointer", "Size of int", "9", "Undefined behavior"],

    correct: 1,

    explanation: "sizeof(*p) is sizeof(int)."

  },

  {

    question: "What does FILE *fp=fopen(\"a.txt\",\"w\"); do if file exists?",

    answers: ["Append content", "Read only", "Truncate and write", "Compile error"],

    correct: 2,

    explanation: "Mode w truncates existing file."

  },

  {

    question: "What prints? int a=1; int b=2; int t=a; a=b; b=t; printf(\"%d %d\", a,b);",

    answers: ["1 2", "2 1", "2 2", "1 1"],

    correct: 1,

    explanation: "Temporary variable swaps values."

  },

  {

    question: "Which is true for const int *p ?",

    answers: ["p cannot change", "*p cannot change through p", "Both cannot change", "It is invalid"],

    correct: 1,

    explanation: "Pointer can move, pointee is read-only through p."

  },

  {

    question: "What prints? int a=5; int *const p=&a; *p=9; printf(\"%d\", a);",

    answers: ["5", "9", "Compile error", "Undefined behavior"],

    correct: 1,

    explanation: "Const pointer can modify pointee, cannot change address."

  },

  {

    question: "What is output? int a[]={10,20,30,40}; printf(\"%d\", *(a+3));",

    answers: ["10", "20", "30", "40"],

    correct: 3,

    explanation: "Index 3 is fourth element: 40."

  },

  {

    question: "What prints? int x=0; if(x) printf(\"A\"); else printf(\"B\");",

    answers: ["A", "B", "AB", "Nothing"],

    correct: 1,

    explanation: "0 is false in C conditionals."

  },

  {

    question: "Which operator is used to access member via struct pointer?",

    answers: [".", "->", "&", "*."],

    correct: 1,

    explanation: "Use -> with pointer to struct."

  },

  {

    question: "What prints? int n=13; printf(\"%d\", n%5);",

    answers: ["1", "2", "3", "4"],

    correct: 2,

    explanation: "13 mod 5 equals 3."

  },

  {

    question: "What is correct include for strlen and strcmp?",

    answers: ["<stdlib.h>", "<string.h>", "<stdio.h>", "<math.h>"],

    correct: 1,

    explanation: "String utility functions are in string.h."

  },

  {

    question: "What prints? int a=1; for(int i=0;i<3;i++) a+=i; printf(\"%d\", a);",

    answers: ["3", "4", "5", "6"],

    correct: 1,

    explanation: "a = 1 + (0+1+2) = 4."

  }

];

const hardDebugQuestionBank = [

  {

    question: "Bug fix: int *p; *p = 10; What is the correct fix before dereference?",

    answers: ["Use p++ first", "Initialize p with valid address", "Cast p to int", "Mark p as const"],

    correct: 1,

    explanation: "Uninitialized pointer dereference is undefined behavior."

  },

  {

    question: "Bug fix: char s[5]; scanf(\"%s\", s); What should be used?",

    answers: ["scanf(\"%4s\", s)", "gets(s)", "scanf(\"%s\", &s)", "No change needed"],

    correct: 0,

    explanation: "Width limit prevents overflow in fixed buffer."

  },

  {

    question: "Bug fix: int *p = malloc(10); for 10 ints. What is correct?",

    answers: ["malloc(10)", "malloc(10 * sizeof(int))", "calloc(sizeof(int), 1)", "malloc(sizeof(p))"],

    correct: 1,

    explanation: "Need bytes for 10 int elements."

  },

  {

    question: "Bug fix: free(p); free(p); What should be done?",

    answers: ["Keep both frees", "Remove second free and set p=NULL", "Use realloc before second free", "Cast p to void*"],

    correct: 1,

    explanation: "Double free is undefined behavior."

  },

  {

    question: "Bug fix: int f(){ int x=5; return &x; } What is correct?",

    answers: ["Return x", "Make x register", "Use static/global or dynamic allocation", "Cast &x to int"],

    correct: 2,

    explanation: "Address of local variable becomes invalid after return."

  },

  {

    question: "Trace output: int x=1; if(x=0) printf(\"A\"); else printf(\"B\");",

    answers: ["A", "B", "AB", "Compile error"],

    correct: 1,

    explanation: "Assignment sets x=0, condition is false, so B."

  },

  {

    question: "Bug fix: while(!feof(fp)){ fgets(buf,64,fp); } Preferred approach?",

    answers: ["Use while(fgets(buf,64,fp))", "Keep as-is", "Use rewind in loop", "Use fseek each iteration"],

    correct: 0,

    explanation: "feof is set after failed read; check read call directly."

  },

  {

    question: "Trace output: int a=3; printf(\"%d\", a++ + 2);",

    answers: ["4", "5", "6", "Undefined behavior"],

    correct: 1,

    explanation: "Post-increment returns old value 3, then +2 => 5."

  },

  {

    question: "Bug fix: int n; scanf(\"%f\", &n); Correct specifier?",

    answers: ["%d", "%lf", "%c", "%u only"],

    correct: 0,

    explanation: "n is int, so use %d."

  },

  {

    question: "Trace output: int a[]={10,20,30}; printf(\"%d\", a[1]);",

    answers: ["10", "20", "30", "Undefined behavior"],

    correct: 1,

    explanation: "Second element is 20."

  },

  {

    question: "Bug fix: char *s=\"abc\"; s[0]='z'; Correct approach?",

    answers: ["Keep as-is", "Use char s[]=\"abc\" for modifiable array", "Cast to (char*)", "Use volatile"],

    correct: 1,

    explanation: "String literal storage is not modifiable."

  },

  {

    question: "Trace output: int i=0; while(i<3){ i++; } printf(\"%d\", i);",

    answers: ["2", "3", "4", "0"],

    correct: 1,

    explanation: "Loop ends with i equal to 3."

  },

  {

    question: "Bug fix: int arr[3]; arr[3]=5; What is correct?",

    answers: ["Valid index", "Use arr[2] for last element", "Use arr[-1]", "Compiler auto-expands array"],

    correct: 1,

    explanation: "Valid indices are 0..2."

  },

  {

    question: "Trace output: int x=8; printf(\"%d\", x>>1);",

    answers: ["2", "4", "8", "16"],

    correct: 1,

    explanation: "Right shift by 1 divides by 2 for this positive value."

  },

  {

    question: "Bug fix: FILE *fp=fopen(\"a.txt\",\"r\"); fprintf(fp,\"x\");",

    answers: ["No issue", "Open with \"w\" or \"a\" for writing", "Use fclose first", "Use scanf instead"],

    correct: 1,

    explanation: "Read mode does not allow write operations."

  },

  {

    question: "Trace output: int x=5; printf(\"%d\", ++x);",

    answers: ["5", "6", "7", "Undefined behavior"],

    correct: 1,

    explanation: "Pre-increment changes value before use."

  },

  {

    question: "Bug fix: int *p = malloc(5*sizeof(int)); use p without NULL check. Best fix?",

    answers: ["Ignore check", "if(!p) handle error before use", "Use volatile", "Free immediately"],

    correct: 1,

    explanation: "Always validate allocation result."

  },

  {

    question: "Trace output: char s[]=\"hi\"; printf(\"%c\", s[1]);",

    answers: ["h", "i", "\\0", "Compile error"],

    correct: 1,

    explanation: "Index 1 is character i."

  },

  {

    question: "Bug fix: strcpy(dst, src) with unknown dst size. Safer option?",

    answers: ["Use gets", "Use bounded copy and size checks", "Cast pointers to int", "Use strcat first"],

    correct: 1,

    explanation: "Unchecked copy risks overflow."

  },

  {

    question: "Trace output: int a=2,b=3; printf(\"%d\", a*b + b);",

    answers: ["5", "6", "9", "12"],

    correct: 2,

    explanation: "2*3 + 3 = 9."

  },

  {

    question: "Bug fix: int sum(){ int s; s+=5; return s; }",

    answers: ["s is auto-zeroed", "Initialize s before use", "Make s pointer", "Use register"],

    correct: 1,

    explanation: "Local variable must be initialized before reading."

  },

  {

    question: "Trace output: int x=1; switch(x){case 1: printf(\"A\"); case 2: printf(\"B\");}",

    answers: ["A", "B", "AB", "Compile error"],

    correct: 2,

    explanation: "No break after case 1, so fall-through prints AB."

  },

  {

    question: "Bug fix: scanf(\"%d\", n); where n is int variable.",

    answers: ["Correct as-is", "Use scanf(\"%d\", &n)", "Use scanf(\"%f\", &n)", "Use printf instead"],

    correct: 1,

    explanation: "scanf needs address of variable."

  },

  {

    question: "Trace output: int a=5; int *p=&a; *p=11; printf(\"%d\", a);",

    answers: ["5", "11", "Address", "Undefined behavior"],

    correct: 1,

    explanation: "Pointer write updates original variable."

  },

  {

    question: "Bug fix: recursion function misses base case. Result?",

    answers: ["Always optimized", "Infinite recursion / stack overflow risk", "Compile error", "Returns 0"],

    correct: 1,

    explanation: "Base case is required for termination."

  }

];

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

function buildGeneratedCQuestionBank(total = 420) {
  const topics = [
    "pointer lifetime", "array bounds", "integer promotion", "sequence points", "volatile access",
    "strict aliasing", "function pointers", "const correctness", "memory alignment", "bitwise masking",
    "struct padding", "union usage", "format specifiers", "scanf safety", "buffer management",
    "preprocessor macros", "header guards", "static storage", "dynamic allocation", "error handling",
    "undefined behavior", "implementation-defined behavior", "endianness assumptions", "thread visibility", "atomic access",
    "reentrancy", "recursion limits", "stack usage", "library contracts", "ownership rules"
  ];
  const lenses = [
    "audit rule", "debug check", "safety check", "standards check", "runtime check",
    "portability check", "optimization check", "code-review check", "interview check", "maintenance check",
    "boundary-case check", "security check", "performance check", "readability check"
  ];
  const result = [];
  for (let i = 0; i < total; i += 1) {
    const topic = topics[i % topics.length];
    const lens = lenses[Math.floor(i / topics.length) % lenses.length];
    result.push({
      question: `Advanced C ${lens} ${i + 1}: Which statement about ${topic} is correct?`,
      answers: [
        `For ${topic}, follow defined C rules and validate assumptions explicitly.`,
        `For ${topic}, uninitialized memory reads are always safe.`,
        `For ${topic}, undefined behavior has guaranteed identical output.`,
        `For ${topic}, bounds and type rules can be ignored if code compiles.`
      ],
      correct: 0,
      explanation: `Correct: ${topic} must follow defined C behavior and explicit validation.`
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
    const filler = generatedCQuestionBank.slice(fillerOffset).concat(generatedCQuestionBank.slice(0, fillerOffset));
    filler.forEach((q) => {
      if (selected.length < total) tryAdd(q);
    });
  }

  if (selected.length < total) {
    console.error(`Failed to build ${levelKey}: only ${selected.length}/${total} unique questions.`);
  }

  return selected.slice(0, total);
}

const generatedCQuestionBank = buildGeneratedCQuestionBank(420);
const usedQuestionKeys = new Set();

const disjointLevelPools = {
  l1: pickDisjointPool("l1", [l1QuestionPool], usedQuestionKeys, 25, 0),
  l2: pickDisjointPool("l2", [l2QuestionPool], usedQuestionKeys, 25, 40),
  l3: pickDisjointPool("l3", [l3QuestionPool], usedQuestionKeys, 25, 80),
  l4: pickDisjointPool("l4", [l4QuestionPool, hardCodeQuestionBank, hardDebugQuestionBank], usedQuestionKeys, 25, 120),
  l5: pickDisjointPool("l5", [hardCodeQuestionBank, hardDebugQuestionBank], usedQuestionKeys, 25, 160),
  l6: pickDisjointPool("l6", [hardDebugQuestionBank, advancedCQuestionBank], usedQuestionKeys, 25, 200),
  l7: pickDisjointPool("l7", [advancedCQuestionBank], usedQuestionKeys, 25, 240),
  l8: pickDisjointPool("l8", [advancedCQuestionBank], usedQuestionKeys, 25, 280),
  l9: pickDisjointPool("l9", [advancedCQuestionBank], usedQuestionKeys, 25, 320),
  l10: pickDisjointPool("l10", [advancedCQuestionBank], usedQuestionKeys, 25, 360)
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

let userSelections = [];

let wrongTopicCounts = {};

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

const QUIZ_NAME = "c_programming";

const QUIZ_PAGE = "c.html";

const QUIZ_SESSION_KEY = `graspquiz_session_${QUIZ_NAME}`;

const QUIZ_UNLOCK_KEY = `graspquiz_unlock_${QUIZ_NAME}`;

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



function persistUnlockState() {

  writeJSON(QUIZ_UNLOCK_KEY, Array.from(unlockedLevels));

}



function restoreUnlockState() {

  const saved = readJSON(QUIZ_UNLOCK_KEY);

  if (!Array.isArray(saved) || saved.length === 0) return;

  unlockedLevels.clear();

  unlockedLevels.add("l1");

  saved.forEach((level) => {

    if (LEVEL_ORDER.includes(level)) unlockedLevels.add(level);

  });

}



function mapQuestionToTopic(questionText) {

  const text = String(questionText || "").toLowerCase();

  if (text.includes("pointer")) return "Pointers";

  if (text.includes("malloc") || text.includes("free") || text.includes("heap") || text.includes("memory")) return "Memory";

  if (text.includes("string") || text.includes("strlen") || text.includes("char")) return "Strings";

  if (text.includes("array")) return "Arrays";

  if (text.includes("operator") || text.includes("++") || text.includes("switch")) return "Operators";

  if (text.includes("header") || text.includes("extern") || text.includes("static") || text.includes("typedef")) return "Code Structure";

  return "Core C";

}



function getTopicLink(topic) {

  const links = {

    Pointers: "c-cheatsheet.html#c-pointers",

    Memory: "c-cheatsheet.html#c-memory",

    Strings: "c-cheatsheet.html#c-arrays-strings",

    Arrays: "c-cheatsheet.html#c-arrays-strings",

    Operators: "c-cheatsheet.html#c-operators",

    "Code Structure": "top-50-c-interview-questions.html",

    "Core C": "c-cheatsheet.html#c-core-basics",

  };

  return links[topic] || "c-cheatsheet.html#c-core-basics";

}



function getWeakTopicRecommendations() {

  const topicPairs = Object.entries(wrongTopicCounts)

    .sort((a, b) => b[1] - a[1])

    .slice(0, 3);

  return topicPairs.map(([topic, misses]) => ({

    topic,

    misses,

    href: getTopicLink(topic),

  }));

}



function persistLastProgress() {

  writeJSON(LAST_PROGRESS_KEY, {

    quizName: "c",

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

    userSelections,

    wrongTopicCounts,

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

  if (!saved || !saved.level || !Array.isArray(saved.userSelections)) return false;

  const level = LEVEL_ORDER.includes(saved.level) ? saved.level : "l1";

  if (!unlockedLevels.has(level)) return false;

  const levelData = quizLevels[level];

  if (!levelData || !levelData.length) return false;

  currentLevel = level;

  quizData = levelData;

  score = Number(saved.score) || 0;

  currentQuestion = Math.min(Math.max(Number(saved.currentQuestion) || 0, 0), quizData.length - 1);

  userSelections = Array.from({ length: quizData.length }, (_, i) => {

    const value = saved.userSelections[i];

    return Number.isInteger(value) ? value : null;

  });

  wrongTopicCounts = saved.wrongTopicCounts && typeof saved.wrongTopicCounts === "object"

    ? saved.wrongTopicCounts

    : {};

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

    concept: String(explanationText || "Apply C rule carefully for this question."),

    why: "This question checks exact C language behavior, not approximate intuition.",

    steps: [

      "Read the exact code/token in the question.",

      "Map it to one concrete C rule.",

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



  if (text.includes("printf") || answer.includes("printf")) {

    return {

      concept: "Formatted output with `printf` depends on correct format specifier and argument type.",

      why: "Wrong format/type pairing creates wrong output and can trigger undefined behavior in some cases.",

      steps: [

        "Identify each `%` format token.",

        "Match each token with argument type and order.",

        "Then evaluate final printed value."

      ],

      example: "int x = 10;\nprintf(\"x=%d\\n\", x);",

      output: "x=10",

      pitfalls: ["Using `%f` for int.", "Argument order mismatch."]

    };

  }



  if (text.includes("scanf") || answer.includes("scanf")) {

    return {

      concept: "`scanf` writes into memory locations, so addresses (like `&n`) are required for scalars.",

      why: "Input questions usually fail because of missing address, wrong specifier, or missing width limit.",

      steps: [

        "Verify variable type.",

        "Verify format specifier.",

        "Verify address operator for non-array scalars."

      ],

      example: "int n;\nscanf(\"%d\", &n);",

      output: "Input integer is stored in n.",

      pitfalls: ["`scanf(\"%d\", n)` missing `&`.", "Unbounded `%s` into small buffer."]

    };

  }



  if (text.includes("pointer") || answer === "*" || text.includes("->")) {

    return {

      concept: "Pointer questions test address vs value and operator precedence (`*`, `&`, `->`, pointer arithmetic).",

      why: "Most wrong answers come from mixing pointer value with pointed data.",

      steps: [

        "Track what each pointer points to.",

        "Apply increment/dereference precedence carefully.",

        "Read final value from the pointed object."

      ],

      example: "int a = 5; int *p = &a; *p = 9; printf(\"%d\", a);",

      output: "9",

      pitfalls: ["Dereferencing uninitialized pointer.", "Confusing `*p++` with `(*p)++`."]

    };

  }



  if (text.includes("malloc") || text.includes("calloc") || text.includes("free") || text.includes("realloc")) {

    return {

      concept: "Dynamic memory correctness depends on size calculation, lifetime, and one-time release.",

      why: "Heap bugs are interview-critical because they cause crashes, leaks, and UB.",

      steps: [

        "Allocate `count * sizeof(type)` bytes.",

        "Check allocation result for NULL.",

        "Free once and invalidate pointer (`p = NULL`) when done."

      ],

      example: "int *a = malloc(10 * sizeof(int));\nif (!a) return 1;\nfree(a); a = NULL;",

      output: "Safe allocation lifecycle.",

      pitfalls: ["Double free.", "Use-after-free.", "Under-allocation."]

    };

  }



  if (text.includes("undefined behavior") || answer.toLowerCase().includes("undefined") || text.includes("x++ + ++x")) {

    return {

      concept: "Undefined behavior means the C standard gives no guaranteed result.",

      why: "Compiler optimization can produce different outcomes across systems.",

      steps: [

        "Spot unsequenced updates or invalid memory operations.",

        "Mark expression as UB instead of trying to compute one value.",

        "Rewrite to sequenced and defined form."

      ],

      example: "int x = 1;\nint y = x++ + ++x; // UB",

      output: "No reliable output.",

      pitfalls: ["Assuming one fixed numeric result for UB expression."]

    };

  }



  if (text.includes("array") || text.includes("index") || text.includes("a[")) {

    return {

      concept: "Array indexing is zero-based and equivalent to pointer offset.",

      why: "Off-by-one mistakes are common and often become UB.",

      steps: [

        "Find array size.",

        "Check valid index range `0..size-1`.",

        "Resolve target element value."

      ],

      example: "int a[3] = {10,20,30};\nprintf(\"%d\", a[2]);",

      output: "30",

      pitfalls: ["Using index equal to size.", "Assuming 1-based indexing."]

    };

  }



  if (text.includes("header") || answer.includes(".h")) {

    return {

      concept: "Header selection maps API to the correct standard declaration file.",

      why: "Wrong header means missing declarations and incorrect assumptions.",

      steps: [

        "Identify the function used.",

        "Map function to standard header.",

        "Confirm include before use."

      ],

      example: "#include <stdio.h>   // printf, scanf\n#include <string.h>  // strlen, strcmp",

      output: "Compiler has correct declarations.",

      pitfalls: ["Using wrong header due to similar function names."]

    };

  }



  if (text.includes("qsort") || text.includes("comparator") || text.includes("function pointer")) {

    return {

      concept: "Comparator/function-pointer questions focus on signature and return contract.",

      why: "Correct ordering requires negative/zero/positive semantics.",

      steps: [

        "Verify function pointer signature.",

        "Verify comparator returns sign by ordering.",

        "Avoid overflow-prone subtraction when possible."

      ],

      example: "int cmp(const void *a, const void *b) { return (*(const int*)a > *(const int*)b) - (*(const int*)a < *(const int*)b); }",

      output: "Comparator contract preserved.",

      pitfalls: ["Returning only boolean 0/1.", "Wrong cast type in comparator."]

    };

  }



  return base;

}



function buildOptionElimination(questionData, correctIndex) {

  const questionText = String(questionData.question || "").toLowerCase();

  const explanationText = String(questionData.explanation || "");

  return questionData.answers.map((optionText, idx) => {

    const option = String(optionText || "");

    const optionLc = option.toLowerCase();

    const isCorrect = idx === correctIndex;



    if (isCorrect) {

      return {

        option,

        verdict: "Correct",

        reason: explanationText || "This option matches the exact C rule required by the question."

      };

    }



    if (questionText.includes("undefined behavior") || questionText.includes("x++ + ++x")) {

      return {

        option,

        verdict: "Not correct",

        reason: optionLc.includes("undefined")

          ? "If this were selected, it would indicate UB; here this option is not the keyed answer."

          : "This question is about UB; non-UB choices do not match the rule being tested."

      };

    }



    if (questionText.includes("header") || questionText.includes(".h")) {

      return { option, verdict: "Not correct", reason: "This header does not declare the function targeted in the question." };

    }



    if (questionText.includes("specifier") || optionLc.includes("%")) {

      return { option, verdict: "Not correct", reason: "Format specifier does not match the variable type expected in this context." };

    }



    if (questionText.includes("pointer") || questionText.includes("address") || questionText.includes("->")) {

      return { option, verdict: "Not correct", reason: "Pointer/address semantics here do not satisfy the expression in the question." };

    }



    if (questionText.includes("array") || questionText.includes("index") || questionText.includes("a[")) {

      return { option, verdict: "Not correct", reason: "Index/offset resolution from the array expression does not lead to this value." };

    }



    if (questionText.includes("malloc") || questionText.includes("free") || questionText.includes("realloc")) {

      return { option, verdict: "Not correct", reason: "This choice breaks safe memory lifecycle rule for allocation/release." };

    }



    if (questionText.includes("bitwise") || questionText.includes("<<") || questionText.includes(">>") || questionText.includes("|") || questionText.includes("&")) {

      return { option, verdict: "Not correct", reason: "Bit-level evaluation does not produce this result." };

    }



    return {

      option,

      verdict: "Not correct",

      reason: "This option does not satisfy the precise C rule applied in this question."

    };

  });

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

  const optionElimination = buildOptionElimination(questionData, correctIndex);



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

    <p><strong>Option-by-option elimination:</strong></p>

    <ul>

      ${optionElimination.map((item, idx) => `<li><strong>Option ${idx + 1} (${escapeHtml(item.option)}):</strong> ${escapeHtml(item.verdict)}. ${escapeHtml(item.reason)}</li>`).join("")}

    </ul>

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

  persistUnlockState();

  return nextLevel;

}



function getConceptHint(questionText, explanationText) {

  const text = `${String(questionText || "")} ${String(explanationText || "")}`.toLowerCase();

  if (text.includes("pointer")) return "Pointers: address (`&`) vs value (`*`) and pointer arithmetic by element size.";

  if (text.includes("malloc") || text.includes("calloc") || text.includes("free") || text.includes("heap")) return "Memory: allocate correct size, check NULL, free once, avoid use-after-free.";

  if (text.includes("array") || text.includes("index")) return "Arrays: C is zero-indexed and bounds mistakes cause undefined behavior.";

  if (text.includes("string") || text.includes("fgets") || text.includes("scanf")) return "Input/strings: protect buffer size and use matching format specifiers.";

  if (text.includes("undefined behavior") || text.includes("unsequenced")) return "UB: result is not defined by C standard and can vary by compiler/optimization.";

  if (text.includes("qsort") || text.includes("function pointer")) return "Function pointers: ensure signature and comparator contract are correct.";

  if (text.includes("switch") || text.includes("break")) return "Control flow: check fall-through and exact loop/switch behavior.";

  if (text.includes("bitwise") || text.includes("<<") || text.includes(">>") || text.includes("|") || text.includes("&")) return "Bitwise: reason in binary and verify operator intent.";

  return "Core C rule: map syntax to lifetime, type, and memory behavior before selecting.";

}



function renderAnswerFeedback(questionData, selectedIndex, correctIndex) {

  if (!explanationEl || !questionData) return;

  const isCorrect = selectedIndex === correctIndex;

  const selectedAnswer = questionData.answers[selectedIndex] || "";

  const correctAnswer = questionData.answers[correctIndex] || "";

  const conceptHint = getConceptHint(questionData.question, questionData.explanation);

  explanationEl.className = isCorrect ? "feedback-box feedback-correct" : "feedback-box feedback-wrong";

  explanationEl.innerHTML = `

    <div class="feedback-title">${isCorrect ? "Right" : "Wrong"}</div>

    <p><strong>Correct Answer:</strong> ${escapeHtml(correctAnswer)}</p>

    ${isCorrect

      ? `<p><strong>Why it is correct:</strong> ${escapeHtml(questionData.explanation || "")}</p>`

      : `<p><strong>Your Answer:</strong> ${escapeHtml(selectedAnswer)}</p>

         <p><strong>Why your choice is not correct:</strong> It does not match the exact C rule tested in this question.</p>

         <p><strong>Why correct answer works:</strong> ${escapeHtml(questionData.explanation || "")}</p>`}

    <p><strong>Rule to remember:</strong> ${escapeHtml(conceptHint)}</p>

    <div class="feedback-actions">

      <button type="button" class="learn-more-btn">Learn More</button>

    </div>

  `;

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

  renderAnswerFeedback(q, selectedIndex, correctIndex);

  attachLearnMore(q, correctIndex);

  nextBtn.style.display = "inline-block";

  persistSession();

}



function selectAnswer(index) {

  const q = quizData[currentQuestion];

  const correctIndex = q.correct;

  if (userSelections[currentQuestion] !== null && userSelections[currentQuestion] !== undefined) return;

  userSelections[currentQuestion] = index;

  if (index === correctIndex) score++;

  else {

    const topic = mapQuestionToTopic(q.question);

    wrongTopicCounts[topic] = (wrongTopicCounts[topic] || 0) + 1;

  }



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

  renderAnswerFeedback(q, index, correctIndex);

  attachLearnMore(q, correctIndex);

nextBtn.style.display = "inline-block";

  snapToQuizTop();

  persistSession();



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

  const unlockedText = unlockedLevel ? `<p>${formatLevel(unlockedLevel)} unlocked.</p>` : "";

  const token = getAuthToken();

  const saveStatusText = token

    ? "Saving your quiz record..."

    : "No login needed. Progress is saved in this browser.";



  resultEl.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3>

                        <p>${ruleText}</p>

                        ${unlockedText}


                        <p id="saveStatus">${saveStatusText}</p>

                        ${nextLevelBtn}

                        <button type="button" onclick="restartQuiz()">Try Again</button>

                        <button type="button" onclick="shareScore()">Share Score</button>`;

  clearSession();



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

  currentQuestion = 0;

  score = 0;

  userSelections = Array(quizData.length).fill(null);

  wrongTopicCounts = {};

  clearSession();

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

  if (!unlockedLevels.has(level)) return;

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

  wrongTopicCounts = {};



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

    if (currentQuestion < quizData.length) {

      persistSession();

      loadQuestion();

    }

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



  levelButtons.forEach((btn) => {

    btn.addEventListener("click", () => setLevel(btn.dataset.level));

  });



  restoreUnlockState();

  setActiveLevelButton();

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













































