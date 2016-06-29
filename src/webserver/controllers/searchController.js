var sql = require('mssql');


//eventually extract these out to a service
var searchController = function () {

    function searchIssues (req, res, searchterm){
        var fetch = 50; //show 50 results at a time
        var offset = 0; //will extract out of request eventually
        var ps = new sql.PreparedStatement();
        ps.input('searchterm', sql.NVarChar);
        ps.input('fetch', sql.Int);
        ps.input('offset', sql.Int);
        ps.prepare('select * from dbo.udfSearchIssues(@searchterm, @offset, @fetch)',
            function (err) {
                ps.execute({
                        searchterm: searchterm,
                        fetch: fetch,
                        offset: offset
                    },
                    function (err, recordset) {
                        if (recordset.length === 0) {
                            res.status(404).send('Not Found');
                        } else {
                            res.setHeader('Content-Type', 'application/json');
                            res.send(recordset);
                            res.end();
                            console.log(recordset);
                        }
                    });
            });    
    }
    
    var getAllIssues = function (req, res) {
        searchIssues(req, res, '');
    };

    
    var getIssuesByValue = function (req, res) {
        if (req.params.searchval == undefined) {
            var searchterm = '';   
        } else {
            var searchterm = req.params.searchval;    
        };
        searchIssues(req, res, searchterm);
    };

    return {
        getAllIssues: getAllIssues,
        getIssuesByValue: getIssuesByValue
    };


};

module.exports = searchController;