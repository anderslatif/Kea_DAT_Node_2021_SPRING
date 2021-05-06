import express from "express";
const app = express();

/* 
How to get an external library in our HTML files
- Get from the CDN
- Put in our client in a script file and include it (serve statically)
- Get from NPM - Copy files over from NPM manually
                - Point to the file from the html script tag (src) .. remember to serve that single file statically / folder 
*/

import helmet from "helmet";
app.use(helmet());

import rateLimit from "express-rate-limit";
const baseLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
});
app.use(baseLimiter);
app.use("/auth/*", authLimiter);

app.get("/auth/login", (req, res) => {
    res.send({ message: "Logging in..." });
});

const ipLogger = (req, res, next) => {
    console.log("The client IP is:", req.ip);
    req.myData = "this could be an alternative body"
    next();
};

app.use(ipLogger);

import session from "express-session";
app.use(session({
    secret: 'keyboard cat is my favorite cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


import sessionRouter from './router/session.mjs';
app.use(sessionRouter);


app.get("/", (req, res, next) => {
    console.log("First route was hit but pass it on");
    // res.send(`<h1>First Route</h1>`);
    next();
});

app.get("/", (req, res) => {
    res.send(`<h1>Second Route</h1>`);
});

app.get("/modifiedByMyCustomMiddleware", (req, res) => {
    res.send(req.myData);
});

app.get("/*", (req, res) => {
    res.status(404).send(`<h1>Sorry but this page was not found.</h1>`);
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
