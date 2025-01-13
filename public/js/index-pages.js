import '../css/index-pages.css';

document.addEventListener('DOMContentLoaded', () => {
    // const selectElement = document.getElementById('title-select');
    // const articleLists = document.querySelectorAll('.articles-list');
  
    // selectElement.addEventListener('change', (event) => {
    //   const selectedValue = event.target.value;
  
    //   // Hide all lists
    //   articleLists.forEach((list) => {
    //     list.style.display = 'none';
    //   });
  
    //   // Show the corresponding list
    //   const activeList = document.getElementById(selectedValue); // No need for `${selectedValue}-list`
    //   if (activeList) {
    //     activeList.style.display = 'block';
    //   }
    // });

    // Terms Toggle Functionality
    const termTitles = document.querySelectorAll('.page-term-title');

    termTitles.forEach((title) => {
        title.addEventListener('click', () => {
            // Close all other term definitions and reset arrows
            const allDefinitions = document.querySelectorAll('.page-term-definition');
            const allArrows = document.querySelectorAll('.terms-arrow');
            allDefinitions.forEach((definition) => {
                if (definition !== title.nextElementSibling) {
                    definition.style.display = 'none';
                }
            });
            allArrows.forEach((arrow) => {
                arrow.classList.remove('active');
            });

            // Toggle the clicked term's definition
            const termDefinition = title.nextElementSibling;
            const arrow = title.querySelector('.terms-arrow');
            if (termDefinition.style.display === 'flex') {
                termDefinition.style.display = 'none';
                arrow.classList.remove('active');
            } else {
                termDefinition.style.display = 'flex';
                arrow.classList.add('active');
            }
        });
    });



    // FAQ Toggle Functionality
    const faqTitles = document.querySelectorAll('.faq-title');

    faqTitles.forEach((title) => {
        title.addEventListener('click', () => {
            // Close all other FAQ items and reset arrows
            const allFaqTexts = document.querySelectorAll('.faq-text');
            const allFaqArrows = document.querySelectorAll('.faq-arrow');
            allFaqTexts.forEach((text) => {
                if (text !== title.nextElementSibling) {
                    text.style.display = 'none';
                }
            });
            allFaqArrows.forEach((arrow) => {
                if (arrow !== title.querySelector('.faq-arrow')) {
                    arrow.classList.remove('active');
                }
            });

            // Toggle the clicked FAQ item
            const faqText = title.nextElementSibling;
            const faqArrow = title.querySelector('.faq-arrow');
            if (faqText.style.display === 'none' || !faqText.style.display) {
                faqText.style.display = 'block'; // Show the description
                faqArrow.classList.add('active'); // Rotate arrow
            } else {
                faqText.style.display = 'none'; // Hide the description
                faqArrow.classList.remove('active'); // Reset arrow
            }
        });
    });

  });
  