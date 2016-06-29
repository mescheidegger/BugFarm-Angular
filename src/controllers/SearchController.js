'use strict';
(function () {
    function SearchController($scope, $routeParams, search) {

        if ($routeParams.searchval == undefined) {
            $scope.searchval = '';
            search.getIssues()
                .$promise.then(
                    function (searchresults) {
                        $scope.searchresults = searchresults;
                        console.log(searchresults);
                    })
                .catch(
                    function (response) {
                        console.log(response);
                    });
        } else {
            $scope.searchval = $routeParams.searchval;
            search.getIssuesByVal($scope.searchval)
                .$promise
                .then(
                    function (searchresults) {
                        $scope.searchresults = searchresults;
                        console.log(searchresults);
                    })
                .catch(
                    function (response) {
                        console.log(response);
                    });;
        }


    };

    angular
        .module('bugFarmApp')
        .controller('SearchController', SearchController);
})();