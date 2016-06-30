var searchController = function () {
    
    var searchService = require('../services/searchService')();
    
    var getAllIssues = function (req, res) {
        searchService.searchIssues(req, res, '');
    };

    
    var getIssuesByValue = function (req, res) {
        if (req.params.searchval == undefined) {
            var searchterm = '';   
        } else {
            var searchterm = req.params.searchval;    
        };
        searchService.searchIssues(req, res, searchterm);
    };

    return {
        getAllIssues: getAllIssues,
        getIssuesByValue: getIssuesByValue
    };


};

module.exports = searchController;