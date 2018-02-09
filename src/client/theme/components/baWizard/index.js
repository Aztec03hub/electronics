/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import baWizardDirective from './baWizard.directive';
import baWizardCtrl from './baWizard.controller';
import baWizardStepDirective from './baWizardStep.directive';

// Create the module where our functionality can attach to
let baWizardModule = angular.module('EClient.theme.components.baWizard', []);

// Directives
baWizardModule.directive('baWizard', baWizardDirective);

// Controllers
baWizardModule.controller('baWizardCtrl', baWizardCtrl);

// Helpers/Other
baWizardModule.directive('baWizardStep', baWizardStepDirective);

export default baWizardModule;
