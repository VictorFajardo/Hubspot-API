'use strict';

angular.module('myApp.thank-you', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/thank-you', {
    templateUrl: 'thank-you/thank-you.html',
    controller: 'ThankYouCtrl'
  });
}])

.controller('ThankYouCtrl', [function() {

}]);