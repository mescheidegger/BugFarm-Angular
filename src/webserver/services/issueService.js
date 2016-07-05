var sql = require('mssql');

var issueService = function () {

    function getIssueByKey(req, res, success, error) {
        var issueKey = req.params.issueKey;
        var ps = new sql.PreparedStatement();
        ps.input('issueKey', sql.NVarChar);
        ps.prepare('select * from dbo.udfGetIssueDetails(@issueKey)',
            function (err) {
                ps.execute({
                        issueKey: issueKey
                    },
                    function (err, recordset) {
                        if (recordset.length === 0) {
                            error();
                        } else {
                            var results = recordset[0];
                            success(results);
                        }
                    });
            });
        
    }
    

    return {
        getIssueByKey: getIssueByKey
    };
};

module.exports = issueService;