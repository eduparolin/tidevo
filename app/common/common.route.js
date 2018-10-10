const swaggerUi = require('swagger-ui-express');
const commonController = require('./common.controller');

var options = {
    swaggerUrl: 'https://api.stoplight.io/v1/versions/QzSHzyY5jDtxL6o27/export/oas.json'
};

exports.attach = (server) => {
    server.options(/\.*/, (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization");
        return next();
    }, (req, res) => {
        res.send(200);
    });
    server.get('/healthcheck', [commonController.healthcheck]);

    server.use('/docs', swaggerUi.serve, swaggerUi.setup(null, options));

};