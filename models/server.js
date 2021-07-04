const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        // DATABASES
        this.database();


        // MIDDLEWARES
        this.middlewares();

        //ROUTES
        this.routes();
    }

    async database() {
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //BODY
        this.app.use(express.json());

        // DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;