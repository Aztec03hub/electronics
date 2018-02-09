/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

import templateUrl from './contentTop.html';

export function contentTop($location, $state) {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: templateUrl,
    link: function($scope) {
      $scope.$watch(function() {
        $scope.activePageTitle = $state.current.title;
      });
    }
  };
}

export default contentTop;
