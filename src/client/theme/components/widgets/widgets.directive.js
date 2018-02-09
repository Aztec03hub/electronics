/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

import templateUrl from './widgets.html';

export default function widgets() {
  'ngInject';

  return {
    restrict: 'EA',
    scope: {
      ngModel: '='
    },
    templateUrl: templateUrl,
    replace: true
  };
}
