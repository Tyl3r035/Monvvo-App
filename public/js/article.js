import '../css/article.css';

document.addEventListener("DOMContentLoaded", function () {
    const tocOpenButton = document.querySelector(".toc-open");
    const tocCloseButton = document.querySelector(".toc-close");
    const mobileTOC = document.querySelector(".mobile-toc");
    const mobileMenuButton = document.querySelector(".mobile-btn"); // Mobile menu button
    const tocItems = document.querySelectorAll(".toc-item a"); // TOC links
    const sections = Array.from(tocItems).map(link => {
        const targetId = link.getAttribute("href").slice(1);
        return document.getElementById(targetId);
    });

    const offset = 80; // Adjust to match the height of your fixed header

    // Open the mobile TOC
    tocOpenButton.addEventListener("click", () => {
        mobileTOC.classList.add("active"); // Slide in the TOC
        mobileMenuButton.classList.add("disabled"); // Disable the mobile menu button
    });

    // Close the mobile TOC
    tocCloseButton.addEventListener("click", () => {
        mobileTOC.classList.remove("active"); // Slide out the TOC
        mobileMenuButton.classList.remove("disabled"); // Re-enable the mobile menu button
    });

    // Prevent interaction with the disabled mobile menu button
    mobileMenuButton.addEventListener("click", (event) => {
        if (mobileMenuButton.classList.contains("disabled")) {
            event.preventDefault(); // Block any actions
            event.stopPropagation(); // Prevent bubbling
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
        root: null, // Use the viewport as the root
        rootMargin: `-${offset}px 0px -50% 0px`, // Adjust to align with the inner link scroll position
        threshold: 0 // Trigger as soon as the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = sections.indexOf(entry.target);
            if (entry.isIntersecting) {
                // Remove the active class from all TOC items
                tocItems.forEach(item => item.parentElement.classList.remove("toc-item-active"));
                // Add the active class to the current TOC item
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