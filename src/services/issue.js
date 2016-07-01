'use strict';
(function () {
    function issue($resource) {
        var resource = $resource('/api/issue/:issueKey', {
            issueKey: '@issueKey'
        }, {});
        
        return {
            getIssueDetails: function () {
                //return resource.query();
                console.log('getIssueDetails');
            }
        };
    };



    angular
        .module('bugFarmApp')
        .factory('issue', issue);
})();