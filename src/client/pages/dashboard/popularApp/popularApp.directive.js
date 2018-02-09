/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

import templateUrl from './popularApp.html';

export default function popularApp() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: templateUrl
  };
}
