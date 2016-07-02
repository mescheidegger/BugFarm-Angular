'use strict';
(function () {
    function search($resource) {
        var resource = $resource('/api/search/:searchval', {
            searchval: '@searchval'
        }, {});
        return {
            getIssues: function () {
                return resource.query();
            },
            getIssuesByVal: function(searchval){
                return resource.query({searchval:searchval});//get({searchval:searchval});
            }
        };
    }

    angular
        .module('bugFarmApp')
        .factory('search', search);
})();