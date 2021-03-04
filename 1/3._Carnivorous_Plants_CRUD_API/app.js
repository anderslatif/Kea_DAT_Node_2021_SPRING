const express = require("express");
const app = express();

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
    res.send({ plants: plants });
});

app.get("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    res.send({ foundPlant: foundPlant });
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
