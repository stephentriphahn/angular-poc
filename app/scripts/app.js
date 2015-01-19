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
  });
