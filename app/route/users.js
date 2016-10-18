const Users = require('mongoose').model('users');
const passport = require('passport');

module.exports = (app) => {
    app.get('/user',(req, res) => {
        Users.find((err, user) => {
            if (err) {
                return next(err);
            } else {
                res.json(user);
            }
        });
    });

    app.post('/login', passport.authenticate('local', {failureFlash:true}), (req, res) => {
        res.json(req.user);
    })

    app.get('/getInfo', (req, res) => {
        res.json(req.user);
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

}
