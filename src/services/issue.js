'use strict';
(function () {
    function issue($resource) {
        var resource = $resource('/api/issue/:issueKey', {
            issueKey: '@issueKey'
        }, {});
        
        return {
            getIssueDetails: function (issueKey) {
                return resource.get({issueKey:issueKey});
            }
        };
    };



    angular
        .module('bugFarmApp')
        .factory('issue', issue);
})();