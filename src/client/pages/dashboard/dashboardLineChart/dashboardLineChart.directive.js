/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

import templateUrl from './dashboardLineChart.html';

export default function dashboardLineChart() {
  'ngInject';

  return {
    restrict: 'E',
    controller: 'DashboardLineChartCtrl',
    templateUrl: templateUrl
  };
}
