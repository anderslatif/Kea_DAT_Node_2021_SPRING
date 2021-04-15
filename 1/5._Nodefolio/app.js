const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static("public"));

const projectsRouter = require("./routes/projects");

app.use(projectsRouter.router);

const fs = require("fs");

const nav = fs.readFileSync(__dirname + "/public/nav/nav.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");

app.get("/", (req, res) => {
    res.send(nav + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(nav + projects + footer);
});

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
