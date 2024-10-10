const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

let content = '';
const users = new Map();

io.on('connection', (socket) => {
  console.log('A user connected');

  // Assign a random name to the user
  const userName = `User${Math.floor(Math.random() * 1000)}`;
  users.set(socket.id, { id: socket.id, name: userName });

  // Send current content to the newly connected user
  socket.emit('contentUpdate', content);

  // Broadcast updated user list to all clients
  io.emit('usersUpdate', Array.from(users.values()));

  socket.on('contentChange', (newContent) => {
    content = newContent;
    socket.broadcast.emit('contentUpdate', content);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    users.delete(socket.id);
    io.emit('usersUpdate', Array.from(users.values()));
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});