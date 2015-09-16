(function(){
  "use strict";

  angular.module('moodRing').directive('tellMoodText', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/tell-mood-text.html'
    };
  });

})();
