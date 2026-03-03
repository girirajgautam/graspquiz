(function () {
  let faqInitialized = false;

  function initFaq() {
    if (faqInitialized) return;
    const primaryGrid = document.getElementById("quickRevisionFaq");
    const secondaryGrid = document.getElementById("cFaqGrid");
    const targets = [primaryGrid, secondaryGrid].filter(Boolean);
    if (!targets.length) return;

  const faqData = [
    { q: "What is the difference between declaration and definition in C?", a: "A declaration tells the compiler a name and type exist (for example, `extern int x;`). A definition allocates storage or provides full body (for example, `int x = 10;` or a full function body). You can declare many times, but normally define once." },
    { q: "What are storage classes in C?", a: "Storage classes control scope, lifetime, and linkage. Main ones: `auto` (default local), `register` (hint for CPU register), `static` (lifetime for full program, linkage depends on scope), and `extern` (refers to definition elsewhere)." },
    { q: "What is the difference between stack and heap memory?", a: "Stack is automatic memory (function calls, local variables), very fast, auto-freed on return. Heap is dynamic memory (`malloc/calloc/realloc`), slower but flexible size/lifetime; programmer must `free` it." },
    { q: "What is a pointer and why is it used?", a: "A pointer stores an address. It is used for dynamic memory, passing data efficiently to functions, arrays/strings handling, and low-level system work." },
    { q: "What is pointer arithmetic?", a: "Pointer arithmetic moves by element size, not bytes manually. If `int *p`, then `p+1` moves by `sizeof(int)` bytes to next integer element." },
    { q: "What is a null pointer?", a: "A null pointer points to no valid object/function. Use `NULL` to initialize pointers safely and check before dereference." },
    { q: "What is a dangling pointer?", a: "A dangling pointer points to memory that is no longer valid (freed memory or local variable after function returns). Dereferencing it causes undefined behavior." },
    { q: "What is the difference between `const int *p` and `int *const p`?", a: "`const int *p` means data is read-only through `p` (pointer can move). `int *const p` means pointer address is fixed, but pointed data can change." },
    { q: "What is `void*` in C?", a: "`void*` is a generic pointer type that can hold address of any data type. You cannot dereference it directly; cast to correct type first." },
    { q: "What is the use of `sizeof` operator?", a: "`sizeof` returns memory size in bytes of a type/object at compile-time in most cases. Useful for safe allocation (`malloc(n * sizeof(type))`) and portability." },
    { q: "What are arrays in C?", a: "Array is contiguous fixed-size collection of same-type elements. Access is zero-based and very fast (`O(1)` by index)." },
    { q: "Difference between array and pointer?", a: "Array name represents a fixed memory block; pointer is a variable storing address and can be reassigned. `sizeof(array)` gives total bytes, `sizeof(pointer)` gives pointer size." },
    { q: "How are strings represented in C?", a: "Strings are char arrays terminated by null character `\\0`. Example: `\"abc\"` is stored as `'a','b','c','\\0'`." },
    { q: "What is a buffer overflow?", a: "Writing past allocated buffer bounds. It can corrupt memory, crash program, or create security vulnerabilities. Prevent via bounded functions and size checks." },
    { q: "What is the use of `fgets` vs `gets`?", a: "`gets` is unsafe (removed from C standard library) because it cannot limit input size. `fgets` reads at most `n-1` chars and is safer." },
    { q: "What are structures in C?", a: "`struct` groups multiple fields of possibly different types under one name, useful for modeling records (for example, student, employee)." },
    { q: "What is `typedef` and when to use it?", a: "`typedef` creates type alias for readability/maintainability. Common for struct names, function pointers, and complex declarations." },
    { q: "Difference between `struct` and `union`?", a: "Struct allocates separate memory for each member (size roughly sum + padding). Union shares same memory for all members (size of largest member)." },
    { q: "What are enums in C?", a: "`enum` defines named integer constants, improving readability for finite choices (states, modes, days)." },
    { q: "What is recursion?", a: "Recursion is a function calling itself to solve smaller subproblems. Needs a stop condition and progress toward it." },
    { q: "What is the base case in recursion?", a: "Base case is the terminating condition where recursive calls stop. Without it, recursion continues until stack overflow." },
    { q: "Difference between call by value and call by reference style using pointers?", a: "C is call by value only. To modify caller variable, pass its address (pointer) and update through `*ptr` (reference-like behavior)." },
    { q: "What are function pointers?", a: "Function pointer stores address of a function. Used for callbacks, strategy selection, dispatch tables, and APIs like `qsort` comparator." },
    { q: "What is a header file?", a: "Header (`.h`) contains declarations/macros/types shared across source files. Include headers so compiler knows function signatures before use." },
    { q: "What are include guards?", a: "Macros that prevent multiple inclusion of same header (`#ifndef/#define/#endif`), avoiding redefinition errors." },
    { q: "What are macros in C?", a: "Preprocessor text substitutions using `#define`. Powerful but can be risky due to no type checking and multiple evaluation side effects." },
    { q: "What is conditional compilation?", a: "Using preprocessor directives (`#if`, `#ifdef`, `#ifndef`) to include/exclude code based on flags/platform/build mode." },
    { q: "What is the `volatile` keyword?", a: "`volatile` tells compiler variable may change unexpectedly (hardware register, ISR, shared memory). Compiler must not optimize away accesses." },
    { q: "What is `static` keyword at local scope?", a: "Local static variable keeps value between function calls (lifetime: whole program), but scope remains inside that function/block." },
    { q: "What is `static` keyword at file scope?", a: "File-scope `static` gives internal linkage: symbol visible only in that source file, not across translation units." },
    { q: "What is `extern` keyword?", a: "`extern` declares a global variable/function defined in another file, enabling cross-file access without redefining." },
    { q: "What is dynamic memory allocation?", a: "Allocating memory at runtime from heap (`malloc/calloc/realloc`) when size/lifetime is not known at compile time." },
    { q: "Difference between `malloc`, `calloc`, and `realloc`?", a: "`malloc(n)` allocates n bytes (uninitialized). `calloc(count,size)` allocates and zero-initializes. `realloc(ptr,newSize)` resizes existing block (may move memory)." },
    { q: "Why should `free` be called?", a: "To release heap memory when no longer needed. Without `free`, memory leaks accumulate and can exhaust process memory." },
    { q: "What happens on double free?", a: "Calling `free` twice on same pointer causes undefined behavior: crash, heap corruption, or security issues." },
    { q: "What is undefined behavior in C?", a: "Operations where standard gives no requirements (for example, out-of-bounds access, unsequenced modifications). Program may do anything." },
    { q: "What is implementation-defined behavior?", a: "Behavior where standard allows compiler/platform choice, but choice must be documented (for example, `char` signedness)." },
    { q: "What is sequence point / unsequenced modification issue?", a: "If a scalar is modified multiple times without sequencing (like `x++ + ++x`), result is undefined behavior." },
    { q: "What is strict aliasing?", a: "Compiler optimization rule about accessing object through compatible type. Violating it can produce incorrect optimized code." },
    { q: "What are file handling functions in C?", a: "`fopen`, `fclose`, `fread`, `fwrite`, `fprintf`, `fscanf`, `fgets`, `fputs`, `fseek`, `ftell`, `rewind`, `feof`, `ferror`." },
    { q: "Difference between text mode and binary mode file operations?", a: "Text mode may translate newlines/end markers on some systems. Binary mode reads/writes raw bytes exactly as-is." },
    { q: "What is `EOF`?", a: "`EOF` is special negative integer returned by input functions to indicate end-of-file or read failure (check `ferror/feof` for reason)." },
    { q: "How does `qsort` comparator work?", a: "Comparator receives two `const void*` items. Return negative if first < second, zero if equal, positive if first > second." },
    { q: "What is endianness?", a: "Byte order in memory for multi-byte values. Little-endian stores least-significant byte first; big-endian stores most-significant first." },
    { q: "What is bitwise operation and where used?", a: "Bitwise ops (`& | ^ ~ << >>`) manipulate bits directly. Used in flags, masks, embedded systems, performance-critical low-level logic." },
    { q: "Difference between `++i` and `i++`?", a: "Both increment by 1. Prefix returns incremented value, postfix returns old value then increments." },
    { q: "How does `switch` statement work?", a: "Evaluates expression once, jumps to matching `case` label, executes until `break` or end. `default` runs when no case matches." },
    { q: "What is the role of `main` return value?", a: "Exit status to operating system. `0` usually means success; non-zero means failure/error code." },
    { q: "How to avoid memory leaks in C programs?", a: "Match every successful allocation with one `free`, free on all control paths, set pointer to NULL after free, and use tools like Valgrind/ASan." },
    { q: "What are best practices for writing interview-ready C code?", a: "Write clear logic, meaningful names, input validation, boundary checks, correct memory handling, avoid UB, and explain time/space complexity." }
  ];

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function getExampleForQuestion(question) {
      const q = question.toLowerCase();
      if (q.includes("declaration and definition")) {
        return "extern int x;   // declaration\nint x = 10;     // definition";
      }
      if (q.includes("stack and heap")) {
        return "int a = 5;                 // stack\nint *p = malloc(sizeof(int)); // heap";
      }
      if (q.includes("pointer arithmetic")) {
        return "int arr[3] = {10,20,30};\nint *p = arr;\nprintf(\"%d\", *(p + 1)); // 20";
      }
      if (q.includes("const int *p") || q.includes("int *const p")) {
        return "const int *p; // data const\nint *const q = &x; // pointer const";
      }
      if (q.includes("void*")) {
        return "void *vp = &x;\nprintf(\"%d\", *(int*)vp);";
      }
      if (q.includes("sizeof")) {
        return "size_t n = sizeof(int);\nprintf(\"%zu\", n);";
      }
      if (q.includes("fgets") || q.includes("gets")) {
        return "char s[16];\nfgets(s, sizeof(s), stdin); // safe bounded input";
      }
      if (q.includes("malloc") || q.includes("calloc") || q.includes("realloc")) {
        return "int *a = malloc(5*sizeof(int));\na = realloc(a, 10*sizeof(int));\nfree(a);";
      }
      if (q.includes("qsort")) {
        return "int cmp(const void *a, const void *b) {\n  return (*(int*)a - *(int*)b);\n}";
      }
      if (q.includes("++i") || q.includes("i++")) {
        return "int i=5;\nprintf(\"%d\", ++i); // 6 (returns new)\nprintf(\"%d\", i++); // 6 (returns old)";
      }
      if (q.includes("switch")) {
        return "switch (x) {\n  case 1: puts(\"one\"); break;\n  default: puts(\"other\");\n}";
      }
      if (q.includes("memory leaks")) {
        return "int *p = malloc(sizeof *p);\nif (!p) return;\n/* use p */\nfree(p); p = NULL;";
      }
      return "/* concept-specific C example */\n/* apply this rule in code review and debugging */";
    }

    function getInterviewTip(question) {
      const q = question.toLowerCase();
      if (q.includes("undefined behavior") || q.includes("sequence point")) {
        return "In interviews, mention that UB can appear correct in one compiler and fail in another.";
      }
      if (q.includes("pointer") || q.includes("heap") || q.includes("malloc")) {
        return "Always talk about lifetime, ownership, and bounds when discussing memory questions.";
      }
      if (q.includes("header") || q.includes("extern") || q.includes("static")) {
        return "Explain both scope and linkage; interviewers care about multi-file behavior.";
      }
      if (q.includes("qsort") || q.includes("function pointers")) {
        return "State function signature clearly and what return values mean.";
      }
      return "Give one clear definition, one practical use-case, and one common mistake.";
    }

    function buildEnhancedAnswerHTML(item) {
      const shortAnswer = item.a;
      const deepExplanation = `${item.a} In practical C projects, this concept affects correctness, performance, and safety. Good answers should include behavior, edge cases, and how to avoid common bugs.`;
      const codeExample = getExampleForQuestion(item.q);
      const tip = getInterviewTip(item.q);

      return `
        <div class="faq-block">
          <div class="faq-label">Short Answer</div>
          <p>${escapeHtml(shortAnswer)}</p>
        </div>
        <div class="faq-block">
          <div class="faq-label">Deep Explanation</div>
          <p>${escapeHtml(deepExplanation)}</p>
        </div>
        <div class="faq-block">
          <div class="faq-label">Code Example</div>
          <pre><code>${escapeHtml(codeExample)}</code></pre>
        </div>
        <div class="faq-block">
          <div class="faq-label">Interview Tip</div>
          <p>${escapeHtml(tip)}</p>
        </div>
      `;
    }

    function renderToGrid(grid) {
      faqData.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "faq-card";

        const q = document.createElement("div");
        q.className = "faq-question";
        q.textContent = `${index + 1}. ${item.q}`;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "faq-toggle";
        btn.textContent = "Show";
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("data-faq-index", String(index));

        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.setAttribute("data-faq-answer", String(index));
        answer.innerHTML = buildEnhancedAnswerHTML(item);

        btn.addEventListener("click", () => {
          const isVisible = answer.classList.toggle("visible");
          btn.setAttribute("aria-expanded", String(isVisible));
          btn.textContent = isVisible ? "Hide" : "Show";
        });

        card.appendChild(q);
        card.appendChild(btn);
        card.appendChild(answer);
        grid.appendChild(card);
      });
    }

    targets.forEach((grid) => {
      grid.innerHTML = "";
      renderToGrid(grid);
    });

    faqInitialized = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFaq, { once: true });
  } else {
    initFaq();
  }
  window.addEventListener("load", initFaq, { once: true });
  setTimeout(initFaq, 0);
  setTimeout(initFaq, 400);
})();
