var express = require('express');
var authRouter = express.Router();
var passport = require('passport');

var router = function(){
    
    var authController = require('../controllers/authController')();
    
    authRouter.route('/register')
    .all(authController.checkIfUserExists)
    .post(authController.addUser);
    
    authRouter.route('/login')
    .post(passport.authenticate('local',{
        failureRedirect: '/'
    }),
         authController.session);
   // .post(authController.loginUser);
    
    authRouter.route('/lostPassword')
    .post(authController.resendEmail);
    
    return authRouter;
};

module.exports = router;