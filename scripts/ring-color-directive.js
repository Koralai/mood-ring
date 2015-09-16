(function(){
  "use strict";

  angular.module('moodRing').directive('ringColor', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/ring-color.html'
    };
  });

})();
