const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});