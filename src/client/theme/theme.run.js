/**
 * @author v.lugovksy
 * created on 15.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function ThemeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings) {
  'ngInject';

  //console.log('Test, layoutPaths = ', layoutPaths);
  //console.log('Test, layoutSizes = ', layoutSizes);
  //console.log('Test...', colorHelper.tint('#209e91', 30));
  //console.log('Testing, themeLayoutSettings=', themeLayoutSettings);
  //console.log('Testing, baUtil.hexToRGB()=', baUtil.hexToRGB('#ffffff', 0.3));
  //console.log('Testing, baSidebarService=', baSidebarService);

  var whatToWait = [
    preloader.loadAmCharts(),
    $timeout(50)
  ]; //*/

  var theme = themeLayoutSettings;

  if (theme.EClient) {
    if (theme.mobile) {
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'EClient-bg-mobile.jpg'));
    } else {
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'EClient-bg.jpg'));
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'EClient-bg-blurred.jpg'));
    }
  }

  $q.all(whatToWait).then(function() {
    $rootScope.$pageFinishedLoading = true;
  });

  $timeout(function() {
    if (!$rootScope.$pageFinishedLoading) {
      $rootScope.$pageFinishedLoading = true;
    }
  }, 50);

  $rootScope.$baSidebarService = baSidebarService;

}
