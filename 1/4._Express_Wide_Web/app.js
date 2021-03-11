const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons.html");
});

app.get("/safeport", (req, res) => {
    res.send({ message: "You are safe here. Nothing can hurt you." });
});

app.get("/dangerport", (req, res) => {
    res.redirect("/safeport");
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});
