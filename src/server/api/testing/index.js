'use strict';

import {Router} from 'express';
import * as controller from './testing.controller';

var router = new Router();

/*router.get('/', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });//*/

// Custom Routes Here:
router.get('/test', controller.test);
router.get('/getDevicesAjax', controller.devicesAjax);

//module.exports = router;
export default router;
