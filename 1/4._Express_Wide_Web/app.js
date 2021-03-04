const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons.html");
});

app.listen(8080, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
