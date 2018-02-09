/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import popularAppDirective from './popularApp.directive'

// Create the module where our functionality can attach to
let popularAppModule = angular.module('EClient.pages.dashboard.popularApp', []);

// Directives
popularAppModule.directive('popularApp', popularAppDirective);

export default popularAppModule;
