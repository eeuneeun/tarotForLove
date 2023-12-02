import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../config/db");

console.log("db pool 객체", db);

export default async function dbHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let conn;
    try {
      conn = await db.getConnection();
      const rows = await conn.query("SELECT 1 as val");
      // rows: [ {val: 1}, meta: ... ]

      const rowsData = await conn.query("SELECT 1 + 1 AS solution");
      console.log("row data: ", rowsData);
      res.status(200).json(rowsData);

      // const dbResponse = await conn.query(`INSERT INTO myTable value (?, ?)`, [1, "mariadb"]);
      // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
      // res.status(200).json(dbResponse);
    } catch (err) {
      console.log("error here : ", err);
      throw err;
    } finally {
      if (conn) {
        conn.release(); //release to pool
      }
    }
  }
}

export function test(req: NextApiRequest, res: NextApiResponse) {
  const result = db.query(
    "SELECT * FROM user",
    function (err: any, result: any) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json(result);
      }
    }
  );

  return result;
}
