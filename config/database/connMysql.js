require('dotenv').config();

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DBNAME
});

conn.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
    }
   
    console.log('connected as id ' + conn.threadId);
});

module.exports = conn;