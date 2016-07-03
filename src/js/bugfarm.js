'use strict';
(function () {
    var bugFarmApp = angular.module('bugFarmApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/issue/:issueKey', {
               templateUrl: 'templates/issue.html',
                controller: 'IssueController',
                resolve:{
                    event: function($route, issue){
                        return issue.getIssueDetails($route.current.pathParams.issueKey).$promise;
                    }
                }
            });
            $routeProvider.when('/search/', {
                templateUrl: 'templates/search.html',
                controller: 'SearchController',
                resolve: {
                    event: function($route, search){
                        return search.getIssues().$promise;
                    }
                }
            });
            $routeProvider.when('/search/:searchval', {
                templateUrl: 'templates/search.html',
                controller: 'SearchController',
                resolve: {
                    event: function($route, search){
                        return search.getIssuesByVal($route.current.pathParams.searchval).$promise;
                    }
                }
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            });
            
            $locationProvider.html5Mode(true);
        });

})();