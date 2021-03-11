const express = require("express");
const app = express();

app.use(express.json());

let animeNames = [
    {
        id: 1,
        title: "Attack on Titan",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    }
];

let AUTOINCREMENT = animeNames.length;

app.get("/anime_names", (req, res) => {
    res.send({ data: animeNames });
});

app.get("/anime_names/:id", (req, res) => {
    const animeNameId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeNameId);
    res.send({ data: foundAnimeName });
});

app.post("/anime_names", (req, res) => {
    const newAnimeName = req.body;
    newAnimeName.id = ++AUTOINCREMENT;
    animeNames.push(newAnimeName);
    res.send({ data: newAnimeName });
});

app.patch("/anime_names/:id", (req, res) => {
    animeNames = animeNames.map(animeName => {
        if (animeName.id === Number(req.params.id)) {
            return { ...animeName, ...req.body, id: animeName.id };
        }
        return animeName;
    });
    res.send({ data: wasUpdated });
});

app.delete("/anime_names/:id", (req, res) => {
    animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id));
    res.send({ data: animeNames });
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});


