'use strict';

angular.module('myApp.form', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/form', {
      templateUrl: 'form/form.html',
      controller: 'FormCtrl'
    });
  }])

  .controller('FormCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.form = {
      'email': 'email@example.com',
      'hs_context': JSON.stringify({
        // "hutk": req.cookies.hubspotutk,
        "hutk": '3ae47797-834e-4f1c-8f13-c91a325b73d4',
        // "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        "ipAddress": "192.168.1.12",
        "pageUrl": "http://www.example.com/form-page",
        "pageName": "Example Title"
      })
    };


    // var postData = {
    //   'email': req.body.email,
    //   'hs_context': JSON.stringify({
    //     "hutk": req.cookies.hubspotutk,
    //     "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    //     "pageUrl": "http://www.example.com/form-page",
    //     "pageName": "Example Title"
    //   })
    // };

    // var options = {
    //   hostname: 'forms.hubspot.com',
    //   path: '/uploads/form/v2/YOUR_HUB_ID/YOUR_FORM_GUID',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Content-Length': postData.length
    //   }
    // }

    $scope.sendForm = function ($event) {
      $event.preventDefault();
      console.log('preparing data...');
      console.log($scope.form);

      $http({
        method: 'POST',
        url: 'https://forms.hubspot.com/uploads/form/v2/portalId/formGuid',
        data: $scope.form,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': $scope.form.length
        }
      })
    }

  }]);