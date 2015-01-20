'use strict';

/**
 * @ngdoc function
 * @name reportlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reportlistApp
 */
angular.module('reportlistApp')
  .controller('MainCtrl', function () {
		this.open = false;
		
		this.showOptions = function(){
			this.open = !this.open;
		}
  });
