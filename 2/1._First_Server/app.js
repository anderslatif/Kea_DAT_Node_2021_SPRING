const express = require("express");
const app = express();
// const app = require(express)();

// send back empty json
app.get("/", (req, res) => {
    res.send({});
});

// create a route on the endpoint me which sends back a json that represents you
app.get("/me", (req, res) => {
    const me = {
        name: "Michael.js",
        age: 2
    };
    res.send(me);
});

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/day", (req, res) => {
    // can also be solved like this:
    // new Date().toLocaleDateString("da-dk", { weekday: "long" })
    const currentWeekday = new Date().getDay();
    res.send({ day: weekdays[currentWeekday] });
});

app.get("/about", (req, res) => {
    res.send({
        version: "1.0.0"
    });
});

app.get("/page", (req, res) => {
    res.send("<h1>Welcome</h1>");
});

app.listen(8080);
