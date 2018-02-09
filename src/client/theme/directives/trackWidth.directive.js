/**
 * @author BlurAdmin Team
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function trackWidth() {
  'ngInject';

  return {
    scope: {
      trackWidth: '=',
      minWidth: '=',
    },
    link: function(scope, element) {
      scope.trackWidth = $(element).width() < scope.minWidth;
      scope.prevTrackWidth = scope.trackWidth;

      $(window).resize(function() {
        var trackWidth = $(element).width() < scope.minWidth;
        if (trackWidth !== scope.prevTrackWidth) {
          scope.$apply(function() {
            scope.trackWidth = trackWidth;
          });
        }
        scope.prevTrackWidth = trackWidth;
      });
    }
  };
}
