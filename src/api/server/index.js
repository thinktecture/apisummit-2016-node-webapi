'use strict';

const restify = require('restify'),
    controllers = require('../controllers');

class Server {
    constructor() {
        // TODO: Implement me! (Create server)
    }

    start(port) {
        this._initializeControllers();

        // TODO: Implement me! (Start server)
    }

    addRoute(method, url, callback) {
        // TODO: Implement me! (Add route)
    }

    _initializeControllers() {
        // TODO: Implement me! (Initialize controllers)
    }
}

module.exports = new Server();
