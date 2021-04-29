require("dotenv").config();

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

connection.connect();

if (process.argv.includes("--createdb")) {
    const createBeersTable = "CREATE TABLE IF NOT EXISTS beers (brand VARCHAR(50), alcLevel FLOAT);";
    connection.query(createBeersTable, (error, result, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log(result);
        connection.end();
    });
}

module.exports = {
    connection
};
