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
const PASS_SCORE_BY_LEVEL = { l1: 10, l2: 15, l3: 20, l4: 22 };
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

if (nextBtn && nextBtn.parentElement !== document.body) document.body.appendChild(nextBtn);

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

pinNextButton();
window.addEventListener("resize", pinNextButton);

function snapToQuizTop() { if (quizContainerEl) quizContainerEl.scrollIntoView({ behavior: "smooth", block: "start" }); }
function formatLevel(level) { return level.toUpperCase(); }
function getPassScoreForLevel(level) { return PASS_SCORE_BY_LEVEL[level] || 20; }
function updateLevelMeta() { levelMetaEl.textContent = `Level ${formatLevel(currentLevel)} | Question ${currentQuestion + 1}/${quizData.length}`; }

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
    explanationEl.innerHTML = `<div class="feedback-title">Correct Answer</div><p>Great choice. <strong>${q.answers[correctIndex]}</strong> is right.</p><p>${q.explanation}</p>`;
  } else {
    explanationEl.className = "feedback-box feedback-wrong";
    explanationEl.innerHTML = `<div class="feedback-title">Wrong Answer</div><p>Correct option: <strong>${q.answers[correctIndex]}</strong></p><p>${q.explanation}</p>`;
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
  const ruleText = passed ? `Pass rule met (${score}/${quizData.length}).` : `Need ${currentPassScore}/${quizData.length} to unlock next level.`;
  const unlockText = unlockedLevel ? `<p>Unlocked ${formatLevel(unlockedLevel)}.</p>` : "";
  const nextLevelBtn = unlockedLevel ? `<button type="button" onclick="goToLevel('${unlockedLevel}')">Next Level</button>` : "";
  const googleLoginBtn = `<button type="button" onclick="goToGoogleLogin()">Login with Google</button>`;
  const loginBtn = `<button type="button" onclick="goToLogin()">Login to Save Achievement</button>`;

  resultEl.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3><p>${ruleText}</p>${unlockText}${nextLevelBtn}<button type="button" onclick="restartQuiz()">Try Again</button>${googleLoginBtn}${loginBtn}`;
}

function goToLevel(level) { setLevel(level); }
function goToGoogleLogin() { window.location.href = "index.html#google-login"; }
function goToLogin() { window.location.href = "index.html"; }

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







