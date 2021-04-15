const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const projectsRouter = require("./routes/projects.js");

app.use(projectsRouter.router);

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");


app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on", server.address().port);
});