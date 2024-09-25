// Variabel for å lagre alle karakterene
let allCharacters = [];

// Når siden lastes inn, hent alle karakterer og vis dem
document.addEventListener("DOMContentLoaded", function() {
    fetchAllCharacters();
});

// Funksjon for å hente alle karakterer fra API
function fetchAllCharacters() {
    const url = `https://hp-api.onrender.com/api/characters`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            allCharacters = data; // Lagre alle karakterene i en global variabel
            displayCharacters(allCharacters); // Vis alle karakterer når siden lastes
        })
        .catch(() => displayError("Feil ved henting av data. Prøv igjen senere."));
}

// Funksjon for å vise flere karakterer
function displayCharacters(characters) {
    const characterInfo = document.getElementById("characterInfo");
    if (characters.length > 0) {
        characterInfo.innerHTML = characters.map(character => `
            <div class="character-info">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p><strong>Hus:</strong> ${character.house || "Ingen hus"}</p>
                <p><strong>Kjønn:</strong> ${character.gender}</p>
                <p><strong>Blodstatus:</strong> ${character.ancestry || "Ukjent"}</p>
                <p><strong>Patronus:</strong> ${character.patronus || "Ingen"}</p>
                <p><strong>Fødselsår:</strong> ${character.yearOfBirth || "Ukjent"}</p>
                <p><strong>Skuespiller:</strong> ${character.actor}</p>
            </div>
        `).join(''); // Join for å unngå kommaer mellom elementer
    } else {
        displayError("Ingen karakter funnet.");
    }
}

// Når tekst skrives i søkefeltet, vis relevante karakterer
document.getElementById("characterInput").addEventListener("input", function(event) {
    const searchQuery = event.target.value.trim().toLowerCase();

    if (searchQuery === "") {
        displayCharacters(allCharacters); // Hvis søkefeltet er tomt, vis alle karakterer igjen
    } else {
        searchCharacters(searchQuery);
    }
});

// Funksjon for å søke etter karakterer basert på delvis samsvar
function searchCharacters(searchQuery) {
    // Filtrer karakterer som inneholder søketeksten (både fornavn og etternavn)
    const filteredCharacters = allCharacters.filter(character => 
        character.name.toLowerCase().includes(searchQuery)
    );
    displayCharacters(filteredCharacters); // Vis filtrerte karakterer
}

// Funksjon for å vise feilmelding
function displayError(message) {
    const characterInfo = document.getElementById("characterInfo");
    characterInfo.innerHTML = `<p>${message}</p>`;
}
