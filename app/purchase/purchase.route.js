const purchaseMiddleware = require('./middlewares/purchase.middleware');
const purchaseController = require('./controllers/purchase.controller');

exports.attach = (server) => {
    server.post('/purchase', [purchaseMiddleware.validateRequest, purchaseController.storePurchase])
};