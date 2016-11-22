'use strict';

const Sequelize = require('sequelize');

class Database {
    constructor() {
        this._models = {};
        this._sequelize = void 0;
    }

    init() {
        this._sequelize = new Sequelize('postgres://nodeJsApiSummit:nodeJsApiSummit@localhost:5432/nodeJsApiSummit');

        this._initModels();

        return this._sequelize.sync({
            force: true
        })
            .then(() => {
                return {
                    models: this._models
                }
            });
    }

    _initModels() {
        const customerModel = this._sequelize.import('../models/customer.js');
        this._models[customerModel.name] = customerModel;
    }
}

let database;

module.exports = {
    get: () => {
        if (database) {
            return Promise.resolve(database);
        }

        const db = new Database();

        return db.init()
            .then(initializedDb => {
                database = initializedDb;
                return database;
            });
    }
};
