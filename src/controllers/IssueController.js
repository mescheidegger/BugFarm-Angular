'use strict';
(function () {
    function IssueController($scope, $location, issue) {       
        issue.getIssueDetails();    
    };

    angular
        .module('bugFarmApp')
        .controller('IssueController', IssueController);
})();