var sql = require('mssql');

var searchService = function () {

    function searchIssues(searchterm, success, error) {
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
                            error();
                        } else {
                            var results = recordset;
                            success(results);
                        }
                    });
            });
    }
    

    return {
        searchIssues: searchIssues
    };
};

module.exports = searchService;