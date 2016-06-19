var app = angular.module('SuggestionBox', ['ngRoute']).config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl :'views/home.html',
                controller: 'HomeController'
            })
        $routeProvider.when('/suggestion/:id', {
        				templateUrl :'views/suggestion.html',
                controller: 'SuggestionController'
        })
}]);