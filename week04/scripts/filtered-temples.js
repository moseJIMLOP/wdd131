const currentYear = document.querySelector('#currentyear');
const today = new Date();
if (currentYear) currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('nav');

if (menuButton && nav) {
menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});
}
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, South Korea",
    dedicated: "1985, December, 14",
    area: 59400,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  },
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

const gallery = document.querySelector('.gallery');
function displayTemples(list) {
    if (!gallery) return;
    gallery.innerHTML = '';
    list.forEach(temple => {
        const figure = document.createElement('figure');
        figure.innerHTML = `
         <img src="${temple.imageUrl}"
            alt="Image of ${temple.templeName}"
            loading="lazy">
        <figcaption>
            <strong>${temple.templeName}</strong><br>
            ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area.toLocaleString()} sq ft
        </figcaption>
        `;
        gallery.appendChild(figure);
    });
}

function filterAndDisplay(filterName) {
    let result = temples.slice();
    if (filterName === 'Old') {
        result = temples.filter(t => parseInt(t.dedicated) < 1900);
    } else if (filterName === 'New') { 
        result = temples.filter(t => parseInt(t.dedicated) >= 2000);
    } else if (filterName === 'Large') {
        result = temples.filter(t => t.area > 90000);
    } else if (filterName === 'Small') {
        result = temples.filter(t => t.area < 10000);
    }
    displayTemples(result);
}

const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.textContent;
        filterAndDisplay(filter);
        mainTitle.textContent = filter;
        
        if (nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
            if (menuButton) menuButton.classList.remove('open');
        }
        const mainTitle = document.querySelector('main h1');
        if (mainTitle) mainTitle.textContent = filter;
    });
});
displayTemples(temples);
