'use strict';
(function () {
    var bugFarmApp = angular.module('bugFarmApp', ['ngResource', 'ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchController'
            });
            $routeProvider.when('/search/:searchval', {
                templateUrl: 'templates/search.html',
                controller: 'SearchController'
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode(true);
        });

})();