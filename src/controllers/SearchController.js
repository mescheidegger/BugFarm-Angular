'use strict';
(function () {
    function SearchController($scope, $routeParams, search, $location) {

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
        };
        
                
        $scope.browseToIssue = function(issueKey) {
            if (issueKey !== 'undefined')
                $location.url('/issue/' + issueKey);     
        };


    };

    angular
        .module('bugFarmApp')
        .controller('SearchController', SearchController);
})();