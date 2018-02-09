/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/plugins/responsive/responsive.min';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/funnel';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/gantt';
import 'amstock3/amcharts/amstock';

// Import module config/files
import dashboardLineChartCtrl from './dashboardLineChart.controller'
import dashboardLineChartDirective from './dashboardLineChart.directive'

// Create the module where our functionality can attach to
let dashboardLineChartModule = angular.module('EClient.pages.dashboard.dashboardLineChart', []);

// Controllers
dashboardLineChartModule.controller('DashboardLineChartCtrl', dashboardLineChartCtrl);

// Directives
dashboardLineChartModule.directive('dashboardLineChart', dashboardLineChartDirective);

export default dashboardLineChartModule;
