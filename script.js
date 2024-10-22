const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
let length = flashcards.length;
// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let card = document.getElementById("flashcard");

    if (showingTerm) {
        card.innerHTML = flashcards[currentIndex].term;
    } 
    else {
        card.innerHTML = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners
const prev_btn = document.getElementById("prev-btn");
prev_btn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    displayCard();
})

const next_btn = document.getElementById("next-btn");
next_btn.addEventListener("click", function() {
    if (currentIndex < length-1) {
        currentIndex++;
    }
    displayCard();
})

let card = document.getElementById("flashcard");
card.addEventListener("click", function() {
    showingTerm ? showingTerm = false : showingTerm = true;
    displayCard();
})

let add_button = document.getElementById("add-card-btn");
add_button.addEventListener("click", function() {
    //Get the values of new-term and new-defintion
    let new_term = document.getElementById("new-term");
    let new_definition = document.getElementById("new-definition");
    let newObject = { term: new_term.value, 
        definition: new_definition.value}; //Creates a new flashcard object
    length = flashcards.push(newObject); //Adds the object to the list
    displayCard();
    //Reset the text in new_term and new_definition
    new_term.value = "";
    new_definition.value = "";
})
// This line will display the card when the page is refreshed
window.onload = displayCard;