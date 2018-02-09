/**
 * @author v.lugovsky
 * created on 15.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export const layoutSizes = {
  resWidthCollapseSidebar: 1200,
  resWidthHideSidebar: 500
}

var IMAGES_ROOT = 'assets/img/';

export const layoutPaths = {
  images: {
    root: IMAGES_ROOT,
    profile: IMAGES_ROOT + 'app/profile/',
    amChart: 'node_modules/amcharts3/amcharts/images/'
  }
}

//SASS mix function
function mix(color1, color2, weight) {
  // convert a decimal value to hex
  function d2h(d) {
    return d.toString(16);
  }
  // convert a hex value to decimal
  function h2d(h) {
    return parseInt(h, 16);
  }

  var result = '#';
  for (var i = 1; i < 7; i += 2) {
    var color1Part = h2d(color1.substr(i, 2));
    var color2Part = h2d(color2.substr(i, 2));
    var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
    result += ('0' + resultPart).slice(-2);
  }
  return result;
}

export const colorHelper = {
  tint: function(color, weight) {
    return mix('#ffffff', color, weight);
  },
  shade: function(color, weight) {
    return mix('#000000', color, weight);
  }
}
