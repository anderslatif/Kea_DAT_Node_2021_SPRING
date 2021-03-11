const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});
