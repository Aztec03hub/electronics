/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import progressModalCtrl from './progressModal.controller';

// Create the module where our functionality can attach to
let progressModalModule = angular.module('EClient.pages.ui.modals.progressModal', []);

// Controllers
progressModalModule.controller('ProgressModalCtrl', progressModalCtrl);

export default progressModalModule;
