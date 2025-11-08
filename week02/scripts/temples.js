const currentYear = document.querySelector('#currentyear');
const today = new Date();
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});
