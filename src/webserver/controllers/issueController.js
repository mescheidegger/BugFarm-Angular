var issueController = function () {

    var issueService = require('../services/issueService')();

    var getIssue = function (req, res) {
        issueService.getIssueByKey(req, res,
            function (results) {
                res.setHeader('Content-Type', 'application/json');
                res.send(results);
                res.end();
            },
            function () {
                res.status(404).send('Not Found');
            });
    };

    return {
        getIssue: getIssue,
    };


};

module.exports = issueController;