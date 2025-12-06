const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModifiedSpan = document.querySelector('#lastModified');
lastModifiedSpan.textContent = document.lastModified;

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const rating = document.querySelector('input[name="rating"]:checked');
    
    if (!rating) {
        alert('Please select a rating⭐.');
        event.preventDefault();
    }
});