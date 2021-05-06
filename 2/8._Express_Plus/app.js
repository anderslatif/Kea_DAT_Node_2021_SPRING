import express from "express";
const app = express();



const ipLogger = (req, res, next) => {
    console.log("The client IP is:", req.ip);
    req.myData = "this could be an alternative body"
    next();
};

app.use(ipLogger);


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

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
