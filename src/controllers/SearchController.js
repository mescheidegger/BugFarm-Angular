'use strict';
(function () {
    function SearchController($scope, $routeParams, search) {
        $scope.searchval = $routeParams.searchval;
        

        search.getIssuesByVal($routeParams.searchval);
    };

    angular
        .module('bugFarmApp')
        .controller('SearchController', SearchController);
})();