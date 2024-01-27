const mysql = require("mysql2");
let db;
try {
  db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "195889",
    database: "tarotlove",
  });
} catch (err) {
  console.error(err);
}
module.exports = db;
