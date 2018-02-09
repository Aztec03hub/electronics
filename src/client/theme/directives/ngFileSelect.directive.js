/**
 * @author BlurAdmin Team
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function ngFileSelect() {
  'ngInject';

  return {
    link: function($scope, el) {
      el.bind('change', function(e) {
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })
    }
  }
}
