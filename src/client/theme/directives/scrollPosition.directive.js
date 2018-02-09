/**
 * @author BlurAdmin Team
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function scrollPosition() {
  'ngInject';

  return {
    scope: {
      scrollPosition: '=',
      maxHeight: '='
    },
    link: function(scope) {
      $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop() > scope.maxHeight;
        if (scrollTop !== scope.prevScrollTop) {
          scope.$apply(function() {
            scope.scrollPosition = scrollTop;
          });
        }
        scope.prevScrollTop = scrollTop;
      });
    }
  };
}
