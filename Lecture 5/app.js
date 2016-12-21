(function () {
  'use strict';
  angular.module('myApp', [])

  .controller('myController', myController);

  function myController($scope, $filter) {
    $scope.name = "Rithvik";
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }
})();
