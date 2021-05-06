// const router = require("express").Router();
import express from "express";
const router = express.Router();

router.get("/setsession", (req, res) => {
    req.session.date = new Date();
    res.send({});
});

router.get("/getsession", (req, res) => {
    console.log(req.session.date);
    res.send({});
});

export default router;