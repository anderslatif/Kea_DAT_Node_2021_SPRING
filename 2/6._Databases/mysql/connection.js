const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'beers'
});

connection.connect();

if (process.argv.includes("--createdb")) {
    console.log("Creation Mode Activated");
}

