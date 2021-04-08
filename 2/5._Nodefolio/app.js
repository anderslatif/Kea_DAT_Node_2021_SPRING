const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");

// Server-side rendering
// read the html file as text
// send the text content to the client

// In node there are two ways to read a file
// async : correct 99.9% of the time
// sync  : <- use this here cause it's not a problem that the server is blocked when it starts
            // cause we need the html before the routes should be accessible anyway

            /* Task */
    // serve the frontpage by server-side rendering it

// SEO 

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