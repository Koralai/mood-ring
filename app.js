(function() {

  "use strict";

  angular.module('moodRing', []);

  angular.module('moodRing').controller('TextCtrl', function($scope) {

    $scope.mood = "I am 100% accurate 57% of the time!";

    $scope.tellMood = function() {

      $scope.mood = findMood();

    };

    var findMood = function() {

      for (var i = 0; i < $scope.usrMsg.length; i++) {

        var charAtIndex = $scope.usrMsg.charAt(i);

        switch (charAtIndex.toUpperCase()) {

          case "E":
          case "L":
            return "You are just as easy-breezy as you please-y.";

          case "A":
          case "Y":
          case "O":
            return "Yawn! You're about to fall asleep.";

          case "T":
          case "H":
            return "You seem anxious. Is there something on your mind?";

          case "K":
            return "There, there. There's nothing to be afraid of!";

          case "P":
          case "X":
          case "M":
          case "F":
            return "Ouch! You're hopping mad!";

          case "D":
          case "U":
            return "You seem a little down. If I had thumbs, I would bring you a cup of tea.";

          case "S":
          case "C":
            return "You are just a little sassy.";

          case "W":
          case "J":
            return "You are brimming with whimsy.";
        }
      }
      return "You're feeling nothing in particular.";
    };

  });

})();
