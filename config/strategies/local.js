const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('mongoose').model('users');

passport.use(new LocalStrategy((username, password, done) => {
    Users.findOne(
        {username: username},
        (err,user) => {
            if (err) return done(err);
            if (!user) return done(err, false, {loginMessage: 'Unknown username'});
            if (!user.authenticate) return done(err, false, {loginMessage: 'Invalid Password'});
            return done(null, user);
        }
    )
}));

module.exports = () => {
    return passport;
}
