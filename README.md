# Cohere-Chat-With-Teams
Basic Cohere Teams Pop-UP Code Template.

This code initializes a Microsoft Teams pop-up window and starts a conversation with Cohere's Chat API when the user is successfully authenticated. It then sends messages from the pop-up window to Cohere and displays the responses in the same pop-up window.

Replace the API ket for cohere with your specified API key.

This authentication.html file initializes the Microsoft Teams SDK and defines two functions: handleSuccess() and handleFailure(), which are called based on the authentication result. The handleSuccess() function notifies the parent window that authentication was successful, while the handleFailure() function notifies the parent window that authentication failed.

You would need to host this auth.html file on a server accessible by Microsoft Teams. After the user successfully authenticates using this file, the startCohereConversation() function from the previous JavaScript code will be triggered to initiate the conversation with Cohere's Chat AP
