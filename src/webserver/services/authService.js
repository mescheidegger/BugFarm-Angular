var sql = require('mssql');

var authService = function () {

    var checkUser = function (userName, email, success, error) {
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
                            success();
                        } else {
                            error();
                        }
                    });
            });
    };

    var addUser = function (fname, lname, userName, email, password) {
        var ps = new sql.PreparedStatement();
        ps.input('fname', sql.NVarChar);
        ps.input('lname', sql.NVarChar);
        ps.input('userName', sql.NVarChar);
        ps.input('email', sql.NVarChar);
        ps.input('password', sql.NVarChar);

        ps.prepare('EXEC dbo.spAddUser @userName, @fname, @lname, @password, @email',
            function (err) {
                ps.execute({
                        fname: fname,
                        lname: lname,
                        userName: userName,
                        email: email,
                        password: password
                    },
                    function (err, recordset) {

                        if (err === null) {
                            console.log('Successfully added user');
                        } else {
                            console.log('Was unable to add user');
                        };

                    });
            });
    }

    return {
        checkUser: checkUser,
        addUser: addUser
    }

};

module.exports = authService;