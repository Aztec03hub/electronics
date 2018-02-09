/**
 * @author BlurAdmin Team
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

/**
 * Change top "Daily Downloads", "Active Users" values with animation effect
 */
export default function animatedChange($timeout) {
  'ngInject';

  return {
    link: function(scope, element) {
      $timeout(function() {
        var newValue = element.attr('new-value');
        var oldvalue = parseInt(element.html());

        function changeValue(val) {
          $timeout(function() {
            element.html(val);
          }, 30);
        }

        if (newValue > oldvalue) {
          for (var i = oldvalue; i <= newValue; i++) {
            changeValue(i);
          }
        } else {
          for (var j = oldvalue; j >= newValue; j--) {
            changeValue(j);
          }
        }
        $timeout(function() {
          element.next().find('i').addClass('show-arr');
        }, 50);
      }, 50);
    }
  };
}
