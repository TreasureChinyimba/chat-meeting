// JavaScript (script.js)

// Function to send text messages
function sendMessage() {
    // Get the message input value
    const messageInput = document.getElementById('message-input').value;

    // Check if the message is not empty
    if (messageInput.trim() !== '') {
        // Implement logic to send the message using AJAX or fetch
        // For simplicity, we'll just log the message to the console
        console.log('Sending message:', messageInput);

        // Clear the message input after sending
        document.getElementById('message-input').value = '';

        // You may want to update the message-container with the sent message
        // For example, append the message to the message-container
        const messageContainer = document.getElementById('message-container');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageInput;
        messageContainer.appendChild(messageElement);
    }
}

// Add a function to open the file input when the profile picture is clicked
function openFileInput() {
    document.getElementById('profile-pic-input').click();
}

// Add an event listener to handle file selection and update the profile picture
document.getElementById('profile-pic-input').addEventListener('change', handleProfilePicChange);

// Function to handle profile picture change
function handleProfilePicChange() {
    const fileInput = document.getElementById('profile-pic-input');
    const profilePic = document.getElementById('profile-pic');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];

        // Implement logic to upload the file using AJAX or fetch
        // For simplicity, we'll just log the file details to the console
        console.log('Uploading profile picture:', selectedFile.name);

        // You may want to update the profile picture with the uploaded image
        // For example, set the source of the profile picture element
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
}

// Function to handle user login
function login() {
    const username = prompt("Enter your username:");

    if (username) {
        // Implement logic to send the username to the server using AJAX or fetch
        // For simplicity, we'll use localStorage to store the username
        localStorage.setItem('username', username);

        // Update the UI with the logged-in username
        updateUI();
    }
}

// Function to handle user logout
function logout() {
    // Implement logic to log out the user on the server using AJAX or fetch
    // For simplicity, we'll clear the stored username in localStorage
    localStorage.removeItem('username');

    // Update the UI for a logged-out state
    updateUI();
}

// Function to update the UI based on login/logout state
function updateUI() {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');

    // Check if the user is logged in (username is stored in localStorage)
    if (localStorage.getItem('username')) {
        // User is logged in
        // Enable the message input and show the logout button
        messageInput.disabled = false;
        chatBox.querySelector('.logout-button').style.display = 'inline';
    } else {
        // User is logged out
        // Disable the message input and hide the logout button
        messageInput.disabled = true;
        chatBox.querySelector('.logout-button').style.display = 'none';
    }
}

// Add an event listener to the window's load event to update the UI on page load
window.addEventListener('load', updateUI);
