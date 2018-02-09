/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// Import module functionality
import './dashboard';
import './ui';
import './test';
import './services';

// Create the module where our functionality can attach to
let pagesModule = angular.module('EClient.pages', [
  uiRouter,
  'EClient.pages.dashboard',
  'EClient.pages.ui',
  'EClient.pages.test',
  'EClient.pages.services'
]);

export default pagesModule;
