import express from "express";
const router = express.Router();

router.get("/setsession", (req, res) => {
    req.session.fact = "Cats are cute";
    res.send({});
});

router.get("/getsession", (req, res) => {
    console.log("Fact", req.session.fact);
    res.send({});
});

export default router;