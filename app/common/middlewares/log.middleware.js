const uuid = require('uuid');
let log = require('../services/log.service');

// If you are seeing 'log-middleware' in your logs is because you forgot
// to override the logging module. Go now and DO IT.
function generateLog(req, res, next) {
    req.reqId = uuid.v1();
    req.log = log.child({reqId: req.reqId, module: req.originalUrl});

    req.requestLogObject = {
        path: req.originalUrl,
        url: req.url,
        method: req.method,
        headers: req.headers,
        origin: req.origin
    };
    req.log.info({request: req.requestLogObject}, `request received`);

    res.setHeader('reqId', req.reqId);


    res.on('finish', () => {

        req.timerLogObject = req.timerLogObject || {};


        if (req.timer) {

            req.timerLogObject = {};

            for (let time of req.timerList || []) {
                req.timerLogObject[time] = req.timer.time(time).msecs();
            }
            for (let tag in req.timersTags || {}) {
                if (req.timersTags.hasOwnProperty(tag)) {
                    try {
                        req.timerLogObject[tag] = req.timer.total(tag).msecs();
                    } catch (err) {
                        req.log.warn({err, time}, 'Timer not stopped');
                    }
                }
            }

            req.timerLogObject['total'] = req.timer.total().msecs();


        }

        req.log.info({
            request: req.requestLogObject,
            timers: req.timerLogObject,
            response: {responseCode: res.statusCode, headers: JSON.stringify(res._headers)}
        }, `request finished`);
    });

    next();

}

module.exports = generateLog;