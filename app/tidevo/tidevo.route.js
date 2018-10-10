const tidevoController = require('./controllers/tidevo.controller.js');

exports.attach = (server) => {
    server.post('/test', [tidevoController.test]);
};