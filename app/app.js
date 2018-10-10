const express = require('express');
const server = express();

const timerMiddleware = require('./common/middlewares/timer.middleware');
const logMiddleware = require('./common/middlewares/log.middleware');

server.use(express.json({strict: false}));
server.use(express.query());

require('./common/common.route').attach(server);

server.use(timerMiddleware);
server.use(logMiddleware);

require('./tidevo/tidevo.route').attach(server);
require('./purchase/purchase.route').attach(server);

module.exports = server;
