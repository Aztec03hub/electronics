/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import baPanelDirective from './baPanel.directive';
import baPanelService from './baPanel.service';
import baPanelEClientDirective from './baPanelEClient.directive';
import baPanelEClientHelperSvc from './baPanelEClientHelper.service';
import baPanelSelfDirective from './baPanelSelf.directive';

// Create the module where our functionality can attach to
let baPanelModule = angular.module('EClient.theme.components.baPanel', []);

// Directives
baPanelModule.directive('baPanel', baPanelDirective);

// Services/Factories
baPanelModule.factory('baPanel', baPanelService);

// Helpers/Other
baPanelModule.directive('baPanelEClient', baPanelEClientDirective);
baPanelModule.service('baPanelEClientHelper', baPanelEClientHelperSvc);
baPanelModule.directive('baPanelSelf', baPanelSelfDirective);

export default baPanelModule;
