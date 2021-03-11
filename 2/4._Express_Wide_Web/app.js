const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizzaparlor.html");
});

app.get("/whiskey", (req, res) => {
    res.send({ barkeep: "Here ya go, pal. A whiskey for you." });
});

app.get("/pub", (req, res) => {
    if (Number(req.query.money) > 500) {
        res.redirect("/whiskey");
    } else {
        res.send({ doorman: "Sorry, you don't have money for whiskey." });
    }
});

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});