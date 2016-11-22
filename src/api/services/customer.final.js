'use strict';

const database = require('../database');

class CustomerService {
    get(id) {
        return database.get()
            .then(db => db.models.customer.findById(id));
    }

    create(firstName, lastName) {
        return database.get()
            .then(db => db.models.customer.create({
                firstName, lastName
            }));
    }

    remove(id) {
        return this.get(id)
            .then(model => model.destroy());
    }
}

module.exports = new CustomerService();
