import express from 'express';
import compression from 'compression';
import path from 'path';
import http from 'http';
import config from 'config';
import api from './api/testing'; // Make this 'import router from './routes';'

let app = express();

app.use(compression());

//
// Root path of server
//let appRoot = path.normalize(`${__dirname}/..`);
//app.set('appPath', path.join(appRoot, 'client'));
//app.use(express.static(app.get('appPath')));

//app.use('/api/testing', require('./api/testing'));
app.use('/api/testing', api);

// All other routes should redirect to the index.html
//  app.route('/*')
//    .get((req, res) => {
//      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
//    });
//

// In development mode, we create a proxy server to forward all
// http request to the webpack-dev-server
if (config.watch) {
  let httpProxy = require('http-proxy');
  let proxy = httpProxy.createProxyServer();

  app.all('*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:' + config.ports.devServer
    });
  });

  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
  });

} else if (!config.test) {
  app.use(express.static(path.join(__dirname, '../../build/client')));
}

export default app;
