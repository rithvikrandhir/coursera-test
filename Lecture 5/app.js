(function () {
//  'use strict';

  angular.module("DIAppl", [])
  .controller('DIController', function ($scope) {

    $scope.name="Rithvik";

  });
  //
  // function DIController($scope, $filter) {
  //   $scope.name = "Rithvik";
  //   $scope.upper = function () {
  //     var upCase = $filter('uppercase');
  //     $scope.name = upCase($scope.name);
  //   };
  //}
})();
