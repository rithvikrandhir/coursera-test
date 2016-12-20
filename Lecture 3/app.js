(function () {
  'use strict';
  angular.module('myFirstApp', [])

  .controller('myFirstController', function ($scope) {
    $scope.name = "Rithvik";
    $scope.sayHello = function () {
      return "Hello There";
    };
  });

})();
