(function () {
  const root = document.body;
  const subjectName = root.getAttribute("data-subject-name") || "Quiz";
  const quizFile = root.getAttribute("data-quiz-file");
  const quizLink = root.getAttribute("data-quiz-link") || "index.html";

  const titleEl = document.getElementById("learnTitle");
  const subtitleEl = document.getElementById("learnSubtitle");
  const gridEl = document.getElementById("learnGrid");
  const backQuizEl = document.getElementById("backQuiz");

  if (titleEl) titleEl.textContent = `Learn ${subjectName}: All Questions With Answers`;
  if (subtitleEl) subtitleEl.textContent = "Includes every question from L1, L2, L3, and L4 pools with richer explanations.";
  if (backQuizEl) {
    backQuizEl.setAttribute("href", quizLink);
    backQuizEl.textContent = `Back to ${subjectName} Quiz`;
  }
  if (!gridEl) return;

  function extractPool(content, poolName) {
    const marker = `const ${poolName} = [`;
    const start = content.indexOf(marker);
    if (start < 0) return [];

    let i = content.indexOf("[", start);
    let depth = 0;
    let end = -1;

    for (; i < content.length; i++) {
      const ch = content[i];
      if (ch === "[") depth++;
      else if (ch === "]") {
        depth--;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }

    if (end < 0) return [];
    const arrayLiteral = content.slice(content.indexOf("[", start), end + 1);

    try {
      return Function(`"use strict"; return (${arrayLiteral});`)();
    } catch (_error) {
      return [];
    }
  }

  function buildDetailedExplanation(item, answerText) {
    const base = String(item.explanation || "").trim();
    const deeper = [
      `Why this answer is correct: the best choice is \"${answerText}\" because it directly satisfies what the question asks.`,
      "Interview tip: quickly eliminate options that are similar but technically inaccurate.",
      "Common mistake: selecting a familiar term without checking exact behavior or syntax in this language/topic."
    ].join(" ");

    return base ? `${base} ${deeper}` : deeper;
  }

  function renderLevel(levelName, items) {
    const section = document.createElement("section");
    section.className = "learn-level";

    const heading = document.createElement("h3");
    heading.className = "learn-level-title";
    heading.textContent = `${levelName} (${items.length} questions)`;
    section.appendChild(heading);

    items.forEach((item, idx) => {
      const answers = Array.isArray(item.answers) ? item.answers : [];
      const answerText = answers[item.correct] || "N/A";

      const card = document.createElement("article");
      card.className = "learn-card";

      const qEl = document.createElement("div");
      qEl.className = "learn-q";
      qEl.textContent = `${idx + 1}. ${item.question}`;

      const ansEl = document.createElement("div");
      ansEl.className = "learn-answer";
      ansEl.textContent = `Correct Answer: ${answerText}`;

      const explainEl = document.createElement("p");
      explainEl.className = "learn-explain";
      explainEl.textContent = buildDetailedExplanation(item, answerText);

      card.appendChild(qEl);
      card.appendChild(ansEl);
      card.appendChild(explainEl);
      section.appendChild(card);
    });

    gridEl.appendChild(section);
  }

  function renderAll(l1, l2, l3, l4) {
    gridEl.innerHTML = "";
    renderLevel("L1", l1 || []);
    renderLevel("L2", l2 || []);
    renderLevel("L3", l3 || []);
    renderLevel("L4", l4 || []);
  }

  function renderError(message) {
    gridEl.innerHTML = `<article class="learn-card"><div class="learn-q">Unable to load study data</div><p class="learn-explain">${message}</p></article>`;
  }

  const localL1 = typeof l1QuestionPool !== "undefined" ? l1QuestionPool : [];
  const localL2 = typeof l2QuestionPool !== "undefined" ? l2QuestionPool : [];
  const localL3 = typeof l3QuestionPool !== "undefined" ? l3QuestionPool : [];
  const localL4 = typeof l4QuestionPool !== "undefined" ? l4QuestionPool : [];

  if (localL1.length || localL2.length || localL3.length || localL4.length) {
    renderAll(localL1, localL2, localL3, localL4);
    return;
  }

  if (!quizFile) {
    renderError("Quiz source file is not configured.");
    return;
  }

  fetch(quizFile)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${quizFile}`);
      return res.text();
    })
    .then((content) => {
      const l1 = extractPool(content, "l1QuestionPool");
      const l2 = extractPool(content, "l2QuestionPool");
      const l3 = extractPool(content, "l3QuestionPool");
      const l4 = extractPool(content, "l4QuestionPool");

      if (!l1.length && !l2.length && !l3.length && !l4.length) {
        throw new Error("No question pools found in the quiz file.");
      }

      renderAll(l1, l2, l3, l4);
    })
    .catch((error) => {
      renderError(error.message || "Unknown error.");
    });
})();
