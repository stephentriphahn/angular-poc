(function(){
	var app = angular.module('nav', []);
	
	app.directive('izendaNavbar', function() {
		return {
			restrict: 'EA',
			templateUrl: '../views/izenda-navbar.html'
		}
	});
})();