'use strict';
(function () {
    function IssueController($scope, $routeParams, issue) {       
        issue.getIssueDetails($routeParams.issueKey)
        .$promise
        .then(
            function(issueDetails){
                $scope.issueDetails = issueDetails;
            })
        .catch(
            function(response){
                console.log(response);
            });
    };

    angular
        .module('bugFarmApp')
        .controller('IssueController', IssueController);
})();