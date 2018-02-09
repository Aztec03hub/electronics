/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import dashboardCalendarCtrl from './dashboardCalendar.controller'
import dashboardCalendarDirective from './dashboardCalendar.directive'

// Create the module where our functionality can attach to
let dashboardCalendarModule = angular.module('EClient.pages.dashboard.dashboardCalendar', []);

// Controllers
dashboardCalendarModule.controller('DashboardCalendarCtrl', dashboardCalendarCtrl);

// Directives
dashboardCalendarModule.directive('dashboardCalendar', dashboardCalendarDirective);

export default dashboardCalendarModule;
