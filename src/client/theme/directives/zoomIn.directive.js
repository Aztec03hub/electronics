/**
 * @author BlurAdmin Team
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function zoomIn($timeout, $rootScope) {
  'ngInject';

  return {
    restrict: 'A',
    link: function($scope, elem) {
      var delay = 500; // Was 1000

      if ($rootScope.$pageFinishedLoading) {
        delay = 100;
      }

      $timeout(function() {
        elem.removeClass('full-invisible');
        elem.addClass('animated zoomIn');
      }, delay);
    }
  };
}
