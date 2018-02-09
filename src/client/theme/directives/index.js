/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Create the module where our functionality can attach to
let directivesModule = angular.module('EClient.theme.directives', []);

// Import module config/files
import animatedChangeDirective from './animatedChange.directive'
import autoExpandDirective from './autoExpand.directive'
import autoFocusDirective from './autoFocus.directive'
import includeWithScopeDirective from './includeWithScope.directive'
import ionSliderDirective from './ionSlider.directive'
import ngFileSelectDirective from './ngFileSelect.directive'
import scrollPositionDirective from './scrollPosition.directive'
import trackWidthDirective from './trackWidth.directive'
import zoomInDirective from './zoomIn.directive'

// Directives
directivesModule.directive('animatedChange', animatedChangeDirective);
directivesModule.directive('autoExpand', autoExpandDirective);
directivesModule.directive('autoFocus', autoFocusDirective);
directivesModule.directive('includeWithScope', includeWithScopeDirective);
directivesModule.directive('ionSlider', ionSliderDirective);
directivesModule.directive('ngFileSelect', ngFileSelectDirective);
directivesModule.directive('scrollPosition', scrollPositionDirective);
directivesModule.directive('trackWidth', trackWidthDirective);
directivesModule.directive('zoomIn', zoomInDirective);

export default directivesModule;
