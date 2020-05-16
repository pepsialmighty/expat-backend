const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  password: 'TheFinland-Vietnam-Connection01052020',
  user: 'root',
  database: 'ExpatList',
  host: '35.205.164.218',
  port: 3306,
});

let countrydb = {};

countrydb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Countries', (err, results, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
      // res.send(results)
    });
  });
};

countrydb.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM Countries WHERE id = ?',
      [id],
      (err, results, fields) => {
        if (err) {
          return reject(err);
        }
        // return only the first row
        return resolve(results[0]);
        // res.send(results)
      },
    );
  });
};
module.exports = countrydb;
