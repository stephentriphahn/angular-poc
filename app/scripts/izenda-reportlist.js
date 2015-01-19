(function(){
	var app = angular.module('reportlist', []);
	
	app.directive('izendaReportlist', function(){
		return {
			restrict: 'AE',
			templateUrl: '../views/izenda-reportlist.html',
			controller: function($http){
				this.reports;
				$http.get('data/reports.json')
					.success(function(data, status, headers, config){
						this.reports = data;
						console.log("Found data, should be assigned on scope: " + reports);
					})
				   .error(function(data, status, headers, config){
						console.log("error as occured, data not found");
					});
			},
			controllerAs: 'list'
		};
	});
})();