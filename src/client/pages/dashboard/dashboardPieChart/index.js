/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

// Import module config/files
import DashboardPieChartCtrl from './dashboardPieChart.controller'
import dashboardPieChartDirective from './dashboardPieChart.directive'

// Create the module where our functionality can attach to
let dashboardPieChartModule = angular.module('EClient.pages.dashboard.piechart', []);

// Controllers
dashboardPieChartModule.controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

// Directives
dashboardPieChartModule.directive('dashboardPieChart', dashboardPieChartDirective);

export default dashboardPieChartModule;
