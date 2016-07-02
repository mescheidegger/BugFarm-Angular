var sql = require('mssql');

var searchService = function () {

    function searchIssues(req, res, searchterm) {
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
                            var results = recordset;
                            res.setHeader('Content-Type', 'application/json');
                            res.send(results);
                            res.end();
                        }
                    });
            });
    }
    

    return {
        searchIssues: searchIssues
    };
};

module.exports = searchService;