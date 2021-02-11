const express = require("express");
const app = express();

// consider what datatype to store your data in
// you are allowed to hardcode the id

app.get("/", (req, res) => {
    res.send({ message: "First call to /" });
});

app.get("/anotherpath/id", (req, res) => {
    const id = 1;
    res.send({ data: "some other things" });
});

app.listen(8080);
