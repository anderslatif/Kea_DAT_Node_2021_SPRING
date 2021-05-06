// We are importing and exporting through the module system instead of commonjs (require)
import express from "express";
const app = express();

/* To give Express some security */
import helmet from "helmet";
app.use(helmet());

/* 
How to get an external library in our HTML files
- Get from the CDN
- Put in our client in a script file and include it (serve statically)
- Get from NPM - Copy files over from NPM manually
                - Point to the file from the html script tag (src) .. remember to serve that single file statically / folder 
*/

import rateLimit from "express-rate-limit";
const basicLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
});
app.use(basicLimiter); // this hits all the routes
app.use("/auth/*", authLimiter);

app.get("/auth/login", (req, res) => {
    res.send({ message: "Login ...." });
});

const ipLogger = (req, res, next) => {
    console.log(req.ip);
    next();
};

app.use(ipLogger);

app.get("/", (req, res, next) => {
    // res.send(`<h1>First</h1>`);
    console.log("it hits me... oh yeah");
    next();
});

app.get("/", (req, res, next) => {
    res.send(`<h1>Second</h1>`);
});

app.get("/house/door", (req, res) => {
    res.send(`<h1>You've come to the right place</h1>`);
});

app.get("/house/*", [], (req, res) => {
    res.send(`This house now features that.`);
});

app.get("/*", (req, res) => {
    res.status(404).send(`<h1>Sowwwy... the page you're looking for doesn't exist.</h1>`);
});

app.listen(8080, (error) => {
    console.log("Server is running on", 8080);
});