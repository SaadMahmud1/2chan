const Btn = document.querySelector(".container button");

// Function to get input and save to local storage
async function getInput() {
    let userInput = document.getElementById('input').value;
    console.log(userInput);
    
    // Save message to local storage
    let messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
    messages.push(userInput);
    localStorage.setItem('messages', JSON.stringify(messages));
    
    // Display messages
    displayMessages();
}

// Function to display messages from local storage
function displayMessages() {
    let messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
    let messageContainer = document.getElementById("p");
    
    // Clear existing messages before displaying
    messageContainer.innerHTML = "";
    
    // Display each message with a delete button
    messages.forEach((message, index) => {
        let messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<span>${message}</span> 
                                <button onclick="deleteMessage(${index})">Delete</button>`;
        messageContainer.appendChild(messageDiv);
    });
}

// Function to delete a message from local storage
function deleteMessage(index) {
    let messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
    
    // Remove the message at the specified index
    messages.splice(index, 1);
    
    // Update local storage
    localStorage.setItem('messages', JSON.stringify(messages));
    
    // Refresh message display
    displayMessages();
}

// Event listener for button click
Btn.addEventListener("click", () => {
    getInput();
});

// Load messages when page loads
window.addEventListener('load', () => {
    displayMessages();
});
