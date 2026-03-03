const l1QuestionPool = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    correct: 0,
    explanation: "HTML stands for Hyper Text Markup Language."
  },
  {
    question: "Which tag is used for the largest heading?",
    answers: ["<h6>", "<head>", "<h1>", "<header>"],
    correct: 2,
    explanation: "<h1> represents the highest-level heading."
  },
  {
    question: "Which HTML tag creates a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
    explanation: "The anchor tag <a> creates links."
  },
  {
    question: "Which tag is used to insert an image?",
    answers: ["<picture>", "<src>", "<img>", "<image>"],
    correct: 2,
    explanation: "The <img> tag embeds an image."
  },
  {
    question: "Which attribute provides alternate text for images?",
    answers: ["title", "alt", "name", "text"],
    correct: 1,
    explanation: "alt provides accessibility text and fallback description."
  },
  {
    question: "Which HTML element is used to create an unordered list?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1,
    explanation: "<ul> creates a bulleted list."
  },
  {
    question: "Where should the <title> tag be placed?",
    answers: ["Inside <body>", "Inside <head>", "Inside <footer>", "Inside <main>"],
    correct: 1,
    explanation: "<title> belongs in the <head> section."
  },
  {
    question: "Which tag creates a line break?",
    answers: ["<break>", "<lb>", "<br>", "<newline>"],
    correct: 2,
    explanation: "<br> inserts a line break."
  },
  {
    question: "Which input type is used for email addresses?",
    answers: ["type='text'", "type='mail'", "type='email'", "type='address'"],
    correct: 2,
    explanation: "type='email' enables email validation."
  },
  {
    question: "Which semantic tag represents the main content?",
    answers: ["<section>", "<article>", "<main>", "<content>"],
    correct: 2,
    explanation: "<main> is for dominant page content."
  },
  {
    question: "Which attribute is required for accessible <img> tags?",
    answers: ["src", "alt", "width", "title"],
    correct: 1,
    explanation: "alt text is key for accessibility and fallback."
  },
  {
    question: "Which tag defines a paragraph?",
    answers: ["<para>", "<p>", "<pg>", "<paragraph>"],
    correct: 1,
    explanation: "<p> defines a paragraph in HTML."
  },
  {
    question: "Which tag defines a table row?",
    answers: ["<td>", "<th>", "<tr>", "<row>"],
    correct: 2,
    explanation: "<tr> defines a table row."
  },
  {
    question: "Which tag creates an ordered list?",
    answers: ["<ul>", "<ol>", "<li>", "<order>"],
    correct: 1,
    explanation: "<ol> creates a numbered list."
  },
  {
    question: "Which tag is semantically correct for strong importance?",
    answers: ["<b>", "<strong>", "<bold>", "<important>"],
    correct: 1,
    explanation: "<strong> conveys strong importance semantically."
  },
  {
    question: "Which tag represents emphasized text?",
    answers: ["<italic>", "<i>", "<em>", "<mark>"],
    correct: 2,
    explanation: "<em> is semantic emphasis."
  },
  {
    question: "Which input type creates a checkbox?",
    answers: ["radio", "check", "checkbox", "tick"],
    correct: 2,
    explanation: "type='checkbox' creates a checkbox control."
  },
  {
    question: "Which attribute must be unique in one HTML page?",
    answers: ["class", "style", "id", "name"],
    correct: 2,
    explanation: "id values must be unique in a document."
  },
  {
    question: "Which attribute can be reused on many elements?",
    answers: ["id", "class", "unique", "single"],
    correct: 1,
    explanation: "class can be shared by multiple elements."
  },
  {
    question: "Which tag links an external CSS file?",
    answers: ["<style>", "<css>", "<link>", "<script>"],
    correct: 2,
    explanation: "<link rel='stylesheet' ...> is used for external CSS."
  },
  {
    question: "Which tag loads an external JavaScript file?",
    answers: ["<javascript>", "<script>", "<js>", "<code>"],
    correct: 1,
    explanation: "<script src='...'></script> loads external JS."
  },
  {
    question: "Which tag is used to embed video?",
    answers: ["<media>", "<movie>", "<video>", "<embed-video>"],
    correct: 2,
    explanation: "<video> is the standard HTML video element."
  },
  {
    question: "What is the default method of an HTML form?",
    answers: ["POST", "GET", "PUT", "PATCH"],
    correct: 1,
    explanation: "If not specified, a form submits with GET."
  },
  {
    question: "Which attribute makes a form field mandatory?",
    answers: ["validate", "must", "required", "need"],
    correct: 2,
    explanation: "required forces input before form submission."
  },
  {
    question: "Which tag defines a table header cell?",
    answers: ["<td>", "<th>", "<theadcell>", "<head>"],
    correct: 1,
    explanation: "<th> defines a header cell in tables."
  }
];

const l2QuestionPool = [
  {
    question: "Which element is most appropriate for independent, reusable content like a blog post?",
    answers: ["<section>", "<article>", "<div>", "<main>"],
    correct: 1,
    explanation: "<article> is intended for self-contained, independently distributable content."
  },
  {
    question: "Which statement about <section> is correct?",
    answers: ["It must never contain headings", "It groups thematic content, usually with a heading", "It is identical to <div>", "It is deprecated"],
    correct: 1,
    explanation: "<section> represents a thematic grouping of content."
  },
  {
    question: "What is the primary purpose of the 'srcset' attribute in <img>?",
    answers: ["Add fallback text", "Provide responsive image sources", "Apply CSS styles", "Preload images only"],
    correct: 1,
    explanation: "srcset allows the browser to choose an appropriate image based on viewport/resolution."
  },
  {
    question: "Which attribute in <form> controls where submitted data is sent?",
    answers: ["target", "action", "method", "name"],
    correct: 1,
    explanation: "action defines the submission URL endpoint."
  },
  {
    question: "Which element improves accessibility by associating text with an input?",
    answers: ["<caption>", "<label>", "<legend>", "<span>"],
    correct: 1,
    explanation: "<label> explicitly binds readable text to a form control."
  },
  {
    question: "In HTML tables, which group element wraps column headers and body rows semantically?",
    answers: ["<thead> and <tbody>", "<head> and <body>", "<th> and <td>", "<col> and <row>"],
    correct: 0,
    explanation: "<thead> and <tbody> provide semantic grouping for table sections."
  },
  {
    question: "What does the 'defer' attribute on <script> do?",
    answers: ["Executes script immediately before parsing", "Delays script until HTML parsing is complete", "Loads script synchronously", "Runs script only on click"],
    correct: 1,
    explanation: "defer downloads in parallel and executes after document parsing."
  },
  {
    question: "Which meta tag is essential for proper mobile responsive scaling?",
    answers: ["<meta charset='UTF-8'>", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta name='keywords'>", "<meta http-equiv='refresh'>"],
    correct: 1,
    explanation: "Viewport meta is required for correct mobile layout scaling."
  },
  {
    question: "What is the valid relationship between <figure> and <figcaption>?",
    answers: ["figcaption must be outside figure", "figcaption provides caption for content inside figure", "figure cannot contain images", "figcaption is deprecated"],
    correct: 1,
    explanation: "<figcaption> labels content inside <figure> semantically."
  },
  {
    question: "Which input type provides a date picker in supporting browsers?",
    answers: ["type='calendar'", "type='datetime'", "type='date'", "type='time'"],
    correct: 2,
    explanation: "type='date' provides date selection UI where supported."
  },
  {
    question: "Which ARIA practice is better when native HTML can do the same job?",
    answers: ["Always prefer ARIA over native tags", "Use native semantic HTML first", "Use both indiscriminately", "Avoid semantics completely"],
    correct: 1,
    explanation: "Native semantics are preferred; ARIA supplements when needed."
  },
  {
    question: "What does the 'for' attribute on <label> reference?",
    answers: ["Input name", "Input value", "Input id", "Input class"],
    correct: 2,
    explanation: "label[for] must match the target input's id."
  },
  {
    question: "Which element is intended for navigation links?",
    answers: ["<aside>", "<nav>", "<menuitem>", "<links>"],
    correct: 1,
    explanation: "<nav> identifies major navigation blocks."
  },
  {
    question: "Which is true about multiple <main> elements on a page?",
    answers: ["Recommended for each section", "Allowed if hidden", "Only one visible main landmark should exist", "Required in every article"],
    correct: 2,
    explanation: "A document should generally have one main landmark."
  },
  {
    question: "What does 'autocomplete=\"off\"' on form controls request?",
    answers: ["Force browser to disable autofill always", "Ask browser not to autofill (browser may ignore)", "Encrypt submitted data", "Disable validation"],
    correct: 1,
    explanation: "It's a hint; browsers can override it in some contexts."
  },
  {
    question: "Which element semantically represents tangential content like sidebars?",
    answers: ["<summary>", "<aside>", "<section>", "<footer>"],
    correct: 1,
    explanation: "<aside> is for complementary/tangential content."
  },
  {
    question: "What is the purpose of the 'alt' attribute when image fails or for screen readers?",
    answers: ["Set image title tooltip only", "Provide text alternative", "Resize image", "Add SEO keywords only"],
    correct: 1,
    explanation: "alt provides accessible replacement text."
  },
  {
    question: "Which is a correct use of <button> inside a form when no submit is intended?",
    answers: ["<button>Click</button>", "<button type='button'>Click</button>", "<button type='none'>Click</button>", "<button submit='false'>Click</button>"],
    correct: 1,
    explanation: "Default button type is submit; use type='button' for non-submit actions."
  },
  {
    question: "Which element pairs with <details> for a clickable heading?",
    answers: ["<caption>", "<summary>", "<legend>", "<header>"],
    correct: 1,
    explanation: "<summary> provides the visible toggle label for <details>."
  },
  {
    question: "Which attribute adds client-side pattern validation for text input?",
    answers: ["regex", "validate", "pattern", "match"],
    correct: 2,
    explanation: "pattern uses regular expression constraints."
  },
  {
    question: "What is the role of <noscript>?",
    answers: ["Load scripts faster", "Provide fallback content when scripts are disabled", "Disable JavaScript errors", "Embed CSS only"],
    correct: 1,
    explanation: "<noscript> displays alternate content if scripting is unavailable."
  },
  {
    question: "Which attribute on <script> is used for ES modules?",
    answers: ["module='true'", "type='module'", "es='module'", "kind='module'"],
    correct: 1,
    explanation: "type='module' enables JavaScript module loading behavior."
  },
  {
    question: "For accessibility, what should icon-only buttons include?",
    answers: ["Only title attribute", "aria-label or visible text", "Bigger font-size only", "No additional text needed"],
    correct: 1,
    explanation: "Buttons need an accessible name, often via aria-label when no visible text."
  },
  {
    question: "Which element should contain introductory content for nearest section or page?",
    answers: ["<header>", "<top>", "<intro>", "<head>"],
    correct: 0,
    explanation: "<header> represents introductory content for sectioning/root contexts."
  },
  {
    question: "Which statement about IDs is correct?",
    answers: ["IDs can repeat freely", "IDs must be unique within a document", "IDs only for CSS, not JS", "IDs are deprecated"],
    correct: 1,
    explanation: "Each id value should be unique in one HTML document."
  }
];

const l3QuestionPool = [
  {
    question: "When should you use <button> instead of <a>?",
    answers: ["For navigation to another URL", "For triggering an action on the page", "Only inside tables", "Only with JavaScript disabled"],
    correct: 1,
    explanation: "Use <button> for actions; <a> for navigation."
  },
  {
    question: "Which is the most semantically correct structure for a site heading and nav?",
    answers: ["<div><div>title</div><div>links</div></div>", "<header><h1>...</h1><nav>...</nav></header>", "<main><h1>...</h1><nav>...</nav></main>", "<section><h1>...</h1><footer>...</footer></section>"],
    correct: 1,
    explanation: "<header> with <h1> and <nav> is semantically appropriate."
  },
  {
    question: "What is the main advantage of using <picture> with <source>?",
    answers: ["Adds alt text automatically", "Allows art direction and format switching", "Replaces CSS media queries", "Loads all images in parallel"],
    correct: 1,
    explanation: "<picture> supports source selection by media/type."
  },
  {
    question: "Which statement about ARIA roles is correct?",
    answers: ["Always add role='button' to <button>", "Don't override strong native semantics unnecessarily", "ARIA replaces HTML semantics", "Roles are required on every element"],
    correct: 1,
    explanation: "Prefer native semantics; add ARIA only when necessary."
  },
  {
    question: "Which attribute combination is best for external links opening new tab securely?",
    answers: ["target='_blank' only", "target='_blank' rel='noopener noreferrer'", "rel='nofollow' only", "target='_new'"],
    correct: 1,
    explanation: "noopener noreferrer mitigates reverse-tabnabbing/security concerns."
  },
  {
    question: "What is the purpose of <fieldset> and <legend>?",
    answers: ["Layout forms with flexbox", "Group related form controls with accessible caption", "Validate input patterns", "Submit grouped values as JSON"],
    correct: 1,
    explanation: "They provide semantic grouping and accessibility context."
  },
  {
    question: "Which is true about the 'hidden' attribute?",
    answers: ["Only hides visually, still announced as visible content", "Represents content not currently relevant", "Equivalent to display:inline", "Cannot be toggled with JS"],
    correct: 1,
    explanation: "hidden indicates non-relevant content and is typically not rendered."
  },
  {
    question: "How should heading levels be used for accessibility?",
    answers: ["Randomly by font size", "In logical hierarchical order", "Only <h1> and <h2> allowed", "Use div with bold instead"],
    correct: 1,
    explanation: "Assistive tech relies on meaningful heading hierarchy."
  },
  {
    question: "Which element is best for machine-readable date/time?",
    answers: ["<date>", "<time datetime='...'>", "<span data-date='...'>", "<meta time='...'>"],
    correct: 1,
    explanation: "<time> with datetime carries semantic temporal data."
  },
  {
    question: "What does 'aria-live=\"polite\"' do?",
    answers: ["Blocks keyboard focus", "Announces dynamic updates when convenient", "Forces immediate interruptive announcement", "Hides content from screen readers"],
    correct: 1,
    explanation: "polite queues announcements without interrupting current speech."
  },
  {
    question: "Why is placeholder not a replacement for label?",
    answers: ["Placeholder is always hidden", "Placeholder disappears and is not an accessible label", "Labels cannot be styled", "Placeholder submits with form"],
    correct: 1,
    explanation: "Persistent labels are needed for usability and accessibility."
  },
  {
    question: "Which element should contain copyright/footer links for a section/page?",
    answers: ["<bottom>", "<footer>", "<aside>", "<summary>"],
    correct: 1,
    explanation: "<footer> is semantic for footer information."
  },
  {
    question: "What is the effect of 'lang' attribute on <html>?",
    answers: ["Changes page color theme", "Helps screen readers/search engines interpret language", "Enables JS modules", "Sets keyboard layout automatically"],
    correct: 1,
    explanation: "lang improves accessibility, pronunciation, and indexing."
  },
  {
    question: "Which input pairing improves mobile keypad for numeric entry?",
    answers: ["type='text' only", "type='number' or inputmode='numeric'", "autocomplete='off'", "spellcheck='true'"],
    correct: 1,
    explanation: "number/inputmode hints better virtual keyboards."
  },
  {
    question: "What is the semantic purpose of <mark>?",
    answers: ["Strong importance", "Highlighted reference/relevance", "Deleted content", "Keyboard input"],
    correct: 1,
    explanation: "<mark> indicates highlighted text relevance."
  },
  {
    question: "Which is a valid reason to use data-* attributes?",
    answers: ["Replace all classes", "Store custom non-visible metadata for scripts", "Improve SEO ranking directly", "Define required form fields"],
    correct: 1,
    explanation: "data-* stores custom data on elements for script use."
  },
  {
    question: "What is correct about <meta charset='UTF-8'> placement?",
    answers: ["Anywhere in body", "Early in <head> for reliable parsing", "Only after stylesheets", "Only needed for forms"],
    correct: 1,
    explanation: "Place charset declaration early in head."
  },
  {
    question: "Which structure is best for accessible table headers?",
    answers: ["Only <td> in all cells", "Use <th scope='col/row'> where appropriate", "Use <b> for header text", "Avoid header cells"],
    correct: 1,
    explanation: "th with scope improves table navigation for assistive tech."
  },
  {
    question: "Why prefer <ul>/<ol> over repeated <div> for lists?",
    answers: ["Less CSS needed only", "Provides semantic list structure for users and AT", "Faster JavaScript execution", "Required by validator always"],
    correct: 1,
    explanation: "Semantic list markup conveys structure and meaning."
  },
  {
    question: "Which is true for duplicate id values?",
    answers: ["Always safe", "Can break label targeting, CSS/JS selection, and accessibility", "Only affects CSS", "Only affects older browsers"],
    correct: 1,
    explanation: "Duplicate IDs create ambiguous references."
  },
  {
    question: "What is the best semantic element for quoted block from another source?",
    answers: ["<q>", "<blockquote>", "<cite>", "<quote>"],
    correct: 1,
    explanation: "<blockquote> is used for extended quotations."
  },
  {
    question: "Which element should wrap contact information for nearest section/page?",
    answers: ["<contact>", "<address>", "<footer>", "<details>"],
    correct: 1,
    explanation: "<address> is intended for contact information."
  },
  {
    question: "What does preload='none' on <video> suggest?",
    answers: ["Always preload full video", "Do not preload media data until user interaction", "Disable controls", "Autoplay muted"],
    correct: 1,
    explanation: "It hints to avoid preloading media to save bandwidth."
  },
  {
    question: "Which option best improves keyboard accessibility for custom widgets?",
    answers: ["Mouse events only", "Proper focus management and keyboard handlers", "Hidden div wrappers", "Disable tab navigation"],
    correct: 1,
    explanation: "Custom widgets need keyboard and focus support."
  },
  {
    question: "Which statement about semantic HTML is most accurate?",
    answers: ["Only useful for styling", "Improves accessibility, maintainability, and discoverability", "Slows page rendering", "Replaced entirely by ARIA"],
    correct: 1,
    explanation: "Semantic HTML provides meaningful structure for many consumers."
  }
];

const l4QuestionPool = [
  {
    question: "For complex data tables, what improves header-cell association best?",
    answers: ["Only bold text", "th with proper scope or headers/id mapping", "Extra div wrappers", "Inline styles"],
    correct: 1,
    explanation: "Accessible table relationships need semantic header associations."
  },
  {
    question: "Why should ARIA not replace semantic HTML unnecessarily?",
    answers: ["ARIA is deprecated", "Native semantics are generally more robust and simpler", "ARIA breaks CSS", "ARIA only works in Chrome"],
    correct: 1,
    explanation: "Use native semantics first, then ARIA where required."
  },
  {
    question: "What is the best use of <time datetime='...'>?",
    answers: ["Styling dates", "Machine-readable temporal data with human-readable display", "Timezone conversion", "Form validation"],
    correct: 1,
    explanation: "time + datetime improves semantic meaning for tools and assistive tech."
  },
  {
    question: "For icon-only button accessibility, what is required?",
    answers: ["Larger icon", "aria-label or equivalent accessible name", "Tooltip only", "No change needed"],
    correct: 1,
    explanation: "Controls need accessible names for screen readers."
  },
  {
    question: "What is a key benefit of logical heading hierarchy?",
    answers: ["Faster rendering", "Improved document navigation for assistive technologies", "Smaller bundle", "Auto SEO rank"],
    correct: 1,
    explanation: "Heading hierarchy communicates structure and aids navigation."
  },
  {
    question: "What does rel='noopener noreferrer' protect against with target='_blank'?",
    answers: ["CSS injection", "Reverse tabnabbing and referrer leakage", "Slow images", "Cookie expiry"],
    correct: 1,
    explanation: "noopener prevents opened page from controlling opener; noreferrer strips referrer."
  },
  {
    question: "When is <article> preferred over <section>?",
    answers: ["Always", "For independently reusable/distributable content", "Only for news sites", "Never"],
    correct: 1,
    explanation: "article suits self-contained content units."
  },
  {
    question: "Which pattern is best for form accessibility?",
    answers: ["Placeholder-only labels", "Explicit labels linked by for/id", "Title attribute only", "CSS pseudo labels"],
    correct: 1,
    explanation: "Explicit labels improve usability and accessibility consistency."
  },
  {
    question: "What is true about duplicate id attributes in HTML?",
    answers: ["Safe in modern browsers", "Can break JS/CSS targeting and accessibility mapping", "Only affects style", "Allowed in forms"],
    correct: 1,
    explanation: "IDs should be unique within a document."
  },
  {
    question: "What is the best semantic container for primary page content?",
    answers: ["div", "main", "section", "article"],
    correct: 1,
    explanation: "main identifies primary unique content of page."
  },
  {
    question: "For responsive images with art direction, which element is best?",
    answers: ["img only", "picture with source", "canvas", "figure only"],
    correct: 1,
    explanation: "picture allows source selection by media/type."
  },
  {
    question: "What does aria-live='polite' imply?",
    answers: ["Immediate interruption", "Announce dynamic updates when convenient", "Hidden from AT", "Disable keyboard focus"],
    correct: 1,
    explanation: "polite queues announcements without interrupting current speech."
  },
  {
    question: "Why use semantic list elements over repeated divs?",
    answers: ["Only for CSS speed", "To convey list structure to users/assistive tech", "Required by JavaScript", "Smaller HTML"],
    correct: 1,
    explanation: "ul/ol/li encode structural meaning and improve navigation."
  },
  {
    question: "For non-submit button inside form, which is correct?",
    answers: ["button without type", "button type='button'", "button type='none'", "div role button"],
    correct: 1,
    explanation: "Default button type is submit; specify type=button for actions."
  },
  {
    question: "What is the value of semantic HTML in advanced projects?",
    answers: ["Only visual styling", "Improves accessibility, maintainability, and machine understanding", "Replaces CSS", "Removes need for JS"],
    correct: 1,
    explanation: "Semantic HTML improves structure quality and interoperability."
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
const QUIZ_NAME = "html";
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

























