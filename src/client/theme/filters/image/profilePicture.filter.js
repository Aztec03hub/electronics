/**
 * @author v.lugovsky
 * created on 17.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function profilePicture(layoutPaths) {
  'ngInject';

  return function(input, ext) {
    ext = ext || 'png';
    return layoutPaths.images.profile + input + '.' + ext;
  };
}
