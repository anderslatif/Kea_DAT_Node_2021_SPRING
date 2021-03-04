const express = require("express");
const app = express();

app.use(express.json());

const wine = require("./wine.json");

// query string
app.get("/search", (req, res) => {
    res.send({ searchquery: req.query });
});

// path variables
app.get("/telegram/:message/:name", (req, res) => {
    const message = req.params.name + ", " + req.params.message;
    res.send({ message: message }); 
});

app.post("/goodstuff", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});

app.delete("/goodstuff", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
