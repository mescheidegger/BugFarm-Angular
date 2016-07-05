'use strict';
(function () {
    function ModalLoginController($scope, $uibModalInstance, authorization) {
        $scope.showLogin = true;
        $scope.showRegister = false;
        $scope.showLost = false;

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.login = function (user, loginForm) {
            if (loginForm.$valid) {
                $uibModalInstance.close(user);
            };
        };

        $scope.lostPassword = function (user, lostPasswordForm) {
            if (lostPasswordForm.$valid) {
                $uibModalInstance.close(user);
            };
        };

        $scope.register = function (user, registerForm) {
            if (registerForm.$valid) {

                authorization.registerUser(user)
                    .$promise
                    .then(
                        function (response) {
                            console.log('Successful Register');

                        })
                    .catch(
                        function (response) {
                            console.log(response);
                        });

                $uibModalInstance.close(user);
            };
        };

        $scope.toggleForms = function (showForm) {
            $scope.showLogin = (showForm === 'Login');
            $scope.showRegister = (showForm === 'Register');
            $scope.showLost = (showForm === 'Lost');
        };
    }

    angular
        .module('bugFarmApp')
        .controller('ModalLoginController', ModalLoginController);
})();
