/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

import templateUrl from './weather.html';

export default function weather() {
  'ngInject';

  return {
    restrict: 'EA',
    controller: 'WeatherCtrl',
    templateUrl: templateUrl
  };
}
