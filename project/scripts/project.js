const dramas = [
    {
        title: "Do You Like Brahms?",
        genre: ["Romance, Music"],
        image: "images/do-you-like-brahms.webp",
    },
    {
        title: "Fairy Kim Bok Joo",
        genre: ["Romance, Sports"],
        image: "images/fairy-kim-bok-joo.webp",
    },
    {
        title: "It's Okay to Not Be Okay",      
        genre: ["Romance, Drama"],
        image: "images/its-okay-to-not-be-okay.webp",
    },
    {
        title: "Lovely Runner",
        genre: ["Romance, Sports"],
        image: "images/lovely-runner.webp",
    },
    {
        title: "she Was Pretty",
        genre: ["Romance, Comedy"],
        image: "images/she-was-pretty.webp",
    },
];

const popularDramas = document.getElementById("popular-dramas");
dramas.forEach((drama) => {
    popularDramas.innerHTML += `
        <div class="drama-card">
            <img src="${drama.image}" alt="${drama.title}" loading="lazy">
            <h4>${drama.title}</h4>
            <p>Genre: ${drama.genre.join(", ")}</p>
        </div>
    `;
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
