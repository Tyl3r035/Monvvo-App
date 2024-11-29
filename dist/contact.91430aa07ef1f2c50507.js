/******/ (() => { // webpackBootstrap
document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var title = item.querySelector(".faq-title");
    var content = item.querySelector(".faq-text");

    // Initially hide the content
    content.style.display = "none";

    // Add click event to toggle visibility
    title.addEventListener("click", function () {
      var isVisible = content.style.display === "block";
      content.style.display = isVisible ? "none" : "block";

      // Optional: Add an active class for styling
      item.classList.toggle("active", !isVisible);
    });
  });
});
/******/ })()
;
//# sourceMappingURL=contact.91430aa07ef1f2c50507.js.map