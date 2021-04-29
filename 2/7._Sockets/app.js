const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    // console.log("A socket connected with id", socket.id);

    socket.on("colorChanged", (data) => {
        socket.emit("changeBackgroundToThisColor", data);
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/colors.html");
});

server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
