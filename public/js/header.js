const mobileMenu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.mobile-btn');
const overlay = document.getElementById('menu-overlay');
const closeButton = document.querySelector('.mobile-close');

menuButton.addEventListener('click', () => {
mobileMenu.classList.add('active');
overlay.style.display = 'block';
});

closeButton.addEventListener('click', () => {
mobileMenu.classList.remove('active');
overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
mobileMenu.classList.remove('active');
overlay.style.display = 'none';
});
