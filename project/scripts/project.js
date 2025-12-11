const dramas = [
    {
        title: "Do You Like Brahms?",
        genre: ["Romance", "Music"],
        image: "images/Do_You_Like_Brahms_.webp",
    },
    {
        title: "Fairy Kim Bok Joo",
        genre: ["Romance", "Sports"],
        image: "images/Fairy-Kim.webp",
    },
    {
        title: "It's Okay to Not Be Okay",
        genre: ["Romance", "Drama"],
        image: "images/Its-Okay-Not-be-okay.webp",
    },
    {
        title: "Lovely Runner",
        genre: ["Romance", "Sports"],
        image: "images/lovely-runner.webp",
    },
    {
        title: "She Was Pretty",
        genre: ["Romance", "Comedy"],
        image: "images/she-was-pretty.webp",
    },
];

const dramaContainer = document.getElementById("drama-container");
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

function renderDramas(list) {
    dramaContainer.innerHTML = ""; 
    list.forEach(drama => {
        dramaContainer.innerHTML += `
            <div class="drama-card">
                <img src="${drama.image}" alt="${drama.title}" loading="lazy">
                <h3>${drama.title}</h3>
                <p>Genre: ${drama.genre.join(", ")}</p>
                <button class="fav-btn" data-title="${drama.title}">❤️ Add to Favorites</button>
            </div>
        `;
    });
}

function addToFavorites(title) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(title)) {
        favorites.push(title);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${title} added to favorites!`);
    } else {
        alert(`${title} is already in your favorites 💗`);
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fav-btn")) {
        const dramaTitle = e.target.getAttribute("data-title");
        addToFavorites(dramaTitle);
    }
});

if (dramas.length > 0) {
    renderDramas(dramas);
} else {
    dramaContainer.innerHTML = "<p>No dramas available 😿</p>";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;