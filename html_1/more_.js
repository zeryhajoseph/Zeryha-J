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
let myInt = 42; // An integer variable
let myString = "Hello, World!"; // A string variable
console.log(myInt, myString);

// Performing a mathematical operation
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("The sum of", num1, "and", num2, "is:", sum);

// Adding an if statement with an accompanying else statement
if (sum > 20) {
    console.log("The sum is greater than 20.");
} else {
    console.log("The sum is not greater than 20.");
}

let x = 5;
let y = 10;
if (x < 10 || y > 5) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}
const output = "This is the output message to be printed.";

// Print to the console
console.log(output);

// Print on the browser screen via the DOM
const outputElement = document.createElement('p');
outputElement.textContent = output;
document.body.appendChild(outputElement);