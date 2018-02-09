/**
 * @author v.lugovsky
 * created on 03.05.2016
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function baUtil() {
  'ngInject';

  this.isDescendant = function(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };

  this.hexToRGB = function(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  };

  this.hasAttr = function(elem, attrName) {
    var attr = $(elem).attr(attrName);
    return (typeof attr !== typeof undefined && attr !== false);
  }
}
