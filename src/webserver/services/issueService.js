var sql = require('mssql');

var issueService = function () {

    function getIssueByKey(req, res) {
        console.log(req.params.issueKey);
    };
    

    return {
        getIssueByKey: getIssueByKey
    };
}

module.exports = issueService;