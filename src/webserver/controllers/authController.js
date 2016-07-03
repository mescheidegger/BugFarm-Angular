var authController = function () {

    var authService = require('../services/authService')();

    var checkIfUserExists = function (req, res, next) {
        if (authService.checkUser(req.params.userName, req.params.email)){
            res.send('Duplicate User or Email')
        } else{
            next();
        };
    };
    
    var addUser = function (req, res, next) {
        console.log(req.params.userName);
    };

    var userValidate = function (req, res, next) {
        if (!req.user) {
            res.redirect('/');
        };
        next();
    };
    
    var loginUser = function(req, res){
        
    };
    
    var resendEmail = function(req, res){
        
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
        session: session,
        loginUser: loginUser,
        resendEmail: resendEmail
    };


};

module.exports = authController;