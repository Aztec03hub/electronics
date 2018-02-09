/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import progressBarRoundDirective from './progressBarRound.directive';

// Create the module where our functionality can attach to
let progressBarRoundModule = angular.module('EClient.theme.components.progressBarRound', []);

// Directives
progressBarRoundModule.directive('progressBarRound', progressBarRoundDirective);

export default progressBarRoundModule;
