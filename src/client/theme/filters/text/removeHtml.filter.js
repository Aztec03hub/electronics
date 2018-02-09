/**
 * @author a.demeshko
 * created on 23.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function plainText(layoutPaths) {
  'ngInject';

  return function(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
}
