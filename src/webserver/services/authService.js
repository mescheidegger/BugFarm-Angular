var sql = require('mssql');

var authService = function () {

    var checkUser = function (userName, email) {
        var ps = new sql.PreparedStatement();
        ps.input('userName', sql.NVarChar);
        ps.input('email', sql.NVarChar);
        ps.prepare('select * from dbo.udfCheckIfUserExists(@userName, @email)',
            function (err) {
                ps.execute({
                        userName: userName,
                        email: email
                    },
                    function (err, recordset) {
                        if (recordset.length === 0) {
                            return false;
                        } else {
                            return true;
                        }
                    });
            });
    };
    
    return {
        checkUser: checkUser
    }

};

module.exports = authService;