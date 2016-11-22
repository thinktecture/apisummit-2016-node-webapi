'use strict';

const customerService = require('../services/customer');

class CustomerController {
    init(server) {
        server.addRoute('get', 'api/customer/:id', this.get.bind(this));
        server.addRoute('post', 'api/customer', this.post.bind(this));
        server.addRoute('del', 'api/customer/:id', this.remove.bind(this));
    }

    get(req, res) {
        customerService.get(req.params.id)
            .then(
                customer => res.json(200, customer),
                err => res.json(500, err)
            );
    }

    post(req, res) {
        customerService.create(req.body.firstName, req.body.lastName)
            .then(
                customer => res.json(200, customer),
                err => res.json(500, err)
            );
    }

    remove(req, res) {
        customerService.remove(req.params.id)
            .then(
                () => res.json(200, "Ok"),
                err => res.json(500, err)
            );
    }
}

module.exports = new CustomerController();
