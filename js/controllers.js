var myAppControllers = angular.module('myAppControllers', []);

myApp.controller('homeCtrl', ['$scope',
	function($scope){

		var date = new Date();
		var fulldate = date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
		$scope.date = 
		$scope.solde=230;

}]);
myApp.controller('operationCtrl' ,['$scope',
  function($scope){


}]);
