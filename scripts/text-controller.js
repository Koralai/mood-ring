(function(){

"use strict";

angular.module('moodRing').controller('TextCtrl', function($scope) {

  $scope.mood = "I am 100% accurate 57% of the time!";
  $scope.color = "#221";

  $scope.tellMood = function() {

    for (var i = 0; i < $scope.usrMsg.length; i++) {

      var charAtIndex = $scope.usrMsg.charAt(i);

      switch (charAtIndex.toUpperCase()) {

        case "E":
        case "L":
          $scope.mood = "You are just as easy-breezy as you please-y.";
          $scope.color = "#CC6600";
          return;

        case "A":
        case "Y":
        case "O":
          $scope.mood = "Yawn! You're about to fall asleep.";
          $scope.color = "#008055";
          return;

        case "T":
        case "H":
          $scope.mood = "You seem anxious. Is there something on your mind?";
          $scope.color = "#FFFF66";
          return;

        case "K":
          $scope.mood = "There, there. There's nothing to be afraid of!";
          $scope.color = "white";
          return;

        case "P":
        case "X":
        case "M":
        case "F":
          $scope.mood = "Ouch! You're hopping mad!";
          $scope.color = "#B31A1A";
          return;

        case "D":
        case "U":
          $scope.mood = "You seem a little down. If I had thumbs, I would bring you a cup of tea.";
          $scope.color = "#4040BF";
          return;

        case "S":
        case "C":
          $scope.mood = "You are just a little sassy.";
          $scope.color = "#D22DD2";
          return;

        case "W":
        case "J":
          $scope.mood = "You are brimming with whimsy.";
          $scope.color = "#773399";
          return;
      }
    }
    $scope.mood = "You're feeling nothing in particular.";
    $scope.color = "#555";
    return;
  };

});
})();
