/* Wait until page loads */
document.addEventListener("DOMContentLoaded", function() {
  const trackEvent = (eventName, params = {}) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  };

  // Hero Start Quiz Button
  const startBtn = document.querySelector(".start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      trackEvent("start_quiz", {
        quiz_name: "catalog",
        source: "hero_start_button",
      });
      window.location.href = "cata.html";
    });
  }

  // Buttons with direct links (hero + cards)
  const linkButtons = document.querySelectorAll("button[data-link]");
  linkButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const link = btn.getAttribute("data-link");
      if (link) {
        if (/^[a-z0-9-]+\.html$/i.test(link) && !/-learn\.html$/i.test(link)) {
          trackEvent("start_quiz", {
            quiz_name: link.replace(".html", ""),
            source: btn.dataset.source || (btn.closest(".card") ? "category_card" : "quick_link_button"),
          });
        }
        window.location.href = link;
      }
    });
  });

  const heroPopularLinks = document.querySelectorAll(".hero-popular-link");
  heroPopularLinks.forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      const href = linkEl.getAttribute("href") || "";
      trackEvent("start_quiz", {
        quiz_name: (linkEl.dataset.quiz || href.replace(".html", "")),
        source: "hero_popular_links",
      });
    });
  });

  // Learn page click tracking
  const learnButtons = document.querySelectorAll("button[onclick*='-learn.html']");
  learnButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const onclick = btn.getAttribute("onclick") || "";
      const match = onclick.match(/'([^']*-learn\.html)'/i);
      const learnPage = match ? match[1] : "unknown";
      trackEvent("click_learn_page", {
        learn_page: learnPage.replace(".html", ""),
        source: "learn_button",
      });
    });
  });

  const learnLinks = document.querySelectorAll("a[href$='-learn.html']");
  learnLinks.forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      const href = linkEl.getAttribute("href") || "";
      trackEvent("click_learn_page", {
        learn_page: href.replace(".html", ""),
        source: "learn_link",
      });
    });
  });

  // Back to top button
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    const toggleBackToTop = () => {
      if (window.scrollY > 350) backToTopBtn.classList.add("show");
      else backToTopBtn.classList.remove("show");
    };
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
