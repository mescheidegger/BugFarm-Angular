var issueController = function () {
    
    var issueService = require('../services/issueService')();
    
    var getIssue = function (req, res) {
        issueService.getIssueByKey(req, res);
    };

    return {
        getIssue: getIssue,
    };


};

module.exports = issueController;//set up web server