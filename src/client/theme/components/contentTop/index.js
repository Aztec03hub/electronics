/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import contentTopDirective from './contentTop.directive';

// Create the module where our functionality can attach to
let contentTopModule = angular.module('EClient.theme.components.contentTop', []);

// Directives
contentTopModule.directive('contentTop', contentTopDirective);

export default contentTopModule;
