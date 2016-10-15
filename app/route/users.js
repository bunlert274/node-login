const Users = require('mongoose').model('users');
const passport = require('passport');

module.exports = (app) => {
    app.get('/',(req, res) => {
        Users.find((err, user) => {
            if (err) {
                return next(err);
            } else {
                res.json(user);
            }
        });
    });

    app.route('/login')
    .post(passport.authenticate('local', {
        successRedirect: '/getInfo',
        failureRedirect: '/',
        failureFlash: true
    }));

    app.get('/getInfo', (req, res) => {
        res.json(req.user);
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

}
