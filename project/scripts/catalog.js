const dramas = [
    {
        title: "Do You Like Brahms?",
        genre: ["Romance", "Music"],
        image: "images/Do_You_Like_Brahms_.webp",
        year: 2020,
        actors: ["Park Eun-bin", "Kim Min-jae"],
        rating: "9.1",
        synopsis: "A story about classical music students navigating love and life.",
    },
    {
        title: "Fairy Kim Bok Joo",
        genre: ["Romance", "Sports"],
        image: "images/Fairy-Kim.webp", 
        year: 2016,
        actors: ["Lee Sung-kyung", "Nam Joo-hyuk"],
        rating: "9.4",
        synopsis: "A coming-of-age story about a female weightlifter and her journey to find love and success.",
    },
    {
        title: "It's Okay to Not Be Okay",      
        genre: ["Romance", "Drama"],    
        image: "images/Its-Okay-Not-Be-okay.webp",
        year: 2020,
        actors: ["Kim Soo-hyun", "Seo Ye-ji"],
        rating: "9.3",
        synopsis: "A unique love story between a psychiatric ward caregiver and a children's book author.",
    },
    {   
        title: "Lovely Runner",
        genre: ["Romance", "Sports"],
        image: "images/lovely-runner.webp",
        year: 2021,
        actors: ["Kim Hye-yoon", "Nam Yoon-su"],
        rating: "9.4",
        synopsis: "A heartwarming tale of a female runner overcoming challenges to achieve her dreams.",
    },
    {
        title: "She Was Pretty",    
        genre: ["Romance", "Comedy"],
        image: "images/she-was-pretty.webp",
        year: 2015,
        actors: ["Hwang Jung-eum", "Park Seo-joon"],
        rating: "9.4",
        synopsis: "A romantic comedy about childhood friends reuniting as adults under unexpected circumstances.",
    },
];

const dramaList = document.getElementById("drama-list");
const dramaSelect = document.getElementById("genre");
const actorSelect = document.getElementById("actorFilter");

function displayDramas(list) {
    dramaList.innerHTML = "";
    list.forEach((drama) => {
        dramaList.innerHTML += `
            <div class="drama-card">
                <img src="${drama.image}" alt="${drama.title}" loading="lazy">
                <h4>${drama.title}</h4>
                <p>Genre: ${drama.genre.join(", ")}</p> 
                <p>Actors: ${drama.actors.join(", ")}</p>
                <button class="view-details" data-title="${drama.title}">View Details</button>
            </div>
        `;
    });

    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", () => {
            const selectedTitle = button.dataset.title;
            const drama = dramas.find(d => d.title === selectedTitle);
            localStorage.setItem("selectedDrama", JSON.stringify(drama));
            window.location.href = "drama.html";
        });
    });
}

displayDramas(dramas);

const allGenres = [...new Set(dramas.flatMap(d => d.genre))];
allGenres.forEach(g => dramaSelect.innerHTML += `<option value="${g}">${g}</option>`);

const allActors = [...new Set(dramas.flatMap(d => d.actors))];
allActors.forEach(a => actorSelect.innerHTML += `<option value="${a}">${a}</option>`);

function filterDramas() {
    const genre = dramaSelect.value;
    const actor = actorSelect.value;

    let filtered = dramas;

    if (genre !== "all") filtered = filtered.filter(d => d.genre.includes(genre));
    if (actor !== "all") filtered = filtered.filter(d => d.actors.includes(actor));

    displayDramas(filtered);
}

dramaSelect.addEventListener("change", filterDramas);
actorSelect.addEventListener("change", filterDramas);

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
