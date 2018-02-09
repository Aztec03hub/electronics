/**
 * Created by n.poltoratsky
 * on 28.06.2016.
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

import templateUrl from './progressBarRound.html';

export function progressBarRound(baProgressModal) {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: templateUrl,
    link: function($scope, element, attrs) {
      $scope.baProgressDialog = baProgressModal;
      $scope.$watch(function() {
        return baProgressModal.getProgress();
      }, animateBar);

      function animateBar() {
        var circle = element.find('#loader')[0];
        circle.setAttribute("stroke-dasharray", baProgressModal.getProgress() * 180 * Math.PI / 100 + ", 20000");
        $scope.progress = baProgressModal.getProgress();
      }
    }
  }
}

export default progressBarRound;
