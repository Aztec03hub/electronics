/**
 * @author Bluradmin Team
 * created on 11/15/2017
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

import templateUrl from './baWizardStep.html';

export default function baWizardStep() {
  'ngInject';

  return {
    restrict: 'E',
    transclude: true,
    require: '^baWizard',
    scope: {
      form: '='
    },
    templateUrl: templateUrl,
    link: function($scope, $element, $attrs, wizard) {
      $scope.selected = true;

      var tab = {
        title: $attrs.title,
        select: select,
        submit: submit,
        isComplete: isComplete,
        isAvailiable: isAvailiable,
        prevTab: undefined,
        setPrev: setPrev
      };

      wizard.addTab(tab);

      function select(isSelected) {
        if (isSelected) {
          $scope.selected = true;
        } else {
          $scope.selected = false;
        }
      }

      function submit() {
        $scope.form && $scope.form.$setSubmitted(true);
      }

      function isComplete() {
        return $scope.form ? $scope.form.$valid : true;
      }

      function isAvailiable() {
        return tab.prevTab ? tab.prevTab.isComplete() : true;
      }

      function setPrev(pTab) {
        tab.prevTab = pTab;
      }
    }
  };
}
