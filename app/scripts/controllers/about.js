'use strict';

/**
 * @ngdoc function
 * @name reportlistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reportlistApp
 */
angular.module('reportlistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
