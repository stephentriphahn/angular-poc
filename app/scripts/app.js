'use strict';

/**
 * @ngdoc overview
 * @name reportlistApp
 * @description
 * # reportlistApp
 *
 * Main module of the application.
 */
angular
  .module('reportlistApp', [	 
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	 'nav',
	 'reportlist'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('izendaMenu', function(){
		return{
			restrict: 'AE',
			tmeplateUrl: '..views/izenda-menu.html',
			controller: function(){
				this.tab;
		
				this.selectTab = function(setTab){
					this.tab = setTab;
				}
				this.isSelected = function(check){
					return this.tabs === check;
				}
			},
			controllerAs: 'menu'
		};
	});
