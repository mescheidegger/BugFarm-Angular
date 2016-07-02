var sql = require('mssql');

var issueService = function () {

    function getIssueByKey(req, res) {
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
                            res.status(404).send('Not Found');
                        } else {
                            var results = recordset[0];
                            res.setHeader('Content-Type', 'application/json');
                            res.send(results);
                            res.end();
                        }
                    });
            });
        
    };
    

    return {
        getIssueByKey: getIssueByKey
    };
}

module.exports = issueService;