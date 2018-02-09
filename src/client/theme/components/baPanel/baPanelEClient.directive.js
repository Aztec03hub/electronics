/**
 * @author v.lugovsky
 * created on 15.01.2016
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function baPanelEClient(baPanelEClientHelper, $window, $rootScope) {
  'ngInject';

  var bodyBgSize;

  baPanelEClientHelper.bodyBgLoad().then(function() {
    bodyBgSize = baPanelEClientHelper.getBodyBgImageSizes();
  });

  $window.addEventListener('resize', function() {
    bodyBgSize = baPanelEClientHelper.getBodyBgImageSizes();
  });

  return {
    restrict: 'A',
    link: function($scope, elem) {
      if (!$rootScope.$isMobile) {
        baPanelEClientHelper.bodyBgLoad().then(function() {
          setTimeout(recalculatePanelStyle);
        });
        $window.addEventListener('resize', recalculatePanelStyle);

        $scope.$on('$destroy', function() {
          $window.removeEventListener('resize', recalculatePanelStyle);
        });
      }

      function recalculatePanelStyle() {
        if (!bodyBgSize) {
          return;
        }
        elem.css({
          backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
          backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
        });
      }

    }
  };
}
