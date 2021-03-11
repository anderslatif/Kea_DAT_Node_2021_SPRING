const express = require("express");
const app = express();

app.use(express.json());

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

let id = plants.length;

app.get("/plants", (req, res) => {
    res.send({ data: plants });
});

app.get("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    res.send({ data: foundPlant });
});

app.post("/plants", (req, res) => {
    const newPlant = req.body;
    newPlant.id = ++id;
    plants.push(newPlant);
    res.send({ data: newPlant });
});

app.patch("/plants/:id", (req, res) => {
    let plantUpdated = false;
    plants = plants.map(plant => {
        if (plant.id === Number(req.params.id)) {
            plantUpdated = true;
            return { ...plant, ...req.body, id: plant.id };    
        }
        return plant;
    });
    res.send({ data: plantUpdated });
});

app.delete("/plants/:id", (req, res) => {
    plants = plants.filter(plant => plant.id !== Number(req.params.id));
    res.send({ });
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
