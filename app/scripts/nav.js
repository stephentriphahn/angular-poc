(function(){
	var app = angular.module('nav', []);
	
	app.directive('izendaNavbar', function() {
		return {
			restrict: 'EA',
			templateUrl: '../views/izenda-navbar.html',
			controller: function(){
				this.tab;
		
				this.selectTab = function(setTab){
					this.tab = setTab;
				}
				this.isSelected = function(check){
					return this.tabs === check;
				}
			},
			controllerAs: 'nav'
		};
	});
})();