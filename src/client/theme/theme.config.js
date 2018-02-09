/**
 * Created by k.danovsky on 13.05.2016.
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function ThemeConfig(baConfigProvider, colorHelper, $provide) {
  'ngInject';

  $provide.decorator('$uiViewScroll', uiViewScrollDecorator);

  baConfigProvider.changeColors({
    default: '#F44336',
    defaultText: '#FFEB3B',
  });

};

function uiViewScrollDecorator($delegate, $anchorScroll, baUtil) {
  'ngInject';

  return function(uiViewElement) {
    if (baUtil.hasAttr(uiViewElement, 'autoscroll-body-top')) {
      $anchorScroll();
    } else {
      $delegate(uiViewElement);
    }
  };
}
