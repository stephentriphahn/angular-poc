'use strict';

/**
 * @ngdoc function
 * @name reportlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reportlistApp
 */
angular.module('reportlistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
