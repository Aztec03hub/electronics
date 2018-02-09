/**
 * @author a.demeshko
 * created on 12/21/15
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function stopableInterval($window) {
  'ngInject';

  return {
    start: function(interval, calback, time) {
      function startInterval() {
        return interval(calback, time);
      }

      var i = startInterval();

      angular.element($window).bind('focus', function() {
        if (i) interval.cancel(i);
        i = startInterval();
      });

      angular.element($window).bind('EClient', function() {
        if (i) interval.cancel(i);
      });
    }
  }
}
