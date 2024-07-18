const mysql = require('mysql2/promise');
const logger = require('../logs.js');

const connection = mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.getConnection((err) => {
  if (!err) {
    logger.info('connected..');
  } else {
    logger.logError('Error In Database Connection: ' + err);
  }
});

module.exports = connection;
