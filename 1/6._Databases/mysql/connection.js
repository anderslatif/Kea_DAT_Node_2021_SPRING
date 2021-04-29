const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'movies'
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
        connection.end();
    });
}

