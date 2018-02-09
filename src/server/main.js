import server from './app';
import colors from 'colors';
import config from 'config';

console.info(colors.blue.bold(`==> 🌎  Listening on port ${config.ports.httpServer}. Open up http://localhost:${config.ports.httpServer}/ in your browser.`));

server.listen(config.ports.httpServer);