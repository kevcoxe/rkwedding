'use strict';

/**
 * @ngdoc function
 * @name hackUmbctutorialsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackUmbctutorialsApp
 */
angular.module('hackUmbctutorialsApp').controller('HeaderController', ["$scope", function ($scope) {
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
