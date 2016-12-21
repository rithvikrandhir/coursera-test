
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
(function () {
'use strict';



angular.module('myApp', [])
.controller('myController', myController);

function myController($scope) {
  $scope.color = "white";
  $scope.check = function() {

      var result = checkIfTooMuch($scope.text);
      if (result != null) {
        $scope.label = result['label'];
        $scope.color = result['color'];
      }else{
        $scope.label = "";
        $scope.color = "white";
      }
  }
}

function checkIfTooMuch(text) {
  var label = "";
  var color = "";
  text = text.trim();
  if (text != "") {
    var splitText = text.split(',');

    if (splitText[splitText.length - 1 ] == "") {
      splitText.pop();
    }

    if (splitText.length <= 3) {
      label = "Enjoy!";
      color = "green";
    } else {
      label = "Too Much!"
      color = "red";
    }
    return {label,color};
  }
}

})();
