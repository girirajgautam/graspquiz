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



const l5QuestionPool = [



  { question: "What is the output of bool([])?", answers: ["True", "False", "None", "Error"], correct: 1, explanation: "Empty list is falsy in Python." },



  { question: "Which statement creates a dictionary comprehension?", answers: ["{k: v for k, v in pairs}", "[k: v for k, v in pairs]", "(k: v for k, v in pairs)", "dict(k: v)"], correct: 0, explanation: "Use curly braces with key:value in comprehension." },



  { question: "Which method removes and returns the last item from list?", answers: ["remove()", "discard()", "pop()", "delete()"], correct: 2, explanation: "list.pop() returns and removes an item (last by default)." },



  { question: "What does sorted(arr, key=len) do?", answers: ["Sorts by values only", "Sorts by string conversion", "Sorts by item length", "Sorts descending"], correct: 2, explanation: "key=len sorts based on length of each element." },



  { question: "What is the result of 'py' * 3?", answers: ["py3", "pypypy", "Error", "['py','py','py']"], correct: 1, explanation: "String repetition duplicates content." },



  { question: "Which is the correct way to handle multiple exceptions?", answers: ["except ValueError, TypeError:", "except (ValueError, TypeError):", "except ValueError or TypeError:", "except all(ValueError, TypeError):"], correct: 1, explanation: "Wrap exception types in tuple." },



  { question: "Which built-in returns unique elements from an iterable?", answers: ["unique()", "distinct()", "set()", "dedupe()"], correct: 2, explanation: "set() removes duplicates by nature of set." },



  { question: "How do you merge two dictionaries in Python 3.9+?", answers: ["d1 + d2", "d1.merge(d2)", "d1 | d2", "merge(d1,d2)"], correct: 2, explanation: "Use dict union operator | in modern Python." },



  { question: "What does any([0, '', 5]) return?", answers: ["False", "True", "0", "Error"], correct: 1, explanation: "any() is True if at least one element is truthy." },



  { question: "What does all([1, True, 'x']) return?", answers: ["False", "True", "1", "Error"], correct: 1, explanation: "all() is True when all elements are truthy." },



  { question: "Which function gives both index and value in loop?", answers: ["range()", "zip()", "enumerate()", "iter()"], correct: 2, explanation: "enumerate returns (index, value)." },



  { question: "What does list.extend([4,5]) do?", answers: ["Adds one nested list", "Adds each element to list", "Removes items", "Sorts list"], correct: 1, explanation: "extend appends each element from iterable." },



  { question: "What is the output of 10 % 3?", answers: ["3", "1", "0", "10"], correct: 1, explanation: "Modulo gives remainder after division." },



  { question: "Which statement about tuples is true?", answers: ["Always mutable", "Can be dictionary keys if hashable", "Have append()", "Can only store integers"], correct: 1, explanation: "Immutable tuples can be used as keys if their items are hashable." },



  { question: "What does str.strip() do?", answers: ["Removes all spaces in string", "Removes leading/trailing whitespace", "Splits string", "Reverses string"], correct: 1, explanation: "strip removes whitespace from both ends." },



  { question: "Which operator checks membership in a sequence?", answers: ["has", "in", "contains", "inside"], correct: 1, explanation: "Use 'in' to check membership." },



  { question: "What is the result type of range(5)?", answers: ["list", "tuple", "range object", "set"], correct: 2, explanation: "range returns a lazy range object." },



  { question: "How do you convert a string to lowercase?", answers: ["lowercase()", "toLower()", "lower()", "small()"], correct: 2, explanation: "str.lower() returns lowercase string." },



  { question: "Which method removes a key and returns its value from dict?", answers: ["remove()", "delete()", "pop()", "discard()"], correct: 2, explanation: "dict.pop(key) removes key and returns value." },



  { question: "What does list.insert(0, x) do?", answers: ["Replaces first value", "Appends at end", "Inserts x at beginning", "Sorts list"], correct: 2, explanation: "insert(index, value) adds item at given index." },



  { question: "Which built-in returns the largest item?", answers: ["top()", "max()", "largest()", "high()"], correct: 1, explanation: "max() returns the maximum value." },



  { question: "Which statement is true about Python strings?", answers: ["Strings are mutable", "Strings are immutable", "Strings are numbers", "Strings cannot be sliced"], correct: 1, explanation: "Strings cannot be changed in place." },



  { question: "What does dict.setdefault('k', 0) do if key missing?", answers: ["Raises error", "Inserts key with value 0", "Deletes key", "Returns None always"], correct: 1, explanation: "setdefault inserts default when key doesn't exist." },



  { question: "What does 'hello'.split('e') return?", answers: ["['h', 'llo']", "['hello']", "['h', 'e', 'llo']", "Error"], correct: 0, explanation: "split separates text around the delimiter." },



  { question: "What does list.clear() do?", answers: ["Removes first item only", "Creates copy", "Removes all items from list", "Sorts list"], correct: 2, explanation: "clear empties the list in place." }



];



const l6QuestionPool = [



  { question: "Which module provides regular expressions in Python?", answers: ["regexlib", "re", "exp", "regexp"], correct: 1, explanation: "Python regex operations are in re module." },



  { question: "What does re.findall() return?", answers: ["First match only", "Boolean", "List of all matches", "Match iterator object only"], correct: 2, explanation: "findall returns all non-overlapping matches in a list." },



  { question: "Which statement about closures is correct?", answers: ["Inner function cannot access outer variables", "Closure remembers outer scope variables", "Closure is same as class", "Closure only works with lambda"], correct: 1, explanation: "Closures capture lexical environment." },



  { question: "What does functools.lru_cache help with?", answers: ["Network caching only", "Memoization of function calls", "File compression", "Sorting cache"], correct: 1, explanation: "lru_cache caches previous results for repeated calls." },



  { question: "What is monkey patching?", answers: ["Changing code at runtime", "Compiling to bytecode", "Installing packages", "Using decorators only"], correct: 0, explanation: "Monkey patching modifies classes/functions dynamically at runtime." },



  { question: "Which statement about deepcopy is true?", answers: ["Copies nested objects recursively", "Only copies top level", "Always fails with dict", "Same as assignment"], correct: 0, explanation: "copy.deepcopy duplicates nested structures too." },



  { question: "Which of these is immutable?", answers: ["bytearray", "set", "frozenset", "list"], correct: 2, explanation: "frozenset is immutable." },



  { question: "What does pathlib.Path provide?", answers: ["Threading API", "Object-oriented file system paths", "JSON parser", "Regex shortcuts"], correct: 1, explanation: "pathlib offers cleaner path handling." },



  { question: "Which keyword is used to create anonymous functions?", answers: ["func", "lambda", "anon", "defn"], correct: 1, explanation: "lambda creates anonymous one-expression functions." },



  { question: "What is the purpose of __repr__?", answers: ["Friendly user output only", "Official/debug representation", "Constructor only", "Delete object"], correct: 1, explanation: "__repr__ is aimed at unambiguous debug representation." },



  { question: "Which collection maintains insertion order in modern Python dict?", answers: ["dict", "set", "tuple", "list only"], correct: 0, explanation: "dict preserves insertion order in Python 3.7+ language spec." },



  { question: "Which exception for missing dict key via d['x']?", answers: ["IndexError", "ValueError", "KeyError", "TypeError"], correct: 2, explanation: "Direct missing key access raises KeyError." },



  { question: "What does hasattr(obj, 'x') return?", answers: ["Attribute value", "Boolean if attribute exists", "Index position", "Raises always"], correct: 1, explanation: "hasattr returns True/False based on attribute existence." },



  { question: "What does isinstance(x, int) check?", answers: ["Exact type name string", "Whether x is instance/subclass of int", "Memory address", "Numeric value only"], correct: 1, explanation: "isinstance checks object type compatibility." },



  { question: "Which statement about slicing list[a:b:c] is correct?", answers: ["b is included always", "c is skip/step", "a must be 0", "Cannot use negative indices"], correct: 1, explanation: "Third slice argument controls step." },



  { question: "Which function from copy module makes shallow copy?", answers: ["copy.copy()", "copy.deep()", "copy.clone()", "copy.shallow()"], correct: 0, explanation: "copy.copy creates shallow copy." },



  { question: "Which one creates a set comprehension?", answers: ["{x*x for x in nums}", "[x*x for x in nums]", "(x*x for x in nums)", "{x:x*x for x in nums}"], correct: 0, explanation: "Set comprehensions use curly braces with one expression." },



  { question: "What does dict.items() return?", answers: ["Only keys", "Only values", "View of key-value pairs", "Sorted pairs list"], correct: 2, explanation: "items() gives dict_items view of (key, value)." },



  { question: "What does super() usually help with?", answers: ["Imports modules", "Call parent class methods", "Thread synchronization", "Memory cleanup"], correct: 1, explanation: "super() gives access to parent class behavior." },



  { question: "Which statement about f-strings is true?", answers: ["Only for integers", "Cannot call functions inside", "Allow inline expressions", "Need % operator"], correct: 2, explanation: "f-strings support expressions like f'{x+1}'." },



  { question: "What does sorted(data, reverse=True) do?", answers: ["Sort ascending", "Sort descending", "Reverse original list only", "No change"], correct: 1, explanation: "reverse=True sorts from high to low." },



  { question: "Which method converts string digits to integer?", answers: ["num()", "parseInt()", "int()", "toint()"], correct: 2, explanation: "int('42') converts string to int." },



  { question: "What does zip([1,2], ['a','b']) produce?", answers: ["[(1,'a'), (2,'b')]", "[1,'a',2,'b']", "{1:'a',2:'b'}", "Error"], correct: 0, explanation: "zip pairs elements at same index." },



  { question: "Which statement about generators is true?", answers: ["Use return repeatedly", "Use yield to produce sequence lazily", "Cannot be iterated in for-loop", "Need list() first"], correct: 1, explanation: "yield creates generator behavior." },



  { question: "What does dict.values() return?", answers: ["List always", "View object of dictionary values", "Tuple of key-value pairs", "Only unique values"], correct: 1, explanation: "values() returns a dynamic view object." }



];



const l7QuestionPool = [



  { question: "What is the role of the Global Interpreter Lock (GIL) in CPython?", answers: ["Enables full parallel threads for CPU tasks", "Allows one thread to execute Python bytecode at a time", "Disables multiprocessing module", "Only affects async code"], correct: 1, explanation: "GIL serializes Python bytecode execution per process." },



  { question: "When is asyncio usually better than threading?", answers: ["CPU heavy matrix multiplication", "Many network I/O tasks", "Cryptography hashing only", "Image rendering"], correct: 1, explanation: "asyncio shines with many concurrent I/O-bound tasks." },



  { question: "What is a coroutine in Python?", answers: ["A compiled extension", "Function defined with async def", "A class decorator", "A process"], correct: 1, explanation: "async def defines coroutine functions." },



  { question: "What does await do?", answers: ["Blocks all threads", "Waits for coroutine/future result cooperatively", "Starts a process", "Imports async module"], correct: 1, explanation: "await yields control to event loop until task completes." },



  { question: "Which module helps serialize objects to JSON?", answers: ["pickle", "marshal", "json", "csv"], correct: 2, explanation: "json module handles JSON serialization/deserialization." },



  { question: "What is a risk of using pickle with untrusted data?", answers: ["Syntax errors only", "Can execute malicious code", "It is always encrypted", "Only performance issue"], correct: 1, explanation: "pickle is unsafe for untrusted input." },



  { question: "What does __slots__ primarily optimize?", answers: ["Network speed", "Per-instance memory usage", "Disk writes", "Regex matching"], correct: 1, explanation: "__slots__ can reduce memory by avoiding instance __dict__." },



  { question: "Which is true about generators and iterators?", answers: ["All iterators are generators", "All generators are iterators", "Neither related", "Generators cannot be iterated"], correct: 1, explanation: "Generators implement iterator protocol." },



  { question: "What does next(it) do?", answers: ["Resets iterator", "Returns next element or raises StopIteration", "Sorts iterator", "Converts to list"], correct: 1, explanation: "next advances iterator one step." },



  { question: "Which pattern avoids mutable default pitfall?", answers: ["def f(x=[]):", "def f(x=None): x = [] if x is None else x", "def f(x=set()):", "def f(x=dict()):"], correct: 1, explanation: "Use None sentinel then create new object inside." },



  { question: "What does contextlib.contextmanager allow?", answers: ["Build context managers with generator syntax", "Create dataclasses", "Open sockets only", "Run multiprocessing"], correct: 0, explanation: "It converts generator function into context manager." },



  { question: "What is duck typing?", answers: ["Strict compile-time type checking", "Object suitability based on methods/behavior", "Only numeric typing", "Type hints enforcement"], correct: 1, explanation: "Python often cares about behavior, not explicit type." },



  { question: "Which statement about typing hints is true?", answers: ["Always runtime enforced automatically", "Mainly for readability and static analysis", "Invalid in Python 3", "Only works in classes"], correct: 1, explanation: "Type hints guide tools and developers." },



  { question: "What is the default recursion limit behavior?", answers: ["Unlimited recursion", "Limited and can raise RecursionError", "Always stack optimized", "Depends only on OS"], correct: 1, explanation: "Python has recursion depth limit to protect stack." },



  { question: "Which collection is best for membership tests with many lookups?", answers: ["list", "tuple", "set", "deque"], correct: 2, explanation: "set lookup is average O(1)." },



  { question: "What does asyncio.gather() do?", answers: ["Runs tasks sequentially", "Runs awaitables concurrently and collects results", "Cancels all tasks always", "Creates new process"], correct: 1, explanation: "gather schedules multiple awaitables together." },



  { question: "What is a common use of heapq module?", answers: ["Regex parsing", "Priority queue operations", "Image processing", "JSON encoding"], correct: 1, explanation: "heapq provides min-heap helpers." },



  { question: "Which function is used for high-resolution timing?", answers: ["time.clock()", "time.perf_counter()", "time.tick()", "datetime.now only"], correct: 1, explanation: "perf_counter is recommended for benchmarking durations." },



  { question: "Which statement about defaultdict is correct?", answers: ["Raises KeyError for missing keys", "Provides default factory for missing keys", "Stores only integers", "Cannot store lists"], correct: 1, explanation: "defaultdict creates missing values automatically." },



  { question: "What does collections.Counter.most_common(1) return?", answers: ["Least common item", "Top frequent item with count", "Only keys list", "Only values list"], correct: 1, explanation: "most_common returns frequency-ranked pairs." },



  { question: "Which principle helps avoid circular imports?", answers: ["Put all code in one file", "Move shared logic to separate module", "Use wildcard imports everywhere", "Disable packages"], correct: 1, explanation: "Shared module extraction reduces import cycles." },



  { question: "What does '__aenter__' / '__aexit__' support?", answers: ["Synchronous context manager", "Asynchronous context manager", "Dataclass hooks", "Package setup"], correct: 1, explanation: "Async context managers work with async with." },



  { question: "Why use queue.Queue in threaded code?", answers: ["To sort data", "Thread-safe producer/consumer communication", "Serialize JSON", "Enforce typing"], correct: 1, explanation: "Queue safely shares work between threads." },



  { question: "Which module helps profile code hotspots?", answers: ["cProfile", "httplib", "pathlib", "sqlite3"], correct: 0, explanation: "cProfile measures function-level performance." },



  { question: "Which async primitive waits for several tasks then handles done/pending separately?", answers: ["asyncio.wait", "asyncio.sleep", "asyncio.run", "asyncio.open_connection"], correct: 0, explanation: "asyncio.wait returns done and pending task sets." }



];



const l8QuestionPool = [



  { question: "Which approach best improves Python performance for heavy numeric arrays?", answers: ["Use only pure Python loops", "Use NumPy vectorized operations", "Use print statements", "Use eval extensively"], correct: 1, explanation: "Vectorized NumPy operations are optimized in C." },



  { question: "What does the term 'idempotent function' usually mean in APIs?", answers: ["Returns random values", "Multiple identical calls have same effect", "Runs only once", "Requires async"], correct: 1, explanation: "Idempotent operations can be safely retried." },



  { question: "In Python packaging, what is pyproject.toml used for?", answers: ["Define build system and project metadata", "Store database tables", "Replace source files", "Configure browser"], correct: 0, explanation: "pyproject.toml is modern Python packaging config." },



  { question: "What is the benefit of using __all__ in a module?", answers: ["Encrypts variables", "Controls names exported by from module import *", "Improves CPU usage", "Disables imports"], correct: 1, explanation: "__all__ defines public API for wildcard imports." },



  { question: "Which scenario needs threading.Lock?", answers: ["Independent read-only operations", "Protect shared mutable state in threads", "Single-thread scripts", "JSON parsing"], correct: 1, explanation: "Locks avoid race conditions on shared state." },



  { question: "What is a race condition?", answers: ["Syntax typo", "Outcome depends on unpredictable timing of operations", "A package installer bug", "A recursion limit"], correct: 1, explanation: "Concurrent operations can interleave unexpectedly." },



  { question: "Which is true about Python's garbage collector?", answers: ["Only reference counting exists", "It handles cyclic references in addition to ref counting", "Runs only manually", "Deletes globals first"], correct: 1, explanation: "Python has cyclic GC on top of reference counting." },



  { question: "What does weakref module enable?", answers: ["Strong ownership of objects", "References that do not increase object ref count", "Faster loops", "Type checking"], correct: 1, explanation: "weak references avoid preventing garbage collection." },



  { question: "Which logging practice is recommended?", answers: ["Use print for production always", "Use logging module with levels", "Suppress all errors", "Write logs only in comments"], correct: 1, explanation: "logging provides levels, handlers, and structure." },



  { question: "What is the difference between == and is?", answers: ["No difference", "== compares value, is compares identity", "is compares value only", "== compares identity"], correct: 1, explanation: "Use is for identity (same object), == for equality." },



  { question: "Why prefer pathlib over raw string paths?", answers: ["It is slower but stylish", "Cleaner cross-platform path operations", "It only works on Linux", "It replaces OS"], correct: 1, explanation: "pathlib gives robust path APIs across OSes." },



  { question: "What does pytest fixture provide?", answers: ["Data encryption", "Reusable setup/teardown for tests", "Thread pool", "Package publishing"], correct: 1, explanation: "Fixtures manage test dependencies and setup." },



  { question: "Which complexity is typical for heap push/pop?", answers: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "Binary heap operations are logarithmic." },



  { question: "What is memoization?", answers: ["Deleting cache each call", "Caching function results for repeated inputs", "Serializing objects", "Compiling bytecode"], correct: 1, explanation: "Memoization trades memory for speed." },



  { question: "Best strategy for robust production code?", answers: ["No exception handling", "Validate inputs, handle errors, and log context", "Use global variables everywhere", "Disable tests"], correct: 1, explanation: "Production reliability depends on validation, error handling, and observability." },



  { question: "Which practice improves API client reliability?", answers: ["No timeout", "Use retry with backoff for transient failures", "Retry forever immediately", "Ignore exceptions"], correct: 1, explanation: "Backoff retries handle temporary network issues safely." },



  { question: "What is the purpose of semaphore in concurrency?", answers: ["Encrypt data", "Limit concurrent access to a resource", "Sort requests", "Parse URLs"], correct: 1, explanation: "Semaphores cap simultaneous workers/tasks." },



  { question: "Which statement about dependency pinning is true?", answers: ["Never pin versions", "Pinning improves reproducible deployments", "Pinning makes tests impossible", "Only pin in dev"], correct: 1, explanation: "Pinned versions reduce environment drift." },



  { question: "What does 'fail fast' usually mean?", answers: ["Hide errors until end", "Surface errors early with clear messages", "Always retry silently", "Disable validations"], correct: 1, explanation: "Early validation catches problems quickly." },



  { question: "Which approach helps secure secrets in production?", answers: ["Hardcode in source files", "Store in environment variables/secret manager", "Commit in gitignore file", "Put in frontend JS"], correct: 1, explanation: "Secrets should be externalized and protected." },



  { question: "Which is a good logging field for tracing requests?", answers: ["Random emoji", "Request ID / correlation ID", "File size only", "CPU brand"], correct: 1, explanation: "Correlation IDs help trace a request across services." },



  { question: "What does graceful shutdown aim to do?", answers: ["Kill process immediately", "Stop accepting new work and finish in-flight tasks", "Delete logs", "Reset DB"], correct: 1, explanation: "Graceful shutdown prevents data loss and partial work." },



  { question: "Which testing type checks modules together?", answers: ["Unit test", "Integration test", "Linting", "Type hinting"], correct: 1, explanation: "Integration tests validate combined behavior." },



  { question: "What is a common strategy for feature rollout safety?", answers: ["Ship to all users instantly", "Use feature flags with gradual rollout", "Disable monitoring", "Skip QA"], correct: 1, explanation: "Feature flags reduce blast radius and allow rollback." },



  { question: "What is observability primarily about?", answers: ["Only uptime percentage", "Understanding system behavior via logs, metrics, traces", "Writing longer comments", "Disabling alerts"], correct: 1, explanation: "Observability combines telemetry to diagnose system issues." }



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
function buildGeneratedPythonQuestionBank(total = 420) {
  const topics = [
    "variable scope", "list operations", "dictionary access", "set semantics", "tuple immutability",
    "string handling", "exception flow", "file I/O", "function defaults", "comprehensions",
    "iterators", "generators", "decorators", "context managers", "object model",
    "inheritance", "dunder methods", "type hints", "async/await", "thread safety",
    "process concurrency", "testing patterns", "packaging", "dependency management", "logging strategy",
    "performance profiling", "memory usage", "API robustness", "security practices", "error boundaries"
  ];
  const lenses = [
    "fundamental", "intermediate", "advanced", "debug", "design",
    "performance", "concurrency", "production", "edge-case", "review",
    "reliability", "maintenance", "testing", "runtime"
  ];
  const result = [];
  for (let i = 0; i < total; i += 1) {
    const topic = topics[i % topics.length];
    const lens = lenses[Math.floor(i / topics.length) % lenses.length];
    result.push({
      question: `Python ${lens} check ${i + 1}: Which statement about ${topic} is correct?`,
      answers: [
        `For ${topic}, follow explicit Python rules and validate assumptions in code.`,
        `For ${topic}, runtime errors should be ignored because tests are enough.`,
        `For ${topic}, mutability and side effects never affect correctness.`,
        `For ${topic}, code is safe if it only passes linting.`
      ],
      correct: 0,
      explanation: `Correct: ${topic} requires explicit, rule-based handling in Python.`
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
    const filler = generatedPythonQuestionBank.slice(fillerOffset).concat(generatedPythonQuestionBank.slice(0, fillerOffset));
    filler.forEach((q) => {
      if (selected.length < total) tryAdd(q);
    });
  }
  if (selected.length < total) {
    console.error(`Failed to build ${levelKey}: only ${selected.length}/${total} unique questions.`);
  }
  return selected.slice(0, total);
}
const generatedPythonQuestionBank = buildGeneratedPythonQuestionBank(420);
const usedPythonQuestionKeys = new Set();
const disjointLevelPools = {
  l1: pickDisjointPool("l1", [l1QuestionPool], usedPythonQuestionKeys, 25, 0),
  l2: pickDisjointPool("l2", [l2QuestionPool], usedPythonQuestionKeys, 25, 40),
  l3: pickDisjointPool("l3", [l3QuestionPool], usedPythonQuestionKeys, 25, 80),
  l4: pickDisjointPool("l4", [l4QuestionPool], usedPythonQuestionKeys, 25, 120),
  l5: pickDisjointPool("l5", [l5QuestionPool], usedPythonQuestionKeys, 25, 160),
  l6: pickDisjointPool("l6", [l6QuestionPool], usedPythonQuestionKeys, 25, 200),
  l7: pickDisjointPool("l7", [l7QuestionPool], usedPythonQuestionKeys, 25, 240),
  l8: pickDisjointPool("l8", [l8QuestionPool], usedPythonQuestionKeys, 25, 280),
  l9: pickDisjointPool("l9", [l7QuestionPool, l8QuestionPool], usedPythonQuestionKeys, 25, 320),
  l10: pickDisjointPool("l10", [l8QuestionPool, l7QuestionPool], usedPythonQuestionKeys, 25, 360)
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



const QUIZ_NAME = "python";



const QUIZ_PAGE = "py.html";



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



  const text = String(questionText || "").toLowerCase();



  const answer = String(correctAnswer || "").trim();



  if (text.includes("defines a function in python") || answer === "def") {



    return {



      concept: "Use def to create reusable blocks of code. Function name + parameters define the input, and return sends output back.",



      example: [



        "def greet(name):",



        "    return f\"Hello, {name}\"",



        "",



        "print(greet(\"Ram\"))  # Hello, Ram"



      ].join("\n")



    };



  }



  if (text.includes("immutable") || answer === "tuple") {



    return {



      concept: "Tuple is immutable, so values cannot be changed after creation. Use tuple when data should stay fixed.",



      example: [



        "data = (10, 20, 30)",



        "# data[0] = 99  -> TypeError",



        "print(data[0])  # 10"



      ].join("\n")



    };



  }



  if (text.includes("input()") || answer === "str") {



    return {



      concept: "input() always returns text in Python 3. Convert it when numeric operations are needed.",



      example: [



        "age_text = input(\"Enter age: \")",



        "age = int(age_text)",



        "print(age + 1)"



      ].join("\n")



    };



  }



  if (text.includes("keyword handles exceptions") || answer === "except") {



    return {



      concept: "Place risky code in try and handle failures in except so your program does not crash.",



      example: [



        "try:",



        "    num = int(\"x\")",



        "except ValueError:",



        "    print(\"Invalid number\")"



      ].join("\n")



    };



  }



  if (text.includes("list comprehension")) {



    return {



      concept: "List comprehension is a short way to build a list from another iterable.",



      example: [



        "nums = [1, 2, 3, 4]",



        "squares = [n * n for n in nums]",



        "print(squares)  # [1, 4, 9, 16]"



      ].join("\n")



    };



  }



  if (text.includes("map(function, iterable)") || text.includes("iterator")) {



    return {



      concept: "map returns a lazy iterator in Python 3. Convert to list if you want to print all results now.",



      example: [



        "result = map(lambda x: x * 2, [1, 2, 3])",



        "print(list(result))  # [2, 4, 6]"



      ].join("\n")



    };



  }



  if (text.includes("slicing s[::-1]") || answer.toLowerCase().includes("reversed")) {



    return {



      concept: "A negative step in slicing walks backward. [::-1] is the common reverse trick.",



      example: [



        "s = \"python\"",



        "print(s[::-1])  # nohtyp"



      ].join("\n")



    };



  }



  if (text.includes("yield") || text.includes("generator")) {



    return {



      concept: "Generators produce values one-by-one and save memory for large sequences.",



      example: [



        "def count_up(n):",



        "    for i in range(n):",



        "        yield i",



        "",



        "for x in count_up(3):",



        "    print(x)  # 0 1 2"



      ].join("\n")



    };



  }



  if (text.includes("async/await") || answer.toLowerCase().includes("event loop")) {



    return {



      concept: "async/await lets many waiting tasks run efficiently in one event loop.",



      example: [



        "import asyncio",



        "",



        "async def main():",



        "    await asyncio.sleep(1)",



        "    print(\"done\")",



        "",



        "asyncio.run(main())"



      ].join("\n")



    };



  }



  return {



    concept: String(explanationText || "Use the correct option based on Python syntax and behavior."),



    example: [



      "Question:",



      String(questionText || "").trim(),



      "",



      "Correct option:",



      answer,



      "",



      "Tip:",



      "Remember this rule and apply it in similar Python MCQs/interview questions."



    ].join("\n")



  };



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




