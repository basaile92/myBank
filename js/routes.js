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
        templateUrl: 'views/solde.html',
        controller: 'operationCtrl'
      })
      .otherwise({
	       redirectTo: '/'
      });
  }
]);
