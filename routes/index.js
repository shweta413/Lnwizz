/**
 * Created by shweta on 13/6/17.
 * @description: Main router
 */
const express = require('express');
const router = express.Router();
const config = require('../config');
const path = require('path');
const services = require('../server/services/apiHandlers');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile(path.join(config.directories.publicDir, config.files.mainHTML));
});

router.use(config.server.assetsPath.publicDir, express.static(config.directories.publicDir));
router.use(config.server.assetsPath.images, express.static(config.directories.images));

// Registering services
services(router);

module.exports = router;