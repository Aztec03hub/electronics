/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function BaSidebarCtrl($scope, baSidebarService) {
  'ngInject';

  $scope.menuItems = baSidebarService.getMenuItems();
  $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

  $scope.hoverItem = function($event) {
    $scope.showHoverElem = true;
    $scope.hoverElemHeight = $event.currentTarget.clientHeight;
    var menuTopValue = 66;
    $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
  };

  $scope.$on('$stateChangeSuccess', function() {
    if (baSidebarService.canSidebarBeHidden()) {
      baSidebarService.setMenuCollapsed(true);
    }
  });
}
