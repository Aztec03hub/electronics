'use strict';

//import config from '../../config/environment';
var util = require('../../utils/util');

// GO THROUGH THESE AND REMOVE UNNECCESSARY VARS
var pathSeperator ='/';
var base_path='/api/v0002';
var historian_path =  base_path + pathSeperator + 'historian';
var organizations_path= base_path + pathSeperator + 'organizations';
//var getdevices_path = 'devices';
var getdevices_path = 'bulk/devices';
var apiKey = 'ConsciousSub';
var authToken = '?mPAbCegaIqZCF)BWg';

///////// Custom Functions Here:
export function test(req, res, next) {
  console.log("[test.controller] test.controller.test called.");
  res.send('Test Complete!')
}

// Get devices of an organization (New AJAX way)
export function devicesAjax(req, res, next) {
  console.log("[test.controller] test.controller.devicesAjax, calling util.getDevicesAjax");
  util.getDevicesAjax(apiKey, authToken, res);
}
