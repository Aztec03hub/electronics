/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import baSwitcherDirective from './baSwitcher/baSwitcher.directive'

// Create the module where our functionality can attach to
let inputsModule = angular.module('EClient.theme.inputs', []);

// Directives
inputsModule.directive('baSwitcher', baSwitcherDirective);

export default inputsModule;
