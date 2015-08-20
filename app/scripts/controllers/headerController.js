'use strict';

/**
 * @ngdoc function
 * @name rkweddingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rkweddingApp
 */
angular.module('rkweddingApp').controller('HeaderController', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.nav_links = [
    	{
            "href":"#/",
            "title":"Home"
        },
        {
            "href":"#/about",
            "title":"About"
        }
    ]

}]);
