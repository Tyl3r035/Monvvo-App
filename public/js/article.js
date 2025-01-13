import '../css/article.css';

// Prevent the browser from restoring scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener("DOMContentLoaded", function () {
    // Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = "auto";

    // Scroll to the top immediately
    window.scrollTo(0, 0);

    // Re-enable smooth scrolling after a full load
    window.addEventListener("load", () => {
        document.documentElement.style.scrollBehavior = "smooth";
    });

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

    // Open the mobile TOC
    tocOpenButton.addEventListener("click", () => {
        mobileTOC.classList.add("active");
        mobileMenuButton.classList.add("disabled");
    });

    // Close the mobile TOC
    tocCloseButton.addEventListener("click", () => {
        mobileTOC.classList.remove("active");
        mobileMenuButton.classList.remove("disabled");
    });

    // Prevent interaction with the disabled mobile menu button
    mobileMenuButton.addEventListener("click", (event) => {
        if (mobileMenuButton.classList.contains("disabled")) {
            event.preventDefault();
            event.stopPropagation();
        }
    });

    // Smooth scrolling for TOC links
    tocItems.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // TOC Scroll Highlighting
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

    // Observe each section
    sections.forEach(section => {
        if (section) observer.observe(section);
    });
});

// Ensure the page loads at the top during a full reload
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});
