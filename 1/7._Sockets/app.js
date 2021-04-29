const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    
    socket.on("colorSelected", (data) =>  {
        // changes the color for ALL the sockets in io
        io.emit("changeColor", data);

        // changes the color for the very SAME socket that changed the color initially
        // socket.emit("changeColor", data);

        // changes the color for all the sockest BUT itself
        // socket.broadcast.emit("changeColor", data);
    });


});



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/colors.html");
});

server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", 8080);
});
