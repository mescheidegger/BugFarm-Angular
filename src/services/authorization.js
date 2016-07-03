'use strict';
(function () {
    function authorization($resource) {
        var register = $resource('/api/auth/register/:fname/:lname/:userName/:password/:email', {
            fname: '@fname',
            lname: '@lname',
            userName: '@userName',
            password: '@password',
            email: '@email'
        }, {

            addUser: {
                method: 'POST',
                params: {
                    create: true
                }
            }
        });

        var login = $resource('/api/auth/login/:userName/:password', {
            userName: '@userName',
            password: '@password'
        }, {
            validateLogin: {
                method: 'POST'
            }
        });
        
        var lostPassword = $resource('/api/auth/lostPassword/:email',{
            email: '@email'
        },{
            resendPassword: {
                method: 'POST'
            }
        });
        
        return {
            registerUser: function(fname, lname, userName, password, email){
                return register.addUser({fname:fname, lname:lname, username:userName, password:password, email:email});
            },
            loginUser: function(username, password){
                return login.validateLogin({username:username, password:password})
            },
            sendNewPassword: function(email){
                return lostPassword.resendPassword({email:email})
            }
        };
    }

    angular 
        .module('bugFarmApp')
        .factory('authorization', authorization);
})();