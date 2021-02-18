const express = require("express");
const app = express();
// const app = require("express")();


app.get("/", (req, res) => {
    res.send({});
});

// create a new route called welcome that shows an HTML header tag that says Welcome
// the endpoint is /welcome
// <h1>Welcome</h1>
app.get("/welcome", (req, res) => {
    res.send("<h1>Welcome</h1>");
});

// create a new route on the endpoint me that returns a json object that represents you
app.get("/me", (req, res) => {
    const me = {
        hungryLevel: 9001 - 2
    };
    res.send(me);
});

app.listen(8080);
