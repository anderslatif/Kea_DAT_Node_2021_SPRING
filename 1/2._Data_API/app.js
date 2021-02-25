const express = require("express");
const app = express();

app.use(express.json());

app.get("/querystring", (req, res) => {
    // console.log(req.query);
    res.send({ query: req.query });
});

app.get("/pathvariable/:message/:title", (req, res) => {
    res.send({ 
        message: req.params.message, 
        title: req.params.title
    });
});

app.post("/whatever", (req, res) => {
    console.log(req.body);
    // todo get what is in the body and send it back
    res.send({ body: req.body });
});


app.listen(8080);
