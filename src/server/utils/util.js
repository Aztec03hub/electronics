/*******************************************************************************
* Copyright (c) 2014 IBM Corporation and other Contributors.
*
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the Eclipse Public License v1.0
* which accompanies this distribution, and is available at
* http://www.eclipse.org/legal/epl-v10.html
*
* Contributors:
* IBM - Initial Contribution
*******************************************************************************/
// export
var util = {};

var http = require('http');
var https = require('https');
var querystring = require('querystring');

//Basic HTTP options for Internet of Things Foundation
var iot_foundation_api_options = {
  hostname: 't6ls94.internetofthings.ibmcloud.com',
  port: 443, // For IBM IOT
  rejectUnauthorized: false
};

util.orgId = null;

util.iot_httpCall = function( URI, api_key, auth_token, res, queryObj, sendCred){
      console.log('[iot_httpCall] Entry');

      console.log('----------------------DBG MSG BLOCK BEGIN----------------------'); //DBG MSG
      console.log('iot_httpCall:'); //DBG MSG
      console.log('uri='+ URI); //Debugging Msg
      console.log('apiKey=', api_key); //Debugging Msg
      console.log('authToken=', auth_token); //Debugging Msg
      console.log('----------------------DBG MSG BLOCK END----------------------'); //DBG MSG

  iot_foundation_api_options.auth=api_key + ':' + auth_token;
  iot_foundation_api_options.path=URI;
  if(queryObj){
    console.log('Query called with : '+querystring.stringify(queryObj));
    iot_foundation_api_options.path=URI+'?'+querystring.stringify(queryObj);
  }

  var http_req = https.get(iot_foundation_api_options, function(http_res) {
    console.log('----------------------BEGIN:iot_foundation_api_options----------------------'); //DBG MSG
    console.log('iot_foundation_api_options: ', iot_foundation_api_options); //DBG MSG
    console.log('----------------------ENDOF:iot_foundation_api_options----------------------'); //DBG MSG

    var data = [];
    //check for http success
    if (http_res.statusCode===200)
    {
      http_res.on('data', function(chunk) {
        data.push(chunk);

      });

      http_res.on('end',function(){
        var result = JSON.parse(data.join(''));
        if(sendCred){
          result.api_key = api_key;
          result.auth_token = auth_token;
        }
        console.log('result: ', result); //DBG MSG
        // send the response
        res.json(result);
      });
    }
    else
    {
      console.log('Request for ' + iot_foundation_api_options.path + ' did not succeed and returned HTTP Status code ' + http_res.statusCode);
      //pass the status code to the http response
      res.status(http_res.statusCode).send();
    }

  });

  http_req.end();
  http_req.on('error', function(e) {
    console.log('Request for ' + iot_foundation_api_options.path + ' failed with : \n'+ e);
    res.status(500).send(e);
  });


};

var options = {
    host: '96.92.220.84',
    path: '/getDevices',
    port: 1880,
    headers: {
        'Content-Type': 'application/json'
    }
};

util.getDevices = function(api_key, auth_token, res){

  console.log("[util] util.getDevices Called.");

  var http_req = http.request(options, function(http_res) {

    var data = [];
    //check for http success
    if (http_res.statusCode===200)
    {
      http_res.on('data', function(chunk) {
        data.push(chunk);
      });

      http_res.on('end',function(){
        var result = JSON.parse(data.join(''));

        //console.log('Total rows = '+result.meta.total_rows);

        // send the response
        res.json(result.results);
      });

    }
    else
    {
      console.log('Request for ' + options.path + ' did not succeed and returned HTTP Status code ' + http_res.statusCode);
      //pass the status code to the http response
      res.status(http_res.statusCode).send();
    }
  });

  http_req.end();
  http_req.on('error', function(e) {
    console.log('Request for ' + options.path + ' failed with: \n'+ e);
    res.status(500).send(e);
  });
};

var optionsAjax = {
    host: '96.92.220.84',
    path: '/getDevicesAjax',
    port: 1880,
    headers: {
        'Content-Type': 'application/json'
    }
};

util.getDevicesAjax = function(api_key, auth_token, res){

  console.log("[util] util.getDevicesAjax Called.");

  var http_req = http.request(optionsAjax, function(http_res) {

    var data = [];
    //check for http success
    if (http_res.statusCode===200)
    {
      http_res.on('data', function(chunk) {
        data.push(chunk);
      });

      http_res.on('end',function(){
        var result = JSON.parse(data.join(''));

        //console.log('Total rows = '+result.meta.total_rows);

        // send the response
        res.json(result.results);
      });

    }
    else
    {
      console.log('Request for ' + optionsAjax.path + ' did not succeed and returned HTTP Status code ' + http_res.statusCode);
      //pass the status code to the http response
      res.status(http_res.statusCode).send();
    }
  });

  http_req.end();
  http_req.on('error', function(e) {
    console.log('Request for ' + optionsAjax.path + ' failed with: \n'+ e);
    res.status(500).send(e);
  });
};

module.exports = util;
