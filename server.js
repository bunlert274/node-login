process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/config');
const mongoose = require('./config/mongoose');
const express = require('./config/express');
const passportConf = require('./config/passport');

const db = mongoose();
const app = express();
const passport = passportConf();

app.listen(config.port);

module.exports = app;
console.log(`Server running ${process.env.NODE_ENV} Mode at PORT ${config.port}`);
