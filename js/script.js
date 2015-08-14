// script.js

// create the module and name it dcpApp
var dcpApp = angular.module('dcpApp', []);

// create the controller and inject Angular's $scope
dcpApp.controller('mainController', function($scope) {

    //create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});