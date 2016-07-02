var searchController = function () {
    
    var searchService = require('../services/searchService')();
    
    var getAllIssues = function (req, res) {
        searchService.searchIssues(req, res, '');
    };
  
    var getIssuesByValue = function (req, res) {
        var searchterm = '';
        if (req.params.searchval !== undefined) {
            searchterm = req.params.searchval;    
        }
        searchService.searchIssues(req, res, searchterm);
    };

    return {
        getAllIssues: getAllIssues,
        getIssuesByValue: getIssuesByValue
    };


};

module.exports = searchController;