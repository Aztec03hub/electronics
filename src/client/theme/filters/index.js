/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import appImageFilter from './image/appImage.filter'
import kameleonImgFilter from './image/kameleonImg.filter'
import profilePictureFilter from './image/profilePicture.filter'
import removeHtmlFilter from './text/removeHtml.filter'

// Create the module where our functionality can attach to
let filtersModule = angular.module('EClient.theme.filters', []);

// Filters
filtersModule.filter('appImage', appImageFilter);
filtersModule.filter('kameleonImg', kameleonImgFilter);
filtersModule.filter('profilePicture', profilePictureFilter);
filtersModule.filter('plainText', removeHtmlFilter);

export default filtersModule;
