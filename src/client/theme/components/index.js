/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module functionality
import './baPanel';
import './baSidebar';
import './baWizard';
import './backTop';
import './contentTop';
import './msgCenter';
import './pageTop';
import './progressBarRound';
import './widgets';

// Create the module where our functionality can attach to
let componentsModule = angular.module('EClient.theme.components', [
  'EClient.theme.components.baPanel',
  'EClient.theme.components.baSidebar',
  'EClient.theme.components.baWizard',
  'EClient.theme.components.backTop',
  'EClient.theme.components.contentTop',
  'EClient.theme.components.msgCenter',
  'EClient.theme.components.pageTop',
  'EClient.theme.components.progressBarRound',
  'EClient.theme.components.widgets'
]);

// Extend the 'toastr' config
import toastrLibConfig from './toastrLib.config';
componentsModule.config(toastrLibConfig);


export default componentsModule;
