const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 7100;

const io = require('socket.io')(7000, {
    cors: {
        origin: 'http://localhost:3000',
    }
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({userId,socketId});
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find(user => user.userId === userId);
};

io.on("connection", (socket) => {
    // At user connect
    console.log("user connected");

    //taking userId and socketId from user
    socket.on("addUser", (userId) => {
        addUser(userId, socket.Id);
        io.emit("getUsers", users);
    });

    //user send and get message
    socket.on("sendMessage", ({senderId, receiverId, text}) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {senderId, text})
    });

    //At user disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});

mongoose.connect(process.env.mongoDB_URL)
    .then(() => console.log('Database up and doing::: '))
    .catch(err => console.log(`Database no gree start, e ge why: ${err.message}`));

server.listen(port, () => console.log(`Server listening on:: ${port}`));