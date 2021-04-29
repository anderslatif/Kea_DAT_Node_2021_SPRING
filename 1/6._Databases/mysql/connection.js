require('dotenv').config();

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  database : process.env.DB_DATABASE,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD
});

connection.connect();

if (process.argv.includes("--createdb")) {
    connection.query(`CREATE TABLE IF NOT EXISTS actors 
        (   id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(70), 
            height INT
        )`, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
    });
}

module.exports = {
    connection
};