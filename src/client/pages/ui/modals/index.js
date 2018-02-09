/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import modalsConfig from './modals.config';
import modalsCtrl from './modals.controller';

// Import module functionality
import './notifications';
import './progressModal';

// Create the module where our functionality can attach to
let modalsModule = angular.module('EClient.pages.ui.modals', [
  'EClient.pages.ui.modals.notifications',
  'EClient.pages.ui.modals.progressModal'
]);

// Import our config file
modalsModule.config(modalsConfig);

// Controllers
modalsModule.controller('ModalsPageCtrl', modalsCtrl);

export default modalsModule;
