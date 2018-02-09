/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import appFeedCtrl from './appFeed.controller'
import appFeedDirective from './appFeed.directive'

// Create the module where our functionality can attach to
let appFeedModule = angular.module('EClient.pages.dashboard.appFeed', []);

// Controllers
appFeedModule.controller('AppFeedCtrl', appFeedCtrl);

// Directives
appFeedModule.directive('appFeed', appFeedDirective);

export default appFeedModule;
