'use strict';
(function () {
    function authorization($resource) {
        var register = $resource('/api/auth/register', {

        }, {

            addUser: {
                method: 'POST'
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

        var lostPassword = $resource('/api/auth/lostPassword/:email', {
            email: '@email'
        }, {
            resendPassword: {
                method: 'POST'
            }
        });

        return {
            registerUser: function (userData) {
                return register.addUser(userData);
            },
            loginUser: function (username, password) {
                return login.validateLogin({
                    username: username,
                    password: password
                })
            },
            sendNewPassword: function (email) {
                return lostPassword.resendPassword({
                    email: email
                })
            }
        };
    }

    angular
        .module('bugFarmApp')
        .factory('authorization', authorization);
})();