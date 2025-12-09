const dramaDetail = document.getElementById("dramaDetail");
const drama = JSON.parse(localStorage.getItem("selectedDrama"));

if (drama) {
    dramaDetail.innerHTML = `
        <h2>${drama.title}</h2>
        <img src="${drama.image}" alt="${drama.title}" loading="lazy">
        <p><strong>Year:</strong> ${drama.year}</p>
        <p><strong>Genre:</strong> ${drama.genre.join(", ")}</p>
        <p><strong>Actors:</strong> ${drama.actors.join(", ")}</p>
        <p><strong>Rating:</strong> ${drama.rating}</p>
        <p><strong>Synopsis:</strong> ${drama.synopsis}</p>
        <button id="backButton">Back to Catalog</button>
    `;

    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
        window.location.href = "catalog.html";
    });
} else {
    dramaDetail.innerHTML = "<p>No drama selected. Please go back to the catalog and select a drama.</p>";
}


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

