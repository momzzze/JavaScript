const encryption = require('../util/encryption');
const User = require('../models/User');


module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: async (req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
        try {
            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                roles: ['User']
            });
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('user/register', user);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('user/register');
        }

    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('user/login');
    },
    loginPost: async (req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({ username: reqUser.username });
            if (!user) {
                reqUser.error = 'Invalid username!';
                res.render('user/login', reqUser);
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                reqUser.error = "Invalid Password!";
                res.render('user/login', reqUser);
                return;
            }
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('user/register', user);
                } else {
                    res.redirect('/');
                }
            });



        } catch (err) {
            console.log(err)
        }
    },
    myRents: (req, res) => {

    }
};