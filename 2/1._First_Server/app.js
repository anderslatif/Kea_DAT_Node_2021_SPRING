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


app.listen(8080);
