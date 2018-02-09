/**
 * @author Bluradmin Team
 * created on 11/15/2017
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

import templateUrl from './baWizard.html';

export default function baWizard() {
  'ngInject';

  return {
    restrict: 'E',
    transclude: true,
    templateUrl: templateUrl,
    controllerAs: '$baWizardController',
    controller: 'baWizardCtrl'
  }
}
