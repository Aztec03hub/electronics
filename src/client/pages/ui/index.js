/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import uiConfig from './ui.config';

// Import module functionality
import './modals';

// Create the module where our functionality can attach to
let uiModule = angular.module('EClient.pages.ui', [
  'EClient.pages.ui.modals'
]);

// Import our config file
uiModule.config(uiConfig);

export default uiModule;
