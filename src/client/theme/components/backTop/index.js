/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import './lib/jquery.backTop.min';
import backTopDirective from './backTop.directive';

// Create the module where our functionality can attach to
let backTopModule = angular.module('EClient.theme.components.backTop', []);

// Directives
backTopModule.directive('backTop', backTopDirective);

export default backTopModule;
