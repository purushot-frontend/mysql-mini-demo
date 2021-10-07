const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "database-name",
  password: "password",
});

module.exports = pool.promise();
