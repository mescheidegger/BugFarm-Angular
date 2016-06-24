var sql = require('mssql');

var searchController = function () {

    var getAllIssues = function (req, res) {
        console.log('searching all issues');
    };
    
    var getIssuesByValue = function(req, res){
        console.log('searching by value ' + req.params.searchval);   
    };

    return {
        getAllIssues: getAllIssues,
        getIssuesByValue: getIssuesByValue
    };

};

module.exports = searchController;