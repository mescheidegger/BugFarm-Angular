var express = require('express');
var searchRouter = express.Router();

var router = function(){
    
    var searchController = require('../controllers/searchController')();
    
    searchRouter.route('/')
        .get(searchController.getAllIssues);
    searchRouter.route('/:searchval')
        .get(searchController.getIssuesByValue);
    
    return searchRouter;
};

module.exports = router;