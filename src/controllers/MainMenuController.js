'use strict';
(function () {
    function MainMenuController($scope, $location, $uibModal) {       
        $scope.animationsEnabled = true;
        
        $scope.createIssue = function () {
            console.log('modal needed for creating issue');
        };
        
        $scope.searchIssues = function(searchval) {
            var temp;
            searchval === undefined ? temp = '' : temp = searchval;
            $location.url('/search/' + temp);
            $scope.searchval = temp;
        };
        
        $scope.signIn = function(){
            
            var modalLoginInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/modalLogin.html',
                controller: 'ModalLoginController',
                size: 'sm',
                resolve: {}
            });
            
        };
        
        $scope.toggleAnimation = function(){
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
        
    }

    angular
        .module('bugFarmApp')
        .controller('MainMenuController', MainMenuController);
})();