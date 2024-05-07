const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express ();
const server = http.cerateServer(app);
const io = socketIo(server);

io.on('conncetion', (socket) => {
    console.log('A user connceted');

    socket.on('message', (data) => {
        console.log('message received:', data);
    });
})

const PORT = process.env.Port || 3000;
server.listien(PORT, () => {
    console.log('Server is running on port ${PORT}')
});