const db = require("./connection").connection;

db.query(`INSERT into beers VALUES (?, ?)`, ["Brewdog", 7.0], (error, results, fields) => {
    console.log(results);
});

db.query("SELECT * FROM beers", (error, results, fields) => {
    console.log(results);
});

