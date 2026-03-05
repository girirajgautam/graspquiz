const l1QuestionPool = [
  { question: "Which data structure follows FIFO order?", answers: ["Stack", "Queue", "Tree", "Graph"], correct: 1, explanation: "Queue processes elements in First-In-First-Out order." },
  { question: "Which data structure follows LIFO order?", answers: ["Queue", "Stack", "Heap", "Trie"], correct: 1, explanation: "Stack processes elements in Last-In-First-Out order." },
  { question: "Which algorithm finds an element in sorted array in O(log n)?", answers: ["Linear Search", "Binary Search", "Bubble Sort", "DFS"], correct: 1, explanation: "Binary search halves search space each step." },
  { question: "What is worst-case time complexity of linear search?", answers: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 2, explanation: "Linear search may scan all n elements." },
  { question: "Which traversal uses queue in trees?", answers: ["DFS", "Inorder", "BFS", "Postorder"], correct: 2, explanation: "BFS level-order traversal uses a queue." },
  { question: "Which sort repeatedly swaps adjacent out-of-order elements?", answers: ["Merge sort", "Quick sort", "Bubble sort", "Heap sort"], correct: 2, explanation: "Bubble sort compares adjacent pairs repeatedly." },
  { question: "What is time complexity of accessing array element by index?", answers: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correct: 0, explanation: "Array index access is constant time." },
  { question: "Which structure stores key-value pairs with near O(1) average lookup?", answers: ["Linked list", "Hash table", "Binary tree", "Stack"], correct: 1, explanation: "Hash table provides average constant-time access." },
  { question: "In a min-heap, parent is:", answers: ["Greater than children", "Less than or equal to children", "Random", "Equal to all nodes"], correct: 1, explanation: "Min-heap keeps smallest value at root with parent <= children." },
  { question: "Which graph traversal is commonly implemented with recursion?", answers: ["BFS", "DFS", "Dijkstra", "Kruskal"], correct: 1, explanation: "DFS is naturally implemented recursively with stack behavior." },
  { question: "What is a node with no children in a tree called?", answers: ["Root", "Leaf", "Branch", "Parent"], correct: 1, explanation: "Leaf nodes have no children." },
  { question: "Which algorithm is used to find shortest path in weighted graph (non-negative)?", answers: ["BFS", "DFS", "Dijkstra", "Topological sort"], correct: 2, explanation: "Dijkstra solves shortest paths with non-negative edges." },
  { question: "What is Big-O notation used for?", answers: ["Memory address", "Runtime/space growth rate", "Data encryption", "Code syntax"], correct: 1, explanation: "Big-O describes asymptotic complexity." },
  { question: "Which sort has average O(n log n)?", answers: ["Bubble sort", "Selection sort", "Quick sort", "Insertion sort"], correct: 2, explanation: "Quick sort is average O(n log n)." },
  { question: "Which data structure is best for implementing undo operations?", answers: ["Queue", "Stack", "Heap", "Trie"], correct: 1, explanation: "Undo typically uses stack to reverse last actions." }
];

const l2QuestionPool = [
  { question: "What is worst-case time complexity of quicksort?", answers: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correct: 2, explanation: "Bad pivots can cause O(n^2) quicksort." },
  { question: "Which traversal of BST gives sorted output?", answers: ["Preorder", "Inorder", "Postorder", "Level order"], correct: 1, explanation: "Inorder traversal of BST visits keys in sorted order." },
  { question: "What is space complexity of recursive DFS (worst case)?", answers: ["O(1)", "O(log n)", "O(V)", "O(E)"], correct: 2, explanation: "Recursion stack can go up to number of vertices." },
  { question: "Which data structure is used in BFS?", answers: ["Stack", "Queue", "Priority queue", "Set only"], correct: 1, explanation: "BFS explores layer-by-layer using queue." },
  { question: "What is amortized time of dynamic array append?", answers: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correct: 0, explanation: "Resizing cost spread out gives amortized O(1)." },
  { question: "Which algorithm detects cycle in directed graph using DFS colors/states?", answers: ["KMP", "Tarjan-style DFS state tracking", "Prim", "Bellman-Ford only"], correct: 1, explanation: "DFS with visiting/visited states can detect back edges." },
  { question: "What is a collision in hash table?", answers: ["Invalid key", "Two keys map to same bucket/index", "Deleted node", "Out of memory"], correct: 1, explanation: "Collision occurs when hash outputs same slot." },
  { question: "Which technique resolves collisions by linked lists per bucket?", answers: ["Open addressing", "Chaining", "Double hashing", "Rebalancing"], correct: 1, explanation: "Chaining stores multiple items per bucket." },
  { question: "What is height of balanced BST usually?", answers: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], correct: 1, explanation: "Balanced BST height remains logarithmic." },
  { question: "What does stable sorting mean?", answers: ["Always O(n log n)", "Equal keys keep relative order", "No extra space", "Randomized pivot"], correct: 1, explanation: "Stability preserves order of equal elements." },
  { question: "Which sort is stable by default?", answers: ["Heap sort", "Merge sort", "Quick sort", "Selection sort"], correct: 1, explanation: "Merge sort is stable in standard implementations." },
  { question: "In graph terms, what is an adjacency list good for?", answers: ["Dense graphs only", "Sparse graph memory efficiency", "Always O(1) edge check", "No traversal support"], correct: 1, explanation: "Adjacency list is space-efficient for sparse graphs." },
  { question: "What does topological sort require?", answers: ["Undirected graph", "Tree", "Directed acyclic graph", "Weighted graph"], correct: 2, explanation: "Topological ordering exists only in DAG." },
  { question: "Which algorithm builds MST using edge sorting + DSU?", answers: ["Prim", "Kruskal", "Dijkstra", "Floyd-Warshall"], correct: 1, explanation: "Kruskal sorts edges and uses union-find." },
  { question: "What operation does union-find optimize?", answers: ["Shortest path", "Connectivity/component merging queries", "String matching", "Matrix multiplication"], correct: 1, explanation: "DSU handles union/find for components efficiently." }
];

const l3QuestionPool = [
  { question: "Time complexity of heap sort in worst case is:", answers: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correct: 1, explanation: "Heap sort runs in O(n log n) worst-case." },
  { question: "Which structure supports efficient prefix search?", answers: ["Heap", "Trie", "Queue", "Stack"], correct: 1, explanation: "Trie is optimized for prefix-based lookup." },
  { question: "What is the average case lookup in balanced BST?", answers: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "Balanced BST search is logarithmic." },
  { question: "Bellman-Ford can handle:", answers: ["Only positive weights", "Negative edges (and detect negative cycles)", "Only DAG", "Unweighted graphs only"], correct: 1, explanation: "Bellman-Ford supports negative edges and cycle detection." },
  { question: "What is dynamic programming mainly about?", answers: ["Randomization", "Divide and ignore overlap", "Reuse overlapping subproblem results", "Tree traversal only"], correct: 2, explanation: "DP stores/reuses subproblem answers." },
  { question: "Memoization is:", answers: ["Bottom-up DP table", "Top-down caching", "Sorting method", "Graph representation"], correct: 1, explanation: "Memoization caches recursive results (top-down)." },
  { question: "Which algorithm finds all-pairs shortest paths?", answers: ["Dijkstra", "BFS", "Floyd-Warshall", "KMP"], correct: 2, explanation: "Floyd-Warshall computes all-pairs shortest paths." },
  { question: "What is complexity of BFS traversal over graph (V vertices, E edges)?", answers: ["O(V)", "O(E)", "O(V + E)", "O(VE)"], correct: 2, explanation: "BFS visits each vertex and edge at most once." },
  { question: "In recursion, stack overflow mainly occurs due to:", answers: ["Too many loops", "Missing/incorrect base case", "Using arrays", "Using hash tables"], correct: 1, explanation: "Without correct base case recursion may not terminate." },
  { question: "Which approach is greedy?", answers: ["Always tries global optimum directly", "Builds local best choices hoping global optimum", "Checks all subsets", "Uses memoization only"], correct: 1, explanation: "Greedy picks locally optimal choice at each step." },
  { question: "What is the typical use of sliding window technique?", answers: ["Tree balancing", "Optimize subarray/substring range problems", "Graph coloring", "Heap construction"], correct: 1, explanation: "Sliding window handles contiguous range efficiently." },
  { question: "Which structure helps O(1) retrieval of minimum with push/pop stack operations (with extra tracking)?", answers: ["Simple queue", "Min stack", "Linked list", "Trie"], correct: 1, explanation: "Min stack tracks current min alongside values." },
  { question: "What does backtracking usually do?", answers: ["Never revisits decisions", "Try choice, recurse, undo choice", "Sort array only", "Hash all values"], correct: 1, explanation: "Backtracking explores search space with undo steps." },
  { question: "Which complexity is better for sorting large n?", answers: ["O(n^2)", "O(n log n)", "O(n^3)", "O(2^n)"], correct: 1, explanation: "O(n log n) scales much better than quadratic/cubic." },
  { question: "What is the primary purpose of pruning in search algorithms?", answers: ["Increase memory", "Avoid exploring branches that cannot yield better solution", "Guarantee O(1)", "Convert graph to tree"], correct: 1, explanation: "Pruning cuts unnecessary branches to reduce work." }
];

const l4QuestionPool = [
  { question: "What is the amortized complexity of union/find with path compression + union by rank?", answers: ["O(log n)", "O(alpha(n))", "O(1) strict", "O(n)"], correct: 1, explanation: "Disjoint set operations are effectively near-constant with inverse Ackermann complexity." },
  { question: "Which algorithm solves all-pairs shortest path with O(V^3)?", answers: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Kruskal"], correct: 2, explanation: "Floyd-Warshall computes shortest paths between all vertex pairs." },
  { question: "When does Dijkstra fail to be correct?", answers: ["Dense graphs", "Negative edge weights", "Sparse graphs", "Undirected graphs"], correct: 1, explanation: "Dijkstra assumes non-negative edge weights." },
  { question: "What is key insight behind dynamic programming?", answers: ["Random choices", "Overlapping subproblems + optimal substructure", "Greedy local optimum always", "Only recursion"], correct: 1, explanation: "DP caches/reuses subproblem results when structure permits." },
  { question: "What is the typical complexity of segment tree range query/update?", answers: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "Segment trees support logarithmic range operations." },
  { question: "What does topological sorting require?", answers: ["Connected graph", "Weighted DAG", "Directed acyclic graph", "Tree only"], correct: 2, explanation: "Topological order exists only in DAGs." },
  { question: "What is the purpose of pruning in backtracking?", answers: ["Increase branches", "Skip branches that cannot lead to valid/better solutions", "Sort input", "Ensure O(1)"], correct: 1, explanation: "Pruning cuts unnecessary exploration and improves performance." },
  { question: "What is complexity of BFS on graph with V vertices and E edges?", answers: ["O(V)", "O(E)", "O(V + E)", "O(VE)"], correct: 2, explanation: "BFS visits each vertex and edge at most once." },
  { question: "What is the stable property in sorting?", answers: ["Always in-place", "Equal keys preserve original relative order", "Works only on arrays", "Requires O(1) space"], correct: 1, explanation: "Stability matters when sorting by multiple keys."
  },
  { question: "Which data structure best supports prefix searches?", answers: ["Heap", "Trie", "Queue", "Hash set"], correct: 1, explanation: "Trie nodes represent prefixes, enabling efficient prefix queries." },
  { question: "For MST, which approach uses cut property and priority queue from a start node?", answers: ["Kruskal", "Prim", "Dijkstra", "Floyd"], correct: 1, explanation: "Prim grows MST by repeatedly adding minimum crossing edge." },
  { question: "What recurrence describes binary search complexity?", answers: ["T(n)=T(n-1)+1", "T(n)=T(n/2)+O(1)", "T(n)=2T(n/2)+n", "T(n)=T(n-2)+1"], correct: 1, explanation: "Search space halves each step." },
  { question: "What is space complexity of recursive DFS in worst-case graph depth?", answers: ["O(1)", "O(log V)", "O(V)", "O(E)"], correct: 2, explanation: "Call stack can grow up to V in worst-case depth." },
  { question: "What is a monotonic stack useful for?", answers: ["Graph coloring", "Next greater/smaller element type problems", "MST only", "Hashing strings"], correct: 1, explanation: "Maintains ordered candidates to answer nearest greater/smaller efficiently." },
  { question: "Why can greedy algorithms fail on some optimization problems?", answers: ["They are always incorrect", "Local optimum choices may not produce global optimum", "Too much memory", "Cannot sort input"], correct: 1, explanation: "Greedy needs proof (exchange/cut arguments) to ensure global optimality." }
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

function buildGeneratedDsaQuestionBank(total = 420) {
  const topics = [
    "array indexing", "linked list traversal", "stack operations", "queue operations", "binary search",
    "two pointers", "sliding window", "hashing", "sorting stability", "heap properties",
    "BST traversal", "tree height", "graph BFS", "graph DFS", "shortest path constraints",
    "topological ordering", "union-find", "dynamic programming state", "greedy choice", "backtracking pruning",
    "recurrence analysis", "amortized complexity", "space tradeoffs", "edge cases", "invariants",
    "cycle detection", "prefix structures", "range queries", "monotonic structures", "complexity bounds"
  ];
  const lenses = [
    "fundamental", "intermediate", "advanced", "debug", "design",
    "proof", "performance", "review", "contest", "interview",
    "edge-case", "optimization", "runtime", "maintenance"
  ];
  const result = [];
  for (let i = 0; i < total; i += 1) {
    const topic = topics[i % topics.length];
    const lens = lenses[Math.floor(i / topics.length) % lenses.length];
    result.push({
      question: `DSA ${lens} check ${i + 1}: Which statement about ${topic} is correct?`,
      answers: [
        `For ${topic}, apply the precise data-structure/algorithm rule and validate complexity assumptions.`,
        `For ${topic}, asymptotic complexity does not matter if sample tests pass.`,
        `For ${topic}, edge cases can be ignored when input size is large.`,
        `For ${topic}, implementation details never affect correctness.`
      ],
      correct: 0,
      explanation: `Correct: ${topic} requires exact rule-based reasoning and complexity awareness.`
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
    const filler = generatedDsaQuestionBank.slice(fillerOffset).concat(generatedDsaQuestionBank.slice(0, fillerOffset));
    filler.forEach((q) => {
      if (selected.length < total) tryAdd(q);
    });
  }

  if (selected.length < total) {
    console.error(`Failed to build ${levelKey}: only ${selected.length}/${total} unique questions.`);
  }

  return selected.slice(0, total);
}

const generatedDsaQuestionBank = buildGeneratedDsaQuestionBank(420);
const usedDsaQuestionKeys = new Set();

const disjointLevelPools = {
  l1: pickDisjointPool("l1", [l1QuestionPool], usedDsaQuestionKeys, 25, 0),
  l2: pickDisjointPool("l2", [l2QuestionPool], usedDsaQuestionKeys, 25, 40),
  l3: pickDisjointPool("l3", [l3QuestionPool], usedDsaQuestionKeys, 25, 80),
  l4: pickDisjointPool("l4", [l4QuestionPool], usedDsaQuestionKeys, 25, 120),
  l5: pickDisjointPool("l5", [l1QuestionPool, l2QuestionPool], usedDsaQuestionKeys, 25, 160),
  l6: pickDisjointPool("l6", [l2QuestionPool, l3QuestionPool], usedDsaQuestionKeys, 25, 200),
  l7: pickDisjointPool("l7", [l3QuestionPool, l4QuestionPool], usedDsaQuestionKeys, 25, 240),
  l8: pickDisjointPool("l8", [l4QuestionPool], usedDsaQuestionKeys, 25, 280),
  l9: pickDisjointPool("l9", [l3QuestionPool, l4QuestionPool], usedDsaQuestionKeys, 25, 320),
  l10: pickDisjointPool("l10", [l4QuestionPool, l3QuestionPool], usedDsaQuestionKeys, 25, 360)
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
const QUIZ_NAME = "dsa";
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

  if (text.includes("fifo") || text.includes("queue")) {
    return {
      concept: "Queue follows FIFO: first inserted element is removed first.",
      example: [
        "from collections import deque",
        "q = deque([1, 2])",
        "q.append(3)",
        "print(q.popleft())  # 1"
      ].join("\n")
    };
  }

  if (text.includes("lifo") || text.includes("stack")) {
    return {
      concept: "Stack follows LIFO: last inserted element comes out first.",
      example: [
        "st = []",
        "st.append(10)",
        "st.append(20)",
        "print(st.pop())  # 20"
      ].join("\n")
    };
  }

  if (text.includes("bfs") || text.includes("queue in trees") || text.includes("queue in graphs")) {
    return {
      concept: "BFS explores level-by-level using a queue.",
      example: [
        "from collections import deque",
        "q = deque([start])",
        "while q:",
        "    node = q.popleft()",
        "    # visit neighbors"
      ].join("\n")
    };
  }

  if (text.includes("dfs") || text.includes("recursion")) {
    return {
      concept: "DFS explores deep first, usually with recursion or stack.",
      example: [
        "def dfs(node):",
        "    if not node: return",
        "    dfs(node.left)",
        "    dfs(node.right)"
      ].join("\n")
    };
  }

  if (text.includes("hash") || text.includes("o(1)") || text.includes("lookup")) {
    return {
      concept: "Hash tables give average O(1) insert/search/delete using key hashing.",
      example: [
        "d = {}",
        "d['a'] = 10",
        "print(d['a'])  # O(1) average"
      ].join("\n")
    };
  }

  if (text.includes("binary search") || text.includes("sorted")) {
    return {
      concept: "Binary search halves search space each step on sorted data.",
      example: [
        "l, r = 0, n-1",
        "while l <= r:",
        "    m = (l+r)//2",
        "    # compare and move l/r"
      ].join("\n")
    };
  }

  if (text.includes("dynamic programming") || text.includes("dp")) {
    return {
      concept: "DP stores subproblem answers to avoid recomputation.",
      example: [
        "dp = [0]*(n+1)",
        "dp[0], dp[1] = 0, 1",
        "for i in range(2, n+1):",
        "    dp[i] = dp[i-1] + dp[i-2]"
      ].join("\n")
    };
  }

  if (text.includes("time complexity") || text.includes("space complexity")) {
    return {
      concept: "Complexity estimates growth with input size and guides data-structure choice.",
      example: [
        "Array index access: O(1)",
        "Linear search: O(n)",
        "Binary search: O(log n)"
      ].join("\n")
    };
  }

  return {
    concept: String(explanationText || "Use the correct option based on core DSA concepts."),
    example: [
      "Question:",
      String(questionText || "").trim(),
      "",
      "Correct option:",
      answer,
      "",
      "Tip:",
      "Identify data structure + operation first, then choose answer."
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

// Immediate proof that script loaded and question pool exists.
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





















