const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'TheSecretKeyIsNotAFunctionAndEveryThingIsNotSafe'
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require('../app/route/users')(app);

app.use(express.static('./public'));

module.exports = () => {
    return app;
};
