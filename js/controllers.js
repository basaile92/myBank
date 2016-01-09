var myAppControllers = angular.module('myAppControllers', []);

myApp.controller('homeCtrl', ['$scope',
	function($scope){

		//Gestion de la date
		var date = new Date();
		var day = date.getDate().toString();
		var month = (date.getMonth() + 1).toString();
		var year = date.getFullYear().toString();
		if(date.getDate() < 10)
		{
			day = "0" + day;
		}
		if(date.getMonth() < 9)
		{
			month = "0" + month;
		}
		var fulldate = day + "/" + month + "/" + year;
		$scope.date = fulldate;

		//Gestion du solde
		$scope.solde=230;

}]);
myApp.controller('operationCtrl' ,['$scope',
  function($scope){

		//Gestion
		var op1 = {
							"date" : (new Date()).getDate(),
							"label" : "Sextoy veineux",
							"price" : 15
							}
		operations = [op1];


}]);
