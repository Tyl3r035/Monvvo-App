import '../css/index-pages.css';

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('title-select');
    const articleLists = document.querySelectorAll('.articles-list');
  
    selectElement.addEventListener('change', (event) => {
      const selectedValue = event.target.value;
  
      // Hide all lists
      articleLists.forEach((list) => {
        list.style.display = 'none';
      });
  
      // Show the corresponding list
      const activeList = document.getElementById(selectedValue); // No need for `${selectedValue}-list`
      if (activeList) {
        activeList.style.display = 'block';
      }
    });

  });
  