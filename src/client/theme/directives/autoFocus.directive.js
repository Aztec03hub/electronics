/**
 * @author BlurAdmin Team
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function autoFocus($timeout, $parse) {
  'ngInject';

  return {
    link: function(scope, element, attrs) {
      var model = $parse(attrs.autoFocus);
      scope.$watch(model, function(value) {
        if (value === true) {
          $timeout(function() {
            element[0].focus();
            element[0].select();
          });
        }
      });
      element.bind('blur', function() {
        scope.$apply(model.assign(scope, false));
      });
    }
  };
}
