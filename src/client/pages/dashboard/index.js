/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import DashboardConfig from './dashboard.config';

// Import module functionality
import './appFeed';
import './dashboardCalendar';
import './dashboardLineChart';
import './dashboardTodo';
import './popularApp';
import './weather';
import './dashboardPieChart';

// Create the module where our functionality can attach to
let dashboardModule = angular.module('EClient.pages.dashboard', [
  'EClient.pages.dashboard.appFeed',
  'EClient.pages.dashboard.dashboardCalendar',
  'EClient.pages.dashboard.dashboardLineChart',
  'EClient.pages.dashboard.dashboardTodo',
  'EClient.pages.dashboard.popularApp',
  'EClient.pages.dashboard.weather',
  'EClient.pages.dashboard.piechart'
]);

// Import our config file
dashboardModule.config(DashboardConfig);

export default dashboardModule;
