function MainController($scope) {
	$scope.name = 'Bill';
	$scope.email = 'fake@gmail.com';
	$scope.phone = '01234567890';
}

angular
	.module('app')
	.controller('MainController', MainController);
