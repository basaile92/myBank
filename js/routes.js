var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppControllers'
]);

myApp.config(['$routeProvider',

  function($routeProvider){

    $routeProvider
      .when('/home/:name', {

        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .otherwise({
	redirectTo: '/home/world !'
      });
  }
]);
