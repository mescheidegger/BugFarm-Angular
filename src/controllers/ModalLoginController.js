'use strict';
(function () {
    function ModalLoginController($scope, $uibModalInstance) {
        $scope.showLogin = true;
        $scope.showRegister = false;
        $scope.showLost = false;

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.login = function () {

        };
        
        $scope.lostPassword = function() {
            
        };
        
        $scope.register = function(){
            
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