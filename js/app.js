'use strict';

var motoApp = angular.module('motoApp', [
  'ngRoute',
  'motoAppAnimations',
  'motoAppControllers',
  'motoAppServices'
]);

motoApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/motos', {
      templateUrl: 'partials/moto-list.html',
      controller: 'motoListController'
    }).
    when('/motos/:motoId', {
      templateUrl: 'partials/moto-detail.html',
      controller: 'motoDetailCtrl'
    }).
    otherwise({
      redirectTo: '/motos'
    });
  }]);
