'use strict';
(function () {
    function MainMenuController($scope, $location) {       
        $scope.createIssue = function () {
            console.log('modal needed for creating issue');
        };
        $scope.searchIssues = function(searchval) {
            var temp;
            searchval == undefined ? temp = '' : temp = searchval;
            $location.url('/search/' + temp);
            $scope.searchval = '';
        };
    };

    angular
        .module('bugFarmApp')
        .controller('MainMenuController', MainMenuController);
})();