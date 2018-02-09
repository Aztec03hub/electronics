/**
 * @author Phil LaFayette
 * created on 11/15/2017
 *
 * A basic IBM Paho-MQTT Wrapper for Angular
 */
'use strict'

import Paho from '../components/angularMQTT/lib/paho-mqtt';

export default function sensorDataUpdater($window, $q, $rootScope) {
  'ngInject';

  var svc = {};

  // Initialization Attributes
  svc.hostname = "";
  svc.port = "";
  svc.id = "";
  svc.client = null;
  svc.isConnected = false;
  svc.data = {};

  // Member Functions to Expose
  svc.init = init;
  svc.connect = connect;
  svc.disconnect = disconnect;
  svc.onConnected = onConnected;
  svc.onConnectionLost = onConnectionLost;
  svc.onMessageArrived = onMessageArrived;
  svc.send = send;
  svc.startTrace = startTrace;
  svc.stopTrace = stopTrace;
  svc.subscribe = subscribe;
  svc.unsubscribe = unsubscribe;

  return svc;

  function _call(cb, args) {
    if (svc.client) {
      cb.apply(this, args);
    } else {
      console.log('[sensorDataUpdater] Client must be initialized first.  Call init() function.');
    }
  }

  function init(hostname, port, id) {
    console.log('[Service Finding] [sensorDataUpdater] init() called.'); // DBG MSG, FINDING PROPER SERVICE
    //console.log('[sensorDataUpdater] init() called.');

    // Initialize Attributes from Parameters
    svc.hostname = hostname;
    svc.port = port;
    svc.id = id;

    // Create the Client
    svc.client = new Paho.Client(svc.hostname, Number(svc.port), svc.id);

    // Create/Apply Client Callbacks
    svc.client.onConnected = onConnected;
    svc.client.onConnectionLost = onConnectionLost;
    svc.client.onMessageArrived = onMessageArrived;

  }

  // (PrettyFuncName) See '_connect()'
  function connect(options) {
    _call(_connect, [options]);
  }

  // (FuncWrapper) Connects to the MQTT Server
  function _connect(options) {
    svc.client.connect(options);
    svc.isConnected = svc.client.isConnected();
  }

  // (PrettyFuncName)
  function disconnect() {
    _call(_disconnect);
  }

  // (FuncWrapper)
  function _disconnect() {
    svc.client.disconnect();
    svc.isConnected = false;
  }

  // (PrettyFuncName)
  function onConnected(reconnect, uri) {
    _call(_onConnected, [reconnect, uri]);
  }

  // (FuncWrapper)
  function _onConnected(reconnect, uri) {
    console.log("[sensorDataUpdater._onConnected] Socket has been opened!");
    console.log("[sensorDataUpdater._onConnected] reconnect: %s, uri: %s", reconnect, uri);
  }

  // (PrettyFuncName)
  function onConnectionLost(resp) {
    _call(_onConnectionLost, [resp]);
  }

  // (FuncWrapper)
  function _onConnectionLost(resp) {
    console.log("[sensorDataUpdater._onConnectionLost] Connection lost on ", svc.id, ", error code: ", resp);
    svc.isConnected = false;
  }

  // (PrettyFuncName)
  function onMessageArrived(msg) {
    _call(_onMessageArrived, [msg]);
  }

  // (FuncWrapper)
  function _onMessageArrived(msg) {
    //console.log("[sensorDataUpdater._onMessageArrived] msg.payloadString = " + msg.payloadString);
    // Copy the message into 'payload'
    var payload = msg;
    console.log('[sensorDataUpdater._onMessageArrived] payload = ', payload);

    // Set the svc Data Object
    svc.data.payload = payload;
  }

  // (PrettyFuncName)
  function send(message) {
    _call(_send, [message]);
  }

  // (FuncWrapper)
  function _send(message) {
    svc.client.send(message);
  }

  // (PrettyFuncName)
  function startTrace() {
    _call(_startTrace);
  }

  // (FuncWrapper)
  function _startTrace() {
    svc.client.startTrace();
  }

  // (PrettyFuncName)
  function stopTrace() {
    _call(_stopTrace);
  }

  // (FuncWrapper)
  function _stopTrace() {
    svc.client.stopTrace();
  }

  // (PrettyFuncName)
  function subscribe(filter, options) {
    _call(_subscribe, [filter, options]);
  }

  // (FuncWrapper)
  function _subscribe(filter, options) {
    svc.client.subscribe(filter, options);
  }

  // (PrettyFuncName)
  function unsubscribe(filter, options) {
    _call(_unsubscribe, [filter, options]);
  }

  // (FuncWrapper)
  function _unsubscribe(filter, options) {
    svc.client.unsubscribe(filter, options);
  }

}
