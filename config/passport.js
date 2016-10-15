const passport = require('passport');
const mongoose = require('mongoose');

const Users = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findOne(
        {_id: id},
        '-password',
        (err, user) => {
                done(err, user);
        }
    );
});

require('./strategies/local.js')();

module.exports = () => {
    return passport;
}
