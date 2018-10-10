const purchaseController = require('./controllers/purchase.controller');

exports.attach = (server) => {
    server.post('/purchase', [purchaseController.storePurchase])
};