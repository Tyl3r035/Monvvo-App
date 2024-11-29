// document.addEventListener("DOMContentLoaded", () => {
//     const faqItems = document.querySelectorAll(".faq-item");

//     faqItems.forEach(item => {
//         const title = item.querySelector(".faq-title");
//         const content = item.querySelector(".faq-text");

//         // Initially hide the content
//         content.style.display = "none";

//         // Add click event to toggle visibility
//         title.addEventListener("click", () => {
//             const isVisible = content.style.display === "block";
//             content.style.display = isVisible ? "none" : "block";

//             // Optional: Add an active class for styling
//             item.classList.toggle("active", !isVisible);
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    // FAQ toggle functionality
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

    // Contact form submission
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault(); // Prevent default form submission

            const formData = {
                name: this.name.value,
                email: this.email.value,
                subject: this.subject.value,
                message: this.message.value,
            };

            try {
                const response = await fetch("/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert("Email sent successfully!");
                    this.reset();
                } else {
                    alert("Failed to send email. Please try again.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        });
    }
});
