'use strict';
(function () {
    function search($resource) {
        var resource = $resource('/search/:searchval', {
            searchval: '@searchval'
        }, {
            "getAll": {
                method: "GET",
                isArray: true
            }
        });
        return {
            getIssues: function () {
                return resource.query();
            },
            getIssuesByVal: function(searchval){
                return resource.get({searchval:searchval});
            }
        };
    };

    angular
        .module('bugFarmApp')
        .factory('search', search);
})();