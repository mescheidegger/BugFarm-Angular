var express = require('express');
var authRouter = express.Router();

var router = function(){
    
    var authController = require('../controllers/authController')();
    
    authRouter.route('/register')
    .all(authController.checkIfUserExists)
    .post(authController.addUser);
    
    authRouter.route('/login/:userName/:password')
    .post(authController.loginUser);
    
    authRouter.route('/lostPassword/:email')
    .post(authController.resendEmail);
    
    return authRouter;
};

module.exports = router;