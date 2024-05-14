// alert("Test");

var sendButton = document.getElementById( "sendButton" );
var aiResponseArea = document.getElementById( "aiResponse" );

sendButton.onclick = function() {
    event.preventDefault();
    aiResponseArea.innerHTML = "Thank you for your response. An AI agent is processing your request ..."
}

// JavaScript code
function showMessage() {
    alert("Do you need more information about the tracker?");
}

document.getElementById("myButton").addEventListener("click", function() {
    showMessage();
});

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (data) => {
        console.log('message received:', data);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Introducing variables of different data types
let myInteger = 42; // An integer variable
let myString = "Hello, World!"; // A string variable
console.log(myInteger, myString);

// Performing a mathematical operation
let firstNumber = 10;
let secondNumber = 20;
let sum = firstNumber + secondNumber;
console.log("The sum of", firstNumber, "and", secondNumber, "is:", sum);

// Adding an if statement with an accompanying else statement
if (sum > 20) {
    console.log("The sum is greater than 20.");
} else {
    console.log("The sum is not greater than 20.");
}

let conditionA = 5;
let conditionB = 10;
if (conditionA < 10 || conditionB > 5) { /* || means OR in English and && mean AND */
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}
const outputMessage = "This is the output message to be printed.";

// Print to the console
console.log(outputMessage);

// Print on the browser screen via the DOM
const outputElement = document.createElement('p');
outputElement.textContent = outputMessage;
document.body.appendChild(outputElement);


