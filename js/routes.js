var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppControllers'
]);

myApp.config(['$routeProvider',

  function($routeProvider){

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .when('/operation', {
        templateUrl: 'views/operation.html',
        controller: 'operationCtrl'
      })
      .otherwise({
	redirectTo: '/home/world !'
      });
  }
]);
