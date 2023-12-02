//DB 접속 설정
const conn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};
let db;

export default async function dbHandler() {
  const mysql = require("mysql");
  try {
    const connection = mysql.createConnection(conn);
    db = await connection.connect();

    console.log("db", db);
  } catch (err) {
    console.error(err);
  }
}

module.exports = db;
