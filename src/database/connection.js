const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "app_user",
  password: "app_password",
  database: "app_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
