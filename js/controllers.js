'use strict';

var motoAppControllers = angular.module('motoAppControllers', []);

motoAppControllers.controller('motoListController', ['$scope', 'Moto',
  function($scope, Moto) {
      $scope.motos = Moto.query();
      $scope.orderProp = 'modelo';
}]);

motoAppControllers.controller('motoDetailCtrl', ['$scope', '$routeParams', 'Moto',
  function($scope, $routeParams, Moto) {
    $scope.moto = Moto.get({motoId: $routeParams.motoId}, function(moto) {
      $scope.mainImageUrl = moto.images[0];
    });
    $scope.setImage = function(imageUrl){
      $scope.mainImageUrl = imageUrl;
    }
}]);
