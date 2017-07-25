/**
 * Created by Shweta on 22/6/17.
 * @description: Main view file for the app
 */


'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp', [
    'ngRoute',
    'mainApp.view1',
    'mainApp.view2'
])


    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/login'});
    }]);


angular.module('mainApp').controller('indexController', ['$scope', '$location', function ($scope, $location) {

   /* $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    };
    $scope.Current = new Date();
    if (localStorage.getItem('authToken') == null) {
        $location.path("/");
    }
    $scope.data = localStorage.username;
    $scope.logout = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('authToken');
        $location.path("/");
    } */


}]);