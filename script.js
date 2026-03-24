const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
const fCard = document.getElementById("flashcard")
const cardContent = document.getElementById("card-content")
const newTerm = document.getElementById("new-term")
const newDefn = document.getElementById("new-definition")
const nextCardButton = document.getElementById("next-btn")
const prevCardButton = document.getElementById("prev-btn")
const newCardButton = document.getElementById("add-card-btn")

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    curCard = flashcards[currentIndex];
    if (showingTerm == true) {
        cardContent.innerText = curCard.term;
    }
    else {
        cardContent.innerText = curCard.definition;
    }
}

// The rest of the code you will write is a part of event listeners
function flipCard() {
    if (showingTerm == true) {
        showingTerm = false;
    }
    else {
        showingTerm = true;
    }
    displayCard();
}
fCard.addEventListener("click",() => flipCard())

function nextCard() {
    if (currentIndex >= flashcards.length - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex += 1;
    }
    displayCard();
}
nextCardButton.addEventListener("click",() => nextCard())

function prevCard() {
    if (currentIndex < 1) {
        currentIndex = flashcards.length - 1;
    }
    else {
        currentIndex -= 1;
    }
    displayCard();
}
prevCardButton.addEventListener("click",() => prevCard())

function addCard() {
    flashcards.push({ term: newTerm.value, definition: newDefn.value })
    newTerm.value = ""
    newDefn.value = ""
}
newCardButton.addEventListener("click", () => addCard())

// This line will display the card when the page is refreshed
window.onload = displayCard;
