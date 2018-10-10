const nfe = require('./app/nfe/services/nfe.converter.service');
const db = require('./app/firebase/services/firebase.service');
const uuid = require('uuid/v4');

function test() {

}

const server = require('./app/app');
const logService = require('./app/common/services/log.service');

process.on('uncaughtException', function (err) {
    logService.error({uncaughtException: err}, 'uncaughtException');
    console.error(err);
});

server.listen(7001, function() {
    console.log('%s listening at %s', server.name, server.url);
});