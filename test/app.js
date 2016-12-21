(function () {
'use strict';
angular.module('myApp', [])

.controller('myController', myController);

function myController($scope) {
  $scope.name = "Rithvik"
}


})();
