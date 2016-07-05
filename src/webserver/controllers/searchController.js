var searchController = function () {

    var searchService = require('../services/searchService')();

    var send404 = function (res) {
        res.status(404).send('Not Found');
    };

    var sendResults = function (res, results) {
        res.setHeader('Content-Type', 'application/json');
        res.send(results);
        res.end();
    };

    var getAllIssues = function (req, res) {
        searchService.searchIssues('',
            function (results) {
                sendResults(res, results);
            },
            function () {
                send404(res);
            });
    };

    var getIssuesByValue = function (req, res) {
        var searchterm = '';
        if (req.params.searchval !== undefined) {
            searchterm = req.params.searchval;
        }
        searchService.searchIssues(searchterm,
            function (results) {
                sendResults(res, results);
            },
            function () {
                send404(res);
            });
    };

    return {
        getAllIssues: getAllIssues,
        getIssuesByValue: getIssuesByValue
    };


};

module.exports = searchController;