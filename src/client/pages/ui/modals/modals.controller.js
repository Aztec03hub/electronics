/**
 * @author a.demeshko
 * created on 18.01.2016
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function ModalsPageCtrl($scope, $uibModal, baProgressModal) {
  'ngInject';

  $scope.open = function(page, size) {
    $uibModal.open({
      animation: true,
      templateUrl: page,
      size: size,
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });
  };

  $scope.openProgressDialog = baProgressModal.open;
}
