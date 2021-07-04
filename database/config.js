const mysql = require('mysql');

const dbConnection = async() => {
    try {
        var con = await mysql.createConnection({
            user: process.env.USER,
            password: process.env.PASS,
        }).connect();

        console.log('Base de datos Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

}

module.exports = {
    dbConnection,
}