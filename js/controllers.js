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
		var solde = 230;
		$scope.solde=solde.toString() + " €";

}]);
myApp.controller('operationCtrl' ,['$scope',
  function($scope){

		//Gestion
		var op1 = {
							"date" : "29/12/1992",
							"label" : "Sextoy veineux",
							"price" : "15 €"
							}
		$scope.operations = [op1];


}]);
