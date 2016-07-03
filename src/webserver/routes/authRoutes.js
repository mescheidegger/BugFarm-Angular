var express = require('express');
var authRouter = express.Router();

var router = function(){
    
    var authController = require('../controllers/authController')();
    
   // authRouter.route
    
    return authRouter;
};

module.exports = router;