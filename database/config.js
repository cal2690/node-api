const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
});

dbConnection.connect(function(err) {
    if (err) return console.log(err);
    console.log('Database Online');
});

module.exports = {
    dbConnection,
}