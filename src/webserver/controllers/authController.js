var authController = function () {

    var authService = require('../services/authService')();

    var checkIfUserExists = function (req, res, next) {

    };

    var userValidate = function (req, res, next) {
        if (!req.user) {
            res.redirect('/');
        };
        next();
    };

    var addUser = function (req, res, next) {

    };

    var session = function (req, res) {
        var temp = req.session.passport; // {user: 1}
        req.session.regenerate(function (err) {
            //req.session.passport is now undefined
            req.session.passport = temp;
            req.session.save(function (err) {
                res.redirect('/Auth/profile');
            });
        });
    };



    return {
        checkIfUserExists: checkIfUserExists,
        userValidate: userValidate,
        addUser: addUser,
        session: session
    };


};

module.exports = authController;