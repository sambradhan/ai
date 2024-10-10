// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ai_workspace', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Define Routes (e.g., authentication, container management)
// TODO: Implement your routes here

// Socket.io for Real-Time Messaging
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', (msg) => {
        // Broadcast the message to all connected clients
        io.emit('receiveMessage', msg);
        // Optionally, save the message to the database
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
