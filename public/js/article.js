import '../css/article.css';

// Immediately disable scrolling so the browser doesn't jump to an anchor
document.documentElement.style.overflow = 'hidden';

// Immediately remove any hash from the URL and force scroll position to (0,0)
// (For extra reliability, consider placing this inline in your HTML's <head>)
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Listen for pageshow (handles back/forward cache)
window.addEventListener('pageshow', function (event) {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", function () {
  // Ensure scroll behavior is set to auto to avoid any smooth scroll on load
  document.documentElement.style.scrollBehavior = "auto";

  // Force scroll to top after DOM is ready
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Re-enable scrolling once we're sure the page is at the top
  document.documentElement.style.overflow = '';

  // Remove focus from any element that might trigger a jump
  if (document.activeElement && document.activeElement !== document.body) {
    document.activeElement.blur();
  }
  document.body.focus();

  // Main DOM-dependent code starts here
  const tocOpenButton = document.querySelector(".toc-open");
  const tocCloseButton = document.querySelector(".toc-close");
  const mobileTOC = document.querySelector(".mobile-toc");
  const mobileMenuButton = document.querySelector(".mobile-btn");
  const tocItems = document.querySelectorAll(".toc-item a");
  const sections = Array.from(tocItems).map(link => {
    const targetId = link.getAttribute("href").slice(1);
    return document.getElementById(targetId);
  });

  const offset = 80; // Adjust to match the height of your fixed header

  // Mobile TOC open/close functionality
  tocOpenButton.addEventListener("click", () => {
    mobileTOC.classList.add("active");
    mobileMenuButton.classList.add("disabled");
  });

  tocCloseButton.addEventListener("click", () => {
    mobileTOC.classList.remove("active");
    mobileMenuButton.classList.remove("disabled");
  });

  mobileMenuButton.addEventListener("click", (event) => {
    if (mobileMenuButton.classList.contains("disabled")) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  // Smooth scrolling for TOC links (only for user-triggered clicks)
  tocItems.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth" // Only applies on user-triggered actions
        });
      }
    });
  });

  // TOC Scroll Highlighting using IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: `-${offset}px 0px -50% 0px`,
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = sections.indexOf(entry.target);
      if (entry.isIntersecting) {
        tocItems.forEach(item => item.parentElement.classList.remove("toc-item-active"));
        if (index !== -1) {
          tocItems[index].parentElement.classList.add("toc-item-active");
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    if (section) observer.observe(section);
  });
});

// Also ensure that on full load we scroll to the top.
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
