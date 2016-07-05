'use strict';
(function () {
    function authorization($resource) {
        var register = $resource('/api/auth/register', {

        }, {

            addUser: {
                method: 'POST'
            }
        });

        var login = $resource('/api/auth/login', {
      
        }, {
            validateLogin: {
                method: 'POST'
            }
        });

        var lostPassword = $resource('/api/auth/lostPassword', {
            
        }, {
            resendPassword: {
                method: 'POST'
            }
        });

        return {
            registerUser: function (userData) {
                return register.addUser(userData);
            },
            loginUser: function (userData) {
                return login.validateLogin(userData)
            },
            sendNewPassword: function (userData) {
                return lostPassword.resendPassword(userData)
            }
        };
    }

    angular
        .module('bugFarmApp')
        .factory('authorization', authorization);
})();