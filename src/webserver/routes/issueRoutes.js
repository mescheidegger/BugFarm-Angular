var express = require('express');
var issueRouter = express.Router();

var router = function(){
    
    var issueController = require('../controllers/issueController')();
    
    issueRouter.route('/:issueKey')
        .get(issueController.getIssue);
    
    return issueRouter;
};

module.exports = router;