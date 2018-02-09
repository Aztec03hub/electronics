/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

import templateUrl from './dashboardPieChart.html';

export default function dashboardPieChart() {
  'ngInject';

  return {
      restrict: 'E',
      controller: 'DashboardPieChartCtrl',
      templateUrl: templateUrl
    };
}
