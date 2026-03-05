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



  { question: "What does const mean?", answers: ["Variable is dynamic", "Value cannot be modified through that name", "Type is pointer", "Variable is global"], correct: 1, explanation: "const makes data read-only via that identifier." },
  { question: "Which object is used for standard input in C++?", answers: ["cout", "cerr", "cin", "clog"], correct: 2, explanation: "cin reads input from standard input stream." },
  { question: "Which symbol ends most C++ statements?", answers: [":", ";", ",", "."], correct: 1, explanation: "Most C++ statements are terminated by semicolon." },
  { question: "Which data type stores a single character?", answers: ["string", "char", "text", "byte"], correct: 1, explanation: "char stores one character value." },
  { question: "Which header is commonly needed for std::string?", answers: ["<string>", "<cstring>", "<str>", "<text>"], correct: 0, explanation: "std::string is defined in <string>." },
  { question: "What does ++i do?", answers: ["Decrements i", "Increments i by 2", "Increments i by 1", "Resets i"], correct: 2, explanation: "++i increases i by one." },
  { question: "Which operator compares equality?", answers: ["=", "==", "!=", ":"], correct: 1, explanation: "== checks whether two values are equal." },
  { question: "Which keyword declares a function that returns no value?", answers: ["none", "null", "void", "empty"], correct: 2, explanation: "void return type means no return value." },
  { question: "Which loop executes body at least once?", answers: ["while", "for", "do-while", "range-for"], correct: 2, explanation: "do-while checks condition after first execution." },
  { question: "How do you access first element of vector v?", answers: ["v(0)", "v[0]", "v{0}", "v<-0"], correct: 1, explanation: "Bracket indexing uses v[0] for first element." },
  { question: "Which function commonly gets vector size?", answers: ["length()", "count()", "size()", "capacity()"], correct: 2, explanation: "size() returns number of stored elements." }



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



  { question: "What is difference between pass-by-value and pass-by-reference?", answers: ["No difference", "Value copies data, reference aliases original", "Reference always const", "Value is faster always"], correct: 1, explanation: "Reference avoids copy and can modify original (unless const)." },
  { question: "What is constructor overloading?", answers: ["One constructor only", "Multiple constructors with different parameters", "Constructor without class", "Runtime constructor swap"], correct: 1, explanation: "Classes can have multiple constructors with different signatures." },
  { question: "Which access specifier hides members from outside class?", answers: ["public", "protected", "private", "global"], correct: 2, explanation: "private members are inaccessible directly from outside class." },
  { question: "What does static member function not have?", answers: ["Return type", "Class scope", "this pointer", "Arguments"], correct: 2, explanation: "Static member functions are not tied to object instance." },
  { question: "What is method overriding?", answers: ["Same name in same class", "Derived class provides new implementation of base virtual method", "Calling base method directly", "Template replacement"], correct: 1, explanation: "Overriding changes polymorphic behavior in derived classes." },
  { question: "What does friend keyword allow?", answers: ["Inheritance", "Direct access to private/protected members of another class/function", "Automatic inline", "Automatic constructor"], correct: 1, explanation: "friend grants specific access privileges." },
  { question: "Which form declares pure virtual function?", answers: ["virtual f();", "virtual f() = 0;", "pure virtual f();", "override f() = 0;"], correct: 1, explanation: "= 0 marks a virtual function as pure." },
  { question: "What is object slicing?", answers: ["Object deletion", "Losing derived part when copied as base by value", "Pointer aliasing", "Memory leak"], correct: 1, explanation: "Copying derived to base value removes derived-specific state." },
  { question: "Which operator is used to access class scope members like static vars?", answers: [".", "->", "::", ":"], correct: 2, explanation: "Scope resolution operator is ::." },
  { question: "Why use initializer list in constructor?", answers: ["To avoid class creation", "To initialize members directly before constructor body", "To allocate heap memory only", "To call destructor"], correct: 1, explanation: "Initializer lists are efficient and required for some members." },
  { question: "What is composition in OOP?", answers: ["Class inherits all classes", "Class contains objects of other classes", "Class deletes base class", "Class with only static methods"], correct: 1, explanation: "Composition models 'has-a' relationship." }



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



  { question: "What is undefined behavior in C++?", answers: ["Guaranteed exception", "Behavior not defined by language standard", "Compiler warning only", "Same as runtime error"], correct: 1, explanation: "UB allows any result; avoid by strict correctness." },
  { question: "What is rvalue reference syntax?", answers: ["T&", "T&&", "T*", "T::"], correct: 1, explanation: "T&& denotes rvalue reference type." },
  { question: "Which special member is best for transferring ownership efficiently?", answers: ["copy constructor", "move constructor", "default constructor", "destructor"], correct: 1, explanation: "Move constructor transfers resources from temporary/rvalue objects." },
  { question: "What does std::forward preserve?", answers: ["Type size", "Value category (lvalue/rvalue)", "Namespace scope", "Thread affinity"], correct: 1, explanation: "std::forward preserves forwarding reference value category." },
  { question: "Which keyword can force compile-time constant expression where possible?", answers: ["static", "constexpr", "virtual", "mutable"], correct: 1, explanation: "constexpr enables compile-time evaluation in valid contexts." },
  { question: "What is a key property of std::unordered_map?", answers: ["Sorted keys", "Average constant-time lookup", "Index-based access", "Tree traversal"], correct: 1, explanation: "unordered_map is hash-table based with average O(1) lookup." },
  { question: "When should dynamic_cast be used?", answers: ["Any cast", "Safe downcast with runtime type checking", "Converting int to float", "Const removal"], correct: 1, explanation: "dynamic_cast performs checked conversions in polymorphic hierarchies." },
  { question: "What does noexcept on move operations help with in containers?", answers: ["Disables copies always", "Allows safer move-based reallocation strategies", "Forces stack allocation", "Removes destructor"], correct: 1, explanation: "Containers prefer noexcept moves to maintain strong guarantees." },
  { question: "Which problem does RAII solve?", answers: ["Compile errors", "Automatic resource release tied to object lifetime", "Network latency", "Template deduction"], correct: 1, explanation: "RAII ensures cleanup via destructors at scope end." },
  { question: "What does ODR stand for?", answers: ["Object Dispatch Rule", "One Definition Rule", "Ordered Data Rule", "Output Definition Rule"], correct: 1, explanation: "ODR requires consistent single definitions across program." },
  { question: "What is a constexpr if used for?", answers: ["Runtime branching", "Compile-time branch selection", "Thread synchronization", "Exception handling"], correct: 1, explanation: "if constexpr discards non-selected branches at compile time." }



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



  { question: "Why prefer span/string_view in APIs?", answers: ["They own memory", "Non-owning views reduce copies and improve flexibility", "They are faster than all types always", "Required by compiler"], correct: 1, explanation: "Views express read-only/non-owning ranges cleanly." },
  { question: "What is the key danger of double delete?", answers: ["Compile-time optimization", "Undefined behavior and potential heap corruption", "Automatic recovery", "Stack overflow only"], correct: 1, explanation: "Deleting same memory twice is undefined and dangerous." },
  { question: "Which rule addresses resource-owning classes in modern C++ design?", answers: ["Rule of Two", "Rule of Zero/Three/Five guidance", "Rule of Ten", "Rule of Header"], correct: 1, explanation: "Resource management drives copy/move/destructor strategy." },
  { question: "What is a common concurrency bug when locking two mutexes separately in different orders?", answers: ["Starvation-free operation", "Deadlock", "Guaranteed fairness", "Compiler error"], correct: 1, explanation: "Inconsistent lock ordering can deadlock threads." },
  { question: "Why is returning pointer/reference to local object invalid?", answers: ["Local object lifetime ends at function return", "Locals are heap allocated", "References auto-null", "Compiler converts to static"], correct: 0, explanation: "Local storage is destroyed on return, leaving dangling reference/pointer." },
  { question: "Which memory order is strongest for atomics?", answers: ["memory_order_relaxed", "memory_order_release", "memory_order_acquire", "memory_order_seq_cst"], correct: 3, explanation: "seq_cst provides strongest ordering guarantees." },
  { question: "What issue can occur from violating strict aliasing assumptions?", answers: ["Guaranteed speed-up", "Incorrect optimized behavior", "More precise RTTI", "Automatic locks"], correct: 1, explanation: "Compiler optimizations may miscompile code that breaks aliasing rules." },
  { question: "Why use weak_ptr with shared_ptr graphs?", answers: ["To speed vector sorting", "To break ownership cycles", "To own resources strongly", "To replace all references"], correct: 1, explanation: "weak_ptr prevents cyclic shared ownership leaks." },
  { question: "What does ABI compatibility primarily affect?", answers: ["Source code style", "Binary linking/runtime interoperability", "Algorithm complexity", "Unit test count"], correct: 1, explanation: "ABI mismatch can break binaries even with compatible source." },
  { question: "What is a challenge with capturing this in async work?", answers: ["Cannot access members", "Object may be destroyed before task runs", "this becomes const", "Capture always deep-copies object"], correct: 1, explanation: "Object lifetime must outlive async callback usage." },
  { question: "What is pimpl idiom mainly used for?", answers: ["Faster runtime math", "Reduce compile dependencies and hide implementation", "Template specialization only", "Automatic lock-free behavior"], correct: 1, explanation: "pimpl improves encapsulation and build isolation." }



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



const l5QuestionPool = [
  { question: "Which cast removes const/volatile qualifiers in C++?", answers: ["static_cast", "const_cast", "dynamic_cast", "reinterpret_cast"], correct: 1, explanation: "const_cast is used to add/remove const or volatile qualifiers." },
  { question: "What does std::unique_ptr guarantee?", answers: ["Reference counting ownership", "Unique ownership of one resource", "Garbage collection", "Manual free only"], correct: 1, explanation: "unique_ptr enforces single ownership and auto cleanup." },
  { question: "Which function is called when object leaves scope?", answers: ["constructor", "allocator", "destructor", "initializer"], correct: 2, explanation: "Destructor runs automatically at end of object lifetime." },
  { question: "What is the main use of enum class?", answers: ["Implicit int conversion by default", "Scoped and strongly typed enums", "Runtime reflection", "Automatic serialization"], correct: 1, explanation: "enum class avoids polluting scope and unsafe implicit conversions." },
  { question: "Which tool helps avoid copying in range loops?", answers: ["for (auto x : v)", "for (auto& x : v)", "for (int x = 0; ...)", "for each (x in v)"], correct: 1, explanation: "auto& iterates by reference and avoids copying each element." },
  { question: "What does std::optional<T> represent?", answers: ["Always a valid T", "A value that may or may not be present", "A pointer to T only", "A dynamic array of T"], correct: 1, explanation: "optional models possibly-missing values without sentinel hacks." },
  { question: "Which header commonly provides std::thread?", answers: ["<future>", "<thread>", "<atomic>", "<mutex>"], correct: 1, explanation: "std::thread is declared in <thread>." },
  { question: "What is the purpose of std::lock_guard?", answers: ["Delay lock until end of program", "RAII lock management for mutex", "Create recursive mutex", "Check deadlocks"], correct: 1, explanation: "lock_guard locks on creation and unlocks on scope exit." },
  { question: "Which statement about std::move is correct?", answers: ["It always moves data immediately", "It casts to rvalue reference to enable moves", "It swaps two objects", "It destroys the source object"], correct: 1, explanation: "std::move is a cast; move occurs if type provides move operations." },
  { question: "Why use explicit on single-argument constructors?", answers: ["To force inline generation", "To prevent unintended implicit conversions", "To allow C-style casts", "To disable copy constructor"], correct: 1, explanation: "explicit blocks accidental implicit conversions." },
  { question: "Which C++ feature executes one-time initialization safely in function scope?", answers: ["goto", "magic statics", "volatile", "register"], correct: 1, explanation: "Function-local static initialization is thread-safe in modern C++." },
  { question: "What does std::variant primarily provide?", answers: ["A nullable pointer", "Type-safe tagged union", "A dynamic vector", "A map of values"], correct: 1, explanation: "variant stores one of several listed types safely." },
  { question: "Which operator can be overloaded as a member function only?", answers: ["+", "[]", "->", "<<"], correct: 2, explanation: "operator-> must be a member when overloaded." },
  { question: "What is a common reason to delete copy constructor?", answers: ["Allow shallow copies", "Prevent copying of resource-owning/non-copyable objects", "Speed up dynamic_cast", "Enable implicit moves only"], correct: 1, explanation: "Deleting copy constructor blocks invalid or unsafe copying." },
  { question: "Which mechanism defers execution until future retrieval?", answers: ["std::promise only", "std::async returning std::future", "std::tuple", "std::initializer_list"], correct: 1, explanation: "std::async runs callable and provides result through future." },
  { question: "What does std::make_unique return?", answers: ["raw pointer", "shared_ptr", "unique_ptr", "weak_ptr"], correct: 2, explanation: "make_unique creates and returns unique_ptr safely." },
  { question: "Which C++ feature allows multiple return values cleanly?", answers: ["goto", "std::tuple/structured bindings", "friend", "new[]"], correct: 1, explanation: "Tuple with structured bindings can return and unpack multiple values." },
  { question: "What is a good default ownership choice for heap objects?", answers: ["raw pointer", "unique_ptr", "shared_ptr always", "weak_ptr"], correct: 1, explanation: "unique_ptr is preferred default for exclusive ownership." },
  { question: "Which operation invalidates all vector iterators when reallocation occurs?", answers: ["size()", "push_back that triggers growth", "front()", "at() read"], correct: 1, explanation: "Reallocation moves storage, invalidating iterators/references." },
  { question: "What does std::optional::has_value indicate?", answers: ["Container capacity", "Whether optional currently contains a value", "Thread safety", "Ownership mode"], correct: 1, explanation: "has_value reports value presence in optional." },
  { question: "Why use std::lock_guard instead of manual lock/unlock?", answers: ["Faster parsing", "Exception-safe automatic unlock", "Required by compiler", "Converts mutex to atomic"], correct: 1, explanation: "RAII lock handling prevents leaks on early returns/exceptions." },
  { question: "Which feature is used to represent 'no object' safely for pointers?", answers: ["NULL macro only", "nullptr", "void*", "delete"], correct: 1, explanation: "nullptr is type-safe null pointer literal." },
  { question: "What does reserve() help reduce for vector growth?", answers: ["Element count", "Reallocations", "Type size", "Thread contention"], correct: 1, explanation: "reserve preallocates capacity, reducing reallocations." },
  { question: "Why avoid C-style casts in modern C++?", answers: ["They are slower always", "They hide intent and can perform unsafe conversions", "They cannot compile", "They are only for classes"], correct: 1, explanation: "Named casts make conversion intent and safety clearer." },
  { question: "What is one benefit of range-based for loop?", answers: ["Always fastest loop", "Cleaner iteration syntax with fewer index mistakes", "Works only for arrays", "Disables iterators"], correct: 1, explanation: "Range-for improves readability and reduces indexing errors." }
];

const l6QuestionPool = [
  { question: "What does std::string_view avoid compared to std::string?", answers: ["Bounds checks", "Owning/copying character storage", "Null termination", "UTF-8 conversion"], correct: 1, explanation: "string_view is a non-owning view and avoids string copies." },
  { question: "Which statement about noexcept move constructors is most accurate?", answers: ["No effect on containers", "Can enable vector to move elements during reallocation", "Prevents any exceptions globally", "Required for all classes"], correct: 1, explanation: "Containers prefer noexcept moves to preserve exception guarantees." },
  { question: "What does std::scoped_lock support well?", answers: ["Single mutex only", "Locking multiple mutexes with deadlock avoidance strategy", "Atomic wait-free updates", "Recursive unlock"], correct: 1, explanation: "scoped_lock can lock multiple mutexes safely in one RAII object." },
  { question: "Why are raw owning pointers discouraged in modern C++?", answers: ["They are always slower", "Ownership/lifetime is unclear and error-prone", "They cannot be null", "They are banned by standard"], correct: 1, explanation: "Smart pointers make ownership explicit and safer." },
  { question: "Which utility converts enum class value to underlying integral type safely?", answers: ["reinterpret_cast<int>", "std::to_underlying (C++23)", "atoi", "std::stoi"], correct: 1, explanation: "std::to_underlying provides clear and type-safe conversion." },
  { question: "What problem does std::weak_ptr::lock() solve?", answers: ["Creates unique ownership", "Checks object still alive before shared access", "Forces deletion", "Resets all shared_ptr"], correct: 1, explanation: "lock gives shared_ptr only if the managed object still exists." },
  { question: "What is a benefit of designated initializers in modern C++ aggregates?", answers: ["Runtime reflection", "Clear field-by-field initialization intent", "Automatic inheritance", "No constructor needed ever"], correct: 1, explanation: "Designated initializers improve readability and reduce ordering mistakes." },
  { question: "Which algorithm condition must comparator satisfy?", answers: ["Randomized output", "Strict weak ordering", "Total memory ordering", "Bitwise equality"], correct: 1, explanation: "Invalid comparator contracts can break sorting/associative containers." },
  { question: "What is the key difference between reserve and resize for vector?", answers: ["Both change size equally", "reserve changes capacity; resize changes element count", "reserve initializes values", "resize never allocates"], correct: 1, explanation: "reserve preallocates memory, resize changes logical size." },
  { question: "Which feature prevents data races for one variable update sequence?", answers: ["volatile int", "std::atomic", "register", "mutable"], correct: 1, explanation: "atomic operations synchronize accesses to shared variables." },
  { question: "When is std::array preferred over C array?", answers: ["Never", "When fixed-size container with STL interface is needed", "Only for heap allocation", "Only for strings"], correct: 1, explanation: "std::array gives fixed size plus safer STL-friendly behavior." },
  { question: "What is copy elision (RVO/NRVO) about?", answers: ["Disabling constructors", "Omitting temporary copies in returns/initialization", "Forcing move constructor", "Inlining functions only"], correct: 1, explanation: "Compiler may construct objects directly in final destination." },
  { question: "Which statement is true for std::span?", answers: ["Owns memory", "Non-owning view over contiguous sequence", "Works only with vectors", "Always mutable"], correct: 1, explanation: "span references contiguous memory without ownership." },
  { question: "What is a key use of std::exchange?", answers: ["Sort values", "Replace value and return old one", "Atomically lock mutex", "Convert types"], correct: 1, explanation: "exchange is useful in move operations and state transitions." },
  { question: "Why avoid throwing exceptions from destructors?", answers: ["It slows compilation only", "It can terminate program during stack unwinding", "Destructors cannot run then", "It leaks namespaces"], correct: 1, explanation: "Throwing during unwinding can call std::terminate." },
  { question: "Which chrono type typically represents wall-clock time points?", answers: ["std::chrono::duration", "std::chrono::system_clock::time_point", "std::chrono::hours", "std::chrono::tzdb"], correct: 1, explanation: "system_clock::time_point represents civil time points." },
  { question: "Why pass std::string_view for read-only string parameters?", answers: ["To own and modify input", "To avoid unnecessary string allocations/copies", "To force null termination", "To disable UTF handling"], correct: 1, explanation: "string_view is lightweight non-owning read-only view." },
  { question: "What is a typical use of std::call_once?", answers: ["Repeat initialization", "Thread-safe one-time initialization", "Parallel sort", "Atomic increment"], correct: 1, explanation: "call_once guarantees init routine runs once." },
  { question: "What does emplace_back potentially save versus push_back?", answers: ["Memory alignment checks", "Temporary object construction/copy", "Bounds checking", "Mutex locks"], correct: 1, explanation: "emplace_back constructs element directly in container." },
  { question: "Which operation on unordered_map may invalidate iterators broadly?", answers: ["find", "rehash", "count", "contains"], correct: 1, explanation: "rehash can relocate buckets and invalidate iterators." },
  { question: "What is a key benefit of std::array over raw array?", answers: ["Dynamic resizing", "Value semantics and STL compatibility", "Heap allocation by default", "Automatic bounds exceptions"], correct: 1, explanation: "std::array is fixed-size but behaves like a standard container." },
  { question: "Which feature helps express API contracts for template parameters in C++20?", answers: ["macros", "concepts", "friend classes", "reinterpret_cast"], correct: 1, explanation: "Concepts declare clear compile-time constraints." },
  { question: "Why might vector::data() be useful?", answers: ["Gets map key", "Access contiguous memory pointer", "Locks vector", "Sorts elements"], correct: 1, explanation: "data() exposes pointer to underlying contiguous storage." },
  { question: "What is a common pitfall of dangling string_view?", answers: ["It deep-copies data", "It may outlive referenced string buffer", "It leaks memory immediately", "It disables optimization"], correct: 1, explanation: "string_view does not own data; lifetime must be managed." },
  { question: "Which type safely models possibly-failing value with error alternative (library support permitting)?", answers: ["std::pair", "std::expected", "std::thread", "std::byte"], correct: 1, explanation: "expected represents value-or-error outcomes explicitly." }
];

const l7QuestionPool = [
  { question: "What does std::condition_variable wait require to handle correctly?", answers: ["No predicate", "Predicate loop to handle spurious wakeups", "Atomic only", "Global mutex"], correct: 1, explanation: "Always wait in loop/predicate because wakeups can be spurious." },
  { question: "Why prefer make_unique over raw new for unique_ptr?", answers: ["Disables constructors", "Exception-safe and concise ownership creation", "Avoids templates", "Forces polymorphism"], correct: 1, explanation: "make_unique avoids raw new and is safer/readable." },
  { question: "What does move-assignment usually need to handle for self-assignment safety?", answers: ["Nothing ever", "Valid state transition and resource release ordering", "Only noexcept keyword", "virtual inheritance"], correct: 1, explanation: "Move assignment should keep object valid and avoid leaks." },
  { question: "Which keyword expresses compile-time non-type template parameter in C++20 for many cases?", answers: ["dynamic", "auto", "virtual", "mutable"], correct: 1, explanation: "auto supports deduced non-type template parameters." },
  { question: "What is a typical use of std::enable_if or constraints/concepts?", answers: ["Runtime branching", "Constrain templates to valid types/expressions", "Memory pooling", "Lock-free queues"], correct: 1, explanation: "Constraints restrict template participation to valid scenarios." },
  { question: "Which tool helps detect undefined behavior at runtime in tests?", answers: ["UBSan", "Preprocessor only", "Linker map", "Formatter"], correct: 0, explanation: "UndefinedBehaviorSanitizer catches many UB cases during execution." },
  { question: "What does std::jthread add over std::thread?", answers: ["GPU execution", "Automatic join on destruction and stop token support", "Lock-free scheduling", "No constructor"], correct: 1, explanation: "jthread improves cancellation/cooperative stop and RAII join behavior." },
  { question: "Why can capturing local reference in detached thread be dangerous?", answers: ["Compiler blocks it always", "Referenced object may die before thread uses it", "References become shared_ptr", "It forces deep copy"], correct: 1, explanation: "Lifetime mismatch can produce dangling references." },
  { question: "Which statement about std::unordered_map worst-case lookup is true?", answers: ["Always O(1)", "Can degrade to O(n)", "Always O(log n)", "Always O(n log n)"], correct: 1, explanation: "Hash collisions can degrade lookup to linear in worst case." },
  { question: "What does std::filesystem::path provide?", answers: ["Network sockets", "Portable path representation/manipulation", "Thread pools", "JSON parsing"], correct: 1, explanation: "filesystem::path handles path operations portably." },
  { question: "What is the rule for deleting through base pointer safely?", answers: ["Base must be final", "Base destructor should be virtual", "Use reinterpret_cast", "Only heap objects allowed"], correct: 1, explanation: "Virtual destructor ensures correct derived cleanup." },
  { question: "Which C++ feature avoids macro constants for typed compile-time values?", answers: ["goto", "constexpr variables", "register", "typedef"], correct: 1, explanation: "constexpr variables are typed and checked by compiler." },
  { question: "What is a good reason to pass large object as const reference?", answers: ["It always mutates faster", "Avoid copy while preventing modification", "Needed for templates only", "It allocates on heap"], correct: 1, explanation: "const reference avoids expensive copies and preserves immutability." },
  { question: "What does std::pmr aim to customize?", answers: ["Exception hierarchy", "Memory resource allocation strategy", "Template parsing", "Object slicing"], correct: 1, explanation: "pmr lets you plug custom allocators/resources more flexibly." },
  { question: "Which issue can appear when mixing debug/release C++ binaries across boundaries?", answers: ["Only slower loops", "ABI and allocator incompatibilities", "Automatic conversion fixes", "Namespace conflicts only"], correct: 1, explanation: "Binary/interface mismatch can crash or corrupt memory." },
  { question: "What does stop_token in jthread support?", answers: ["Forced thread kill", "Cooperative cancellation checks", "Automatic mutex unlock", "Compile-time stop"], correct: 1, explanation: "stop_token enables cooperative cancellation signaling." },
  { question: "Why use std::atomic<bool> for simple stop flags?", answers: ["To serialize files", "To avoid data races on shared flag updates", "To allocate less memory always", "To disable compiler optimization"], correct: 1, explanation: "Atomic flags provide race-free shared state updates." },
  { question: "What is a common reason to prefer scoped enums in APIs?", answers: ["Implicit int conversions", "Better type safety and namespace control", "Faster threading", "Automatic reflection"], correct: 1, explanation: "enum class avoids accidental implicit conversions." },
  { question: "Which utility combines callable and arguments for deferred invocation?", answers: ["std::bind", "std::filesystem", "std::ratio", "std::span"], correct: 0, explanation: "std::bind creates callable objects with bound arguments." },
  { question: "What is the effect of using mutable lambda capture variable?", answers: ["Makes lambda thread-safe", "Allows modifying captured-by-value copies inside lambda", "Forces heap allocation", "Changes return type to void"], correct: 1, explanation: "mutable permits changing internal captured values by copy." },
  { question: "Why can condition_variable wait without predicate be buggy?", answers: ["No lock needed", "Spurious wakeups can break logic", "Compiler removes waits", "It always deadlocks"], correct: 1, explanation: "Predicate guards against spurious wakeups and missed conditions." },
  { question: "What does std::shared_mutex primarily optimize?", answers: ["Single-writer/multiple-reader locking", "Socket communication", "Template parsing", "Stack allocation"], correct: 0, explanation: "shared_mutex supports concurrent readers with exclusive writer." },
  { question: "Which approach helps avoid accidental expensive copies in APIs?", answers: ["Pass everything by value", "Use const references/views where ownership is not needed", "Use global variables", "Use C arrays only"], correct: 1, explanation: "References/views avoid unnecessary allocations and copies." },
  { question: "What is one benefit of noexcept function declarations?", answers: ["Guarantees no bugs", "Allows optimizer/library to choose stronger move paths", "Disables RTTI", "Enables garbage collection"], correct: 1, explanation: "noexcept can influence optimizations and container behavior." },
  { question: "Why are custom allocators used in performance-critical systems?", answers: ["To change syntax", "To control allocation patterns and memory locality", "To remove constructors", "To replace templates"], correct: 1, explanation: "Allocator strategy can significantly affect throughput and latency." }
];

const l8QuestionPool = [
  { question: "What does std::launder address in low-level C++?", answers: ["Thread deadlocks", "Pointer optimization/lifetime edge cases after object reuse", "UTF conversion", "RAII locks"], correct: 1, explanation: "std::launder helps in certain object model/lifetime aliasing scenarios." },
  { question: "Why is placement new used?", answers: ["To allocate memory automatically", "To construct object at a specific memory address", "To bypass constructors", "To free memory"], correct: 1, explanation: "Placement new constructs into pre-allocated storage." },
  { question: "What must follow placement new for manual lifetime management?", answers: ["delete[] always", "Explicit destructor call and separate storage release policy", "std::free only", "Nothing"], correct: 1, explanation: "With placement new, destruction/deallocation responsibilities are manual." },
  { question: "Which issue does object slicing cause?", answers: ["Memory leak always", "Derived part lost when copied into base by value", "Template failure", "Thread starvation"], correct: 1, explanation: "Passing/storing derived as base value slices derived members/behavior." },
  { question: "What is the purpose of std::forward in forwarding references?", answers: ["Always cast to lvalue", "Preserve original value category", "Destroy source object", "Disable overload resolution"], correct: 1, explanation: "forward keeps lvalue/rvalue nature for perfect forwarding." },
  { question: "Why can two-phase lookup matter in templates?", answers: ["Only runtime behavior", "Dependent names are resolved at instantiation time", "No effect in C++", "It changes ABI"], correct: 1, explanation: "Template name lookup rules affect which symbols are found and when." },
  { question: "Which statement about constexpr functions is correct?", answers: ["Must always run at compile time", "Can run at compile time when used in constant-evaluated context", "Cannot contain loops", "Cannot return values"], correct: 1, explanation: "constexpr functions may execute at runtime too, depending on usage." },
  { question: "What does std::source_location help with?", answers: ["Memory alignment", "Capturing file/line/function info for diagnostics", "Socket binding", "Map hashing"], correct: 1, explanation: "source_location improves logging and error reporting context." },
  { question: "What is a primary benefit of concepts over SFINAE-heavy errors?", answers: ["Slower builds only", "Clearer constraints and diagnostics", "Disables templates", "Removes overloads"], correct: 1, explanation: "Concepts make template requirements explicit and error messages clearer." },
  { question: "Which C++ cast should generally be avoided unless absolutely needed?", answers: ["dynamic_cast", "reinterpret_cast", "static_cast", "const_cast"], correct: 1, explanation: "reinterpret_cast is low-level and easily unsafe/non-portable." },
  { question: "What is a key hazard of signed integer overflow in C++?", answers: ["Well-defined wraparound", "Undefined behavior", "Compile-time exception", "Automatic saturation"], correct: 1, explanation: "Signed overflow is UB; compilers may optimize assuming it never happens." },
  { question: "Why prefer std::byte for raw memory buffers over char in some APIs?", answers: ["Faster arithmetic", "Express intent of raw byte storage", "Automatic UTF conversion", "Required by compiler"], correct: 1, explanation: "std::byte communicates non-character binary data intent." },
  { question: "What does transitive include reliance risk?", answers: ["Better compile speed", "Fragile builds when upstream headers change", "Automatic module conversion", "Runtime deadlocks"], correct: 1, explanation: "Directly include what you use to avoid brittle dependencies." },
  { question: "Which rule best avoids lifetime bugs in APIs returning references?", answers: ["Return reference to local", "Reference must outlive all consumers", "Always return raw pointer", "Use global mutable state"], correct: 1, explanation: "Returned references are safe only if referenced object outlives usage." },
  { question: "What is a typical use of std::invoke?", answers: ["Memory allocation", "Uniformly calling callable entities/member pointers", "Thread sleep", "Regex parsing"], correct: 1, explanation: "invoke abstracts calling function objects, pointers to members, and lambdas." },
  { question: "What is the key purpose of std::launder in advanced object model scenarios?", answers: ["Force deallocation", "Obtain usable pointer after certain storage reuse transformations", "Sort pointers", "Mark pointer const"], correct: 1, explanation: "launder helps with pointer validity in specific lifetime/reuse cases." },
  { question: "Why can union-like storage patterns require manual lifetime control?", answers: ["Compiler disallows constructors", "Only one active object lifetime at a time must be managed", "They always leak", "They forbid templates"], correct: 1, explanation: "Manual construction/destruction tracks active member correctly." },
  { question: "What does trivial relocation discussion in C++ usually target?", answers: ["Thread APIs", "Efficient object movement by bytes for eligible types", "Exception hierarchy", "Virtual dispatch"], correct: 1, explanation: "Relocation topics focus on moving objects efficiently under strict rules." },
  { question: "Which pitfall exists with pointer arithmetic beyond array bounds?", answers: ["Guaranteed wraparound", "Undefined behavior", "Automatic clamp", "Compile-time error always"], correct: 1, explanation: "Out-of-bounds pointer arithmetic/access is undefined behavior." },
  { question: "Why are explicit lifetime markers important in low-level containers?", answers: ["For prettier syntax", "To separate storage management from object lifetime", "To disable optimizations", "To remove destructors"], correct: 1, explanation: "Advanced containers often manage raw storage and explicit object lifetimes." },
  { question: "What is a major risk of type punning through incompatible pointer casts?", answers: ["Better cache locality", "Aliasing/lifetime UB and miscompilation", "Automatic conversion", "Thread deadlock"], correct: 1, explanation: "Incorrect type punning can violate strict aliasing and object rules." },
  { question: "Which facility is often used for compile-time branching on type properties?", answers: ["dynamic_cast", "if constexpr with type traits", "new/delete", "std::thread"], correct: 1, explanation: "if constexpr with traits chooses branches at compile time." },
  { question: "Why can manual aligned storage be error-prone?", answers: ["No runtime cost", "Alignment and lifetime rules are easy to violate", "Compiler rewrites it safely", "No destructor needed"], correct: 1, explanation: "Incorrect alignment/lifetime handling leads to undefined behavior." },
  { question: "What does std::construct_at provide?", answers: ["Thread creation", "Explicit object construction at pointer location", "Map insertion", "Scope guard"], correct: 1, explanation: "construct_at builds an object in provided storage location." },
  { question: "What does std::destroy_at provide?", answers: ["Delete array", "Explicit destructor invocation at pointer location", "Automatic lock release", "Type conversion"], correct: 1, explanation: "destroy_at calls destructor for object at given location." }
];

const l9QuestionPool = [
  { question: "Which statement about atomic read-modify-write operations is true?", answers: ["They are non-atomic on weak CPUs", "They are atomic and combine load/update/store as one operation", "They require mutex always", "They are only for integers"], correct: 1, explanation: "RMW atomics perform update as one atomic step." },
  { question: "What is false sharing in multithreaded C++ performance?", answers: ["Sharing pointers intentionally", "Independent data on same cache line causing contention", "Using shared_ptr cycles", "A type of deadlock"], correct: 1, explanation: "False sharing hurts performance due to cache line invalidations." },
  { question: "Why can std::vector reallocation invalidate references/iterators?", answers: ["Because elements are sorted", "Storage may move to a new memory block", "Because size never changes", "Only in debug mode"], correct: 1, explanation: "Reallocation moves elements, invalidating old addresses/iterators." },
  { question: "Which type trait checks if a type is trivially copyable?", answers: ["std::is_copy_assignable", "std::is_trivially_copyable", "std::is_standard_layout", "std::is_reference"], correct: 1, explanation: "is_trivially_copyable reports trivial byte-copy semantics suitability." },
  { question: "What does std::atomic_thread_fence primarily enforce?", answers: ["Thread creation", "Ordering constraints for memory operations", "Mutex ownership", "Heap compaction"], correct: 1, explanation: "Fences impose memory ordering without directly accessing an atomic value." },
  { question: "Which practice improves exception safety in complex functions?", answers: ["Manual new/delete everywhere", "Use strong invariants and RAII-managed resources", "Catch all and ignore", "Disable move constructors"], correct: 1, explanation: "RAII and invariants simplify rollback and cleanup correctness." },
  { question: "What is an advantage of modules over textual includes?", answers: ["No compiler needed", "Better isolation and potentially faster builds", "No linking stage", "No templates"], correct: 1, explanation: "Modules reduce macro/include overhead and improve dependency boundaries." },
  { question: "What does std::expected (where available) model?", answers: ["Thread-local storage", "Either a value or an error", "Automatic retries", "Variadic inheritance"], correct: 1, explanation: "expected enables explicit value-or-error return handling." },
  { question: "Why is narrowing conversion in list initialization rejected?", answers: ["Because list is dynamic", "To prevent silent precision/data loss", "Because braces require pointers", "Due to ABI rules"], correct: 1, explanation: "Brace init protects against unsafe narrowing conversions." },
  { question: "What is the benefit of [[nodiscard]]?", answers: ["Forces inlining", "Warns when important return value is ignored", "Prevents exceptions", "Makes function constexpr"], correct: 1, explanation: "nodiscard helps catch logic bugs from dropped results." },
  { question: "Which statement about std::chrono durations is correct?", answers: ["They store timezone names", "They are strongly typed time intervals", "They require floating point only", "They replace threads"], correct: 1, explanation: "chrono durations/units are type-safe and composable." },
  { question: "What is a risk when using detached threads heavily?", answers: ["Guaranteed faster completion", "Hard-to-manage lifetime/shutdown coordination", "Automatic cancellation by default", "No synchronization needed"], correct: 1, explanation: "Detached threads can outlive resources they access." },
  { question: "Why can custom deleter type affect unique_ptr size?", answers: ["It cannot", "Deleter can be stored as part of unique_ptr object", "Only for arrays", "Only on Windows"], correct: 1, explanation: "Stateful deleters increase unique_ptr object size." },
  { question: "What is the core requirement for using polymorphism correctly through base API?", answers: ["No virtual functions", "Base class should model stable interface and virtual destructor when deleted polymorphically", "Only static methods", "Use macros"], correct: 1, explanation: "A proper virtual interface with safe destruction is fundamental." },
  { question: "Which mechanism can prevent accidental override signature mismatches?", answers: ["friend", "override", "extern", "typedef"], correct: 1, explanation: "override asks compiler to verify true overriding." },
  { question: "What is the ABA mitigation strategy often paired with lock-free stacks?", answers: ["shared_mutex", "Tagged pointers/version counters or hazard-based reclamation", "std::sort", "const_cast"], correct: 1, explanation: "Versioning or safe reclamation helps detect/reduce ABA hazards." },
  { question: "Why is cache-line alignment sometimes used with atomics?", answers: ["To improve syntax readability", "To reduce false sharing contention", "To force sequential consistency", "To disable compiler optimization"], correct: 1, explanation: "Aligning frequently-updated atomics can reduce cache thrashing." },
  { question: "What does acquire-release ordering establish?", answers: ["Global total order like seq_cst", "Happens-before relation between synchronized operations", "No ordering guarantees", "Only compiler ordering"], correct: 1, explanation: "Acquire/release coordinates visibility between threads." },
  { question: "Why can lock-free code still block system progress indirectly?", answers: ["It cannot", "Through contention/starvation/retry storms despite lock-free guarantees", "Because atomics are mutexes", "Because compiler inserts sleeps"], correct: 1, explanation: "Lock-free does not always guarantee low latency under heavy contention." },
  { question: "Which data structure property often matters for high-frequency trading workloads?", answers: ["Pretty API", "Predictable latency and memory locality", "Inheritance depth", "Template count"], correct: 1, explanation: "Low and predictable latency often matters more than average throughput." },
  { question: "What is one reason to avoid exceptions in some hot paths?", answers: ["They are illegal C++", "Unpredictable cost and control-flow complexity in critical paths", "They improve determinism always", "They force UB"], correct: 1, explanation: "Some systems choose explicit error paths for predictability." },
  { question: "How can you reduce contention on shared counters?", answers: ["Use one global mutex always", "Use sharded/per-thread counters with aggregation", "Use volatile only", "Use recursion"], correct: 1, explanation: "Sharding reduces synchronization hot spots." },
  { question: "What is a key benefit of monotonic memory resources in burst workloads?", answers: ["Automatic deallocation per object", "Fast allocation with bulk release pattern", "Pointer type erasure", "Built-in locking"], correct: 1, explanation: "Monotonic resources are efficient when lifetimes are group-based." },
  { question: "Why should API boundaries avoid exposing STL types across unstable ABI boundaries?", answers: ["STL types are unusable", "Implementation/compiler differences can break binary compatibility", "They are always slower", "They cannot be templated"], correct: 1, explanation: "Exposing unstable layout across ABI can break interoperability." },
  { question: "What is one purpose of memory fences when using non-SC atomics?", answers: ["Increase type safety", "Enforce required ordering constraints", "Eliminate all races automatically", "Replace unit tests"], correct: 1, explanation: "Fences can establish ordering where direct atomic ops are insufficient." }
];

const l10QuestionPool = [
  { question: "Which memory order gives strongest default ordering guarantee for atomics?", answers: ["memory_order_relaxed", "memory_order_seq_cst", "memory_order_release", "memory_order_consume"], correct: 1, explanation: "seq_cst provides strongest and globally ordered atomic semantics." },
  { question: "What is the primary goal of lock-free algorithms?", answers: ["No memory allocation", "System-wide progress without mutex blocking", "No atomic operations", "No ABA concerns"], correct: 1, explanation: "Lock-free designs avoid global blocking but require careful correctness proofs." },
  { question: "Why is ABA problem relevant in compare-and-swap structures?", answers: ["Compiler parsing issue", "Value can change away and back, fooling CAS checks", "Only for vectors", "Only for exceptions"], correct: 1, explanation: "CAS may see same value while underlying state changed in between." },
  { question: "What is one role of hazard pointers/epoch reclamation?", answers: ["Speeding parsing", "Safe memory reclamation in lock-free data structures", "Template metaprogramming", "Path normalization"], correct: 1, explanation: "They prevent reclaiming nodes still potentially accessed by other threads." },
  { question: "Which principle helps maintain stable ABI boundaries in C++ libraries?", answers: ["Expose all templates in ABI", "Minimize exposed concrete layout and use pimpl/interface boundaries", "Use macros for everything", "Disable namespaces"], correct: 1, explanation: "Hiding implementation details reduces ABI break surface." },
  { question: "What does ODR violation commonly lead to?", answers: ["Guaranteed optimization", "Undefined behavior or linker/runtime inconsistencies", "Automatic merge", "Faster startup"], correct: 1, explanation: "Conflicting definitions across translation units break program correctness." },
  { question: "Which technique helps reduce template bloat in large codebases?", answers: ["Duplicate explicit instantiations everywhere", "Use explicit instantiation strategically", "Disable optimization", "Replace all templates with macros"], correct: 1, explanation: "Explicit instantiation can centralize/generated code and reduce duplication." },
  { question: "What is a key downside of overusing inline in headers?", answers: ["No effect ever", "Code size growth and recompilation overhead", "Prevents templates", "Disables link-time optimization"], correct: 1, explanation: "Too much inline can increase binary size and build costs." },
  { question: "Why are contract-like precondition checks important in low-level C++ APIs?", answers: ["They replace tests fully", "They enforce assumptions close to boundary and fail fast", "They make UB impossible always", "They disable optimization"], correct: 1, explanation: "Clear preconditions reduce misuse and undefined behavior risk." },
  { question: "What does std::bit_cast require?", answers: ["Polymorphic types only", "Same size and trivially copyable source/target types", "Heap allocation", "Virtual destructor"], correct: 1, explanation: "bit_cast performs safe bitwise reinterpretation under strict constraints." },
  { question: "Which strategy best mitigates iterator invalidation bugs?", answers: ["Store raw addresses permanently", "Know container invalidation rules and re-acquire iterators after mutating operations", "Disable warnings", "Use global vectors only"], correct: 1, explanation: "Iterator validity depends on container and operation semantics." },
  { question: "What is a recommended approach for exception-neutral generic libraries?", answers: ["Swallow all exceptions", "Preserve invariants and propagate exceptions without leaks", "Disable RAII", "Use only C APIs"], correct: 1, explanation: "Exception-neutral code keeps resources safe and lets callers decide handling." },
  { question: "Why can over-aligned types need special allocation handling?", answers: ["They cannot be allocated", "Alignment requirements may exceed default allocator guarantees in some contexts", "Only debug builds care", "They always fit in stack"], correct: 1, explanation: "Correct alignment is required for defined behavior and performance." },
  { question: "What is a robust approach to cross-thread object ownership transfer?", answers: ["Share raw pointer globally", "Transfer via move-only ownership or synchronized shared ownership", "Use static locals", "Rely on volatile"], correct: 1, explanation: "Ownership transfer must be explicit and synchronized." },
  { question: "What is the main value of fuzz testing for C++ systems code?", answers: ["It replaces unit tests entirely", "It discovers edge-case crashes/UB with randomized inputs", "It guarantees formal proof", "It removes need for sanitizers"], correct: 1, explanation: "Fuzzing is powerful for finding rare input-driven failures." },
  { question: "What is one challenge of wait-free algorithm design compared to lock-free?", answers: ["No atomics needed", "Per-thread progress guarantees are significantly harder to prove/implement", "No memory model concerns", "Always lower overhead"], correct: 1, explanation: "Wait-free guarantees are stronger and typically harder to achieve." },
  { question: "Why is linearizability important in concurrent data structures?", answers: ["It improves compile time", "It provides a clear correctness model of atomic operation effects", "It removes need for tests", "It ensures cache locality"], correct: 1, explanation: "Linearizability defines intuitive single-operation consistency points." },
  { question: "What does backoff strategy in CAS loops primarily address?", answers: ["Type conversion", "Contention and livelock pressure", "ODR issues", "ABI compatibility"], correct: 1, explanation: "Backoff reduces repeated collision under high contention." },
  { question: "Why are memory reclamation strategies critical in lock-free containers?", answers: ["For syntax sugar", "To avoid use-after-free by concurrent readers", "To reduce template size only", "To disable atomics"], correct: 1, explanation: "Safe reclamation prevents freeing nodes still observable by threads." },
  { question: "What is one reason to use sanitizer builds in CI for C++?", answers: ["To replace code review", "To detect undefined behavior and memory/thread bugs early", "To shrink binaries", "To remove warnings"], correct: 1, explanation: "ASan/UBSan/TSan catch critical runtime issues early." },
  { question: "How do contracts/assertions help in systems-level C++?", answers: ["Eliminate all runtime cost", "Catch invalid assumptions close to failure point", "Enable garbage collection", "Make code lock-free"], correct: 1, explanation: "Assertions document and enforce invariants during testing/debug." },
  { question: "What is a risk of assuming x86 memory behavior on all architectures?", answers: ["Portability gains", "Incorrect synchronization on weaker memory models", "Fewer bugs", "Faster compile times"], correct: 1, explanation: "Different architectures may require stronger explicit ordering." },
  { question: "Why can static initialization order across translation units be problematic?", answers: ["Compiler rejects it", "Order is unspecified and can cause startup bugs", "It only affects templates", "It disables exceptions"], correct: 1, explanation: "Cross-unit static init dependencies can fail due to order issues." },
  { question: "What is a robust strategy for high-reliability C++ components?", answers: ["Rely on manual testing only", "Combine RAII, strong invariants, sanitizers, and focused stress tests", "Avoid code reviews", "Disable warnings"], correct: 1, explanation: "Layered quality practices reduce production failures." },
  { question: "Why use explicit interface boundaries for subsystem ownership?", answers: ["To increase coupling", "To make lifetime/responsibility clear and auditable", "To avoid classes", "To disable inlining"], correct: 1, explanation: "Clear ownership boundaries reduce leaks and concurrency hazards." }
];

const quizLevels = {


  l1: buildLevelQuestions(l1QuestionPool, 0),



  l2: buildLevelQuestions(l2QuestionPool, 0),



  l3: buildLevelQuestions(l3QuestionPool, 0),



  l4: buildLevelQuestions(l4QuestionPool, 0),



  l5: buildLevelQuestions(l5QuestionPool, 0),

  l6: buildLevelQuestions(l6QuestionPool, 0),

  l7: buildLevelQuestions(l7QuestionPool, 0),

  l8: buildLevelQuestions(l8QuestionPool, 0),

  l9: buildLevelQuestions(l9QuestionPool, 0),

  l10: buildLevelQuestions(l10QuestionPool, 0)

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



const QUIZ_NAME = "cpp";



const QUIZ_PAGE = "cpp.html";



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



function buildLearnExplanation(questionText, correctAnswer, explanationText) {

  const question = String(questionText || "").trim();

  const answer = String(correctAnswer || "").trim();

  const specificWhy = String(explanationText || "").trim() ||
    `In C++, "${answer}" is the option that directly matches what this question asks.`;

  return {

    concept: specificWhy,

    why: `This exact question asks about "${question}". The correct option is "${answer}" because it satisfies that exact C++ requirement.`,

    steps: [

      "Read what the question is asking (keyword, rule, or behavior).",

      `Check which option exactly matches that C++ requirement: "${answer}".`,

      "Select the option that matches the rule directly, not a similar-looking term."

    ],

    example: [

      "Question under review:",

      question,

      "",

      "Correct option:",

      answer

    ].join("\n"),

    output: `Final answer for this question: ${answer}`,

    pitfalls: [

      "Choosing a near-synonym that is not the exact C++ keyword/rule in the question."

    ]

  };

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



