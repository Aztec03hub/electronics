/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import dashboardTodoCtrl from './dashboardTodo.controller'
import dashboardTodoDirective from './dashboardTodo.directive'

// Create the module where our functionality can attach to
let dashboardTodoModule = angular.module('EClient.pages.dashboard.dashboardTodo', []);

// Controllers
dashboardTodoModule.controller('DashboardTodoCtrl', dashboardTodoCtrl);

// Directives
dashboardTodoModule.directive('dashboardTodo', dashboardTodoDirective);

export default dashboardTodoModule;
