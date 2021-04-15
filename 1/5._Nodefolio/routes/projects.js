const router = require("express").Router();

const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio with Node.js",
        gitURL: "https://github.com/anderslatif/Kea_DAT_Node_2021_SPRING.git/1/5._Nodefolio",
        images: [],
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
