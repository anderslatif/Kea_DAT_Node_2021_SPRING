const express = require("express");
const app = express();

app.use(express.static('public'));

const fetch = require("node-fetch");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons/dragons.html");
});

app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + "/public/crypto/crypto.html");
});

app.get("/safeport", (req, res) => {
    res.send({ message: "You are safe here. Nothing can hurt you." });
});

app.get("/dangerport", (req, res) => {
    res.redirect("/safeport");
});

app.get("/potato", (req, res) => {
    if (req.query.value === "spud") {
        // Need to return so that line 25 does not execute and try to send another response for the same request
        return res.send({ type: "petite potato" });
    }
    return res.send({ lifePhilosophy: "My life is potato. I have potato blood in my veins." });
});

app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
    .then(res => res.textConverted())
    .then(body => res.send(body));
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
