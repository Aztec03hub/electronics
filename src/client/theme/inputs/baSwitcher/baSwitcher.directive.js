/**
 * @author v.lugovsky
 * created on 10.12.2016
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

import templateUrl from './baSwitcher.html';

export default function baSwitcher() {
  'ngInject';

  return {
    templateUrl: templateUrl,
    scope: {
      switcherStyle: '@',
      switcherValue: '='
    }
  };
}
