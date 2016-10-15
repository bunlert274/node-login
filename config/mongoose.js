const config = require('./config');
const mongoose = require('mongoose');

const db = mongoose.connect(config.db);

require('../app/modal/users');

module.exports = () => {
    return db;
};
