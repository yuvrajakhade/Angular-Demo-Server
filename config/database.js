var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = con;
