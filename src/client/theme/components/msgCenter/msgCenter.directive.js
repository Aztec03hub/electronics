/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

import templateUrl from './msgCenter.html';

export default function msgCenter() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: templateUrl,
    controller: 'MsgCenterCtrl'
  };
}
