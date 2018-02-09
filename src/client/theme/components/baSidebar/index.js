/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import baSidebarCtrl from './baSidebar.controller';
import baSidebarDirective from './baSidebar.directive';
import baSidebarServiceProvider from './baSidebar.service';
import {
  baSidebarToggleMenu,
  baSidebarCollapseMenu,
  baSidebarTogglingItem,
  BaSidebarTogglingItemCtrl,
  baUiSrefTogglingSubmenu,
  baUiSrefToggler
} from './baSidebarHelpers.directive';

// Create the module where our functionality can attach to
let baSidebarModule = angular.module('EClient.theme.components.baSidebar', []);

// Controllers
baSidebarModule.controller('BaSidebarCtrl', baSidebarCtrl);

// Directives
baSidebarModule.directive('baSidebar', baSidebarDirective);

// Providers
baSidebarModule.provider('baSidebarService', baSidebarServiceProvider);

// Helpers/Other
baSidebarModule.directive('baSidebarToggleMenu', baSidebarToggleMenu);
baSidebarModule.directive('baSidebarCollapseMenu', baSidebarCollapseMenu);
baSidebarModule.directive('baSidebarTogglingItem', baSidebarTogglingItem);
baSidebarModule.controller('BaSidebarTogglingItemCtrl', BaSidebarTogglingItemCtrl);
baSidebarModule.directive('baUiSrefTogglingSubmenu', baUiSrefTogglingSubmenu);
baSidebarModule.directive('baUiSrefToggler', baUiSrefToggler);

export default baSidebarModule;
