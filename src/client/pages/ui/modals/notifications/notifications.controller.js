/**
 * @author v.lugovsky
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function NotificationsCtrl($scope, toastr) {
  'ngInject';

  $scope.showSuccessMsg = function() {
    toastr.success('Your information has been saved successfully!');
  };

  $scope.showInfoMsg = function() {
    toastr.info("You've got a new email!", 'Information');
  };

  $scope.showErrorMsg = function() {
    toastr.error("Your information hasn't been saved!", 'Error');
  };

  $scope.showWarningMsg = function() {
    toastr.warning('Your computer is about to explode!', 'Warning');
  };
}
