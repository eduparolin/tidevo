const nfe = require('./nfe.converter');
const db = require('./firebase.service');
const uuid = require('uuid/v4');

function test() {
    nfe.convert('http://www.fazenda.pr.gov.br/nfce/qrcode/?p=41181017261661005213650010000113469878112620%7C2%7C1%7C09%7C207.63%7C2f6d6b6d774748512f39665a4144674b73344c4b2f5256594562493d%7C1%7C4A550F7FF361D86831F209B2C51CD690B2EC3498')
        .then((r) => {
            let newPayment = db.collection('payments').doc(uuid());
            newPayment.set(r);
        })
        .catch((err) => {
            console.log(err);
        })
}

test();