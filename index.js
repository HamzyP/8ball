var userName = ""; 
var questionPhase = false; 
var count = 0;
var questionHistory = []; //array to store the history of questions and answers

function showHistory(){
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = ""; // Clear previous history
    questionHistory.forEach(item => {
        const historyItem = document.createElement("div");
        historyItem.innerHTML = `<strong>Q:</strong> ${item.question} <br> <strong>A:</strong> ${item.answer}`;
        historyItem.style.marginBottom = "10px"; // add margin for spacing
        historyContainer.appendChild(historyItem);
    });

    document.getElementById("history-modal").style.display = "block"; // shows the popup/modal
}

// function to close the history popup
function closeHistoryPopup() {
    document.getElementById("history-modal").style.display = "none"; // hides the popup/modal
}



//function purely to display messages
function displayMessage(message) {
        document.getElementById("response-container").innerHTML = message;
}
//function to count and display how many questions the user has asked
function questionCount(){
    document.getElementById("question-counter").innerHTML = "Questions asked: " + count;
    count+=1;
}

//function to get random response
function getRandomResponse() {
    const responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good.",
        "Yes.",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don’t count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    const num = Math.floor(Math.random() * responses.length);
    return responses[num]; // Return a random response
}


// Main function to handle button click
function handleInput() {
    if (questionPhase) {
        handleQuestionInput(); // Handle question input if in question phase
    } else {
        handleNameInput(); // Handle name input if in greeting phase
    }
}

// Function to handle user name input
function handleNameInput() {
    const inputValue = document.getElementById("chat-input").value.trim(); // Get the trimmed input value

    if (inputValue.length > 0) {
        userName = inputValue; // Store the user's name
        displayMessage("Hello, " + userName + "!"); // Greet user with name

        // Delay for user to read the message before asking for a question
        setTimeout(() => {
            displayMessage("What is your question, "+ userName +"?"); // Display message after 2 seconds
            questionCount();
            questionPhase = true; // Switch to question phase
        }, 2500); // Wait 2 seconds
    } else {
        displayMessage("Please enter your name."); // Prompt if input is empty
    }
    document.getElementById("chat-input").value = ""; // Clear the input field
}

// Function to handle user question input
function handleQuestionInput() {
    const inputValue = document.getElementById("chat-input").value.trim(); // Get the trimmed input value

    if (inputValue.length > 0) {
        const response = getRandomResponse(); // Get a random response from the 8-ball
        questionCount();
        questionHistory.push({ question: inputValue, answer: response });
        displayMessage("Thinking..."); // display thinking msg so response is not instant.

        setTimeout(() => {
            displayMessage(response); // Display 8 ball response after 2 seconds
            }, 2500); // Wait 2 seconds

        // Delay for user to read the message before asking for a question
        setTimeout(() => {
            displayMessage("What is your question, "+ userName +"?"); // Display message after 2 seconds
            }, 5000); // Wait 2 seconds
    } else {
        displayMessage("Please ask a question, " + userName +"?"); // Prompt if input is empty
    }
    document.getElementById("chat-input").value = ""; // Clear the input field
}



function main(){
    displayMessage("What is your name?"); // display initial message
    // event listeners
    document.getElementById("send-button").addEventListener("click", handleInput); 
    document.getElementById("history-button").addEventListener("click", showHistory); 
    document.querySelector('.close-button').addEventListener('click', closeHistoryPopup);
}

window.onload = main;



