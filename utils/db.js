import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export const db1 = (query, cb) => {
  var connection = mysql.createConnection({
    host: process.env.mysqlHOST,
    user: process.env.mySQLUSER,
    password: process.env.mySQLPASS,
    database: process.env.mySQLDB,
    timeout: 10,
  });
  connection.query(query, (err, result) => {
    connection.destroy();
    cb(err, result);
  });
};
