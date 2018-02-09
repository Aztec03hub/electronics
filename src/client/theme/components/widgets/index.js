/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import widgetsDirective from './widgets.directive';

// Create the module where our functionality can attach to
let widgetsModule = angular.module('EClient.theme.components.widgets', []);

// Directives
widgetsModule.directive('widgets', widgetsDirective);

export default widgetsModule;
