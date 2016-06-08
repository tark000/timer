var timer = angular.module('timer',[])

timer.controller('IndexController', function($scope) {
	console.log("test");
	$scope.message = "Hello word!!!1aasdsdasd";

	$scope.createTimer = function () {
		console.log("test timer");
	}
})