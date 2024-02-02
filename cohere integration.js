// Cohere Chat API integration for Microsoft Teams

const axios = require('axios');

// Cohere API key
const apiKey = '8UtSyZ0ln57';

// Cohere Chat API endpoint
const apiUrl = 'https://api.cohere.ai/v1/chat';

// Microsoft Teams pop-up window initialization
const teamsPopUp = microsoftTeams.authentication.authenticate({
    url: window.location.origin + '/auth.html',
    width: 600,
    height: 535,
    successCallback: function(result) {
        // Authentication successful
        console.log('Authentication successful:', result);
        // Use Cohere Chat API to start conversation
        startCohereConversation();
    },
    failureCallback: function(error) {
        // Authentication failed
        console.error('Authentication failed:', error);
    }
});

// Function to start conversation with Cohere Chat API
function startCohereConversation() {
    // Initialize conversation with Cohere Chat API
    axios.post(apiUrl, {
        message: "Hello, Cohere!",
        model: "command",
        preamble_override: "Welcome to Cohere Chat!",
        headers: {
            Authorization: `BEARER ${apiKey}`
        }
    })
    .then(response => {
        // Display response in Microsoft Teams pop-up window
        teamsPopUp.postMessage(response.data.message, window.location.origin);
    })
    .catch(error => {
        // Handle error
        console.error('Error starting conversation:', error);
    });
}

// Function to handle messages from Microsoft Teams pop-up window
microsoftTeams.addListener('message', function(event) {
    // Send message to Cohere Chat API
    axios.post(apiUrl, {
        message: event.message,
        model: "command",
        headers: {
            Authorization: `BEARER ${apiKey}`
        }
    })
    .then(response => {
        // Display response in Microsoft Teams pop-up window
        teamsPopUp.postMessage(response.data.message, window.location.origin);
    })
    .catch(error => {
        // Handle error
        console.error('Error sending message to Cohere:', error);
    });
});
