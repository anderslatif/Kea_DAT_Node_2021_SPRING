const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");

const basetemplate = fs.readFileSync(__dirname + "/public/basetemplate.html", "utf-8");
const koalapage = basetemplate.replace("{{BODY}}", frontpage).replace("{{TITLE}}", "Best Koala title ever").replace("{{KOALA_FACT}}", "<h1>Did you know that Koalas are always and thus black, white and asian.</h1>");

app.get("/koala", (req, res) => {
    res.send(koalapage);
});


app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/projects/projects.html");
});

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on", server.address().port);
});