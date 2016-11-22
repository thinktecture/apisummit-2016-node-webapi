'use strict';

const restify = require('restify'),
    controllers = require('../controllers');

class Server {
    constructor() {
        this._server = restify.createServer();
        this._server.use(restify.bodyParser());
    }

    start(port) {
        this._initializeControllers();

        this._server.listen(port, () => console.log('Server is up and running'));
    }

    addRoute(method, url, callback) {
        if (!method) {
            throw new Error('Parameter method not set.');
        }

        if (!url) {
            throw new Error('Parameter url not set.');
        }

        if (!callback) {
            throw new Error('Parameter callback not set.');
        }

        method = method.toLowerCase();

        this._server[method](url, callback);
        console.log(`Added api ${method.toUpperCase()} ${url}`);
    }

    _initializeControllers() {
        controllers.forEach(c => c.init(this));
    }
}

module.exports = new Server();
