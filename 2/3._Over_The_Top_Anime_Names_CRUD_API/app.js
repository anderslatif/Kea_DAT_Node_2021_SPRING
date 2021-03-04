const express = require("express");
const app = express();

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

app.get("/anime_names", (req, res) => {
    res.send({ data: animeNames });
});

app.get("/anime_names/:id", (req, res) => {
    const animeNameId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeNameId);
    res.send({ data: foundAnimeName });
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});


