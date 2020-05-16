const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  password: "1234567",
  user: "root",
  database: "expat",
  host: "127.0.0.1",
  port: 3306
});

let countrydb = {};

countrydb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM countries", (err, results, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
      // res.send(results)
    });
  });
};

countrydb.one = id => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM countries WHERE id = ?",
      [id],
      (err, results, fields) => {
        if (err) {
          return reject(err);
        }
        // return only the first row
        return resolve(results[0]);
        // res.send(results)
      }
    );
  });
};
module.exports = countrydb;
