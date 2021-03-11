const express = require("express");
const app = express();

let id = 3;

// carnivorous plants
let plants = [
    {
        id: 1,
        title: "This one will bite your toes of"
    },
    {
        id: 2,
        dangerLevel: 9.8
    }
];


app.get("/plants", (req, res) => {
    res.send({ data: plants });
});

app.get("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    res.send({ data: foundPlant });
});

// this is broken and doesn't work.. fix it
// bonus: use cross-env in this project and allow the user to define a custom port
app.post("/plants", (req, res) => {
    const newPlant = req.body;
    newPlant.id = id++;
    res.send({ data: newPlant });
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
