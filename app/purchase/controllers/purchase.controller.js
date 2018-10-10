const nfe = require('../../nfe/services/nfe.converter.service');
const db = require('../../firebase/services/firebase.service');
const uuid = require('uuid/v4');

exports.storePurchase = (req, res) => {
    nfe.convert(req.body.url)
        .then((r) => {
            let newPayment = db.collection('purchases').doc(uuid());
            newPayment.set(r);
            res.status(202).end();
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
};