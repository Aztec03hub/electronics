/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

import templateUrl from './backTop.html';

export default function backTop() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: templateUrl,
    controller: function() {
      $('#backTop').backTop({
        'position': 200,
        'speed': 100
      });
    }
  };
}
