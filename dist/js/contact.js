document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const title = item.querySelector(".faq-title");
        const content = item.querySelector(".faq-text");

        // Initially hide the content
        content.style.display = "none";

        // Add click event to toggle visibility
        title.addEventListener("click", () => {
            const isVisible = content.style.display === "block";
            content.style.display = isVisible ? "none" : "block";

            // Optional: Add an active class for styling
            item.classList.toggle("active", !isVisible);
        });
    });
});
