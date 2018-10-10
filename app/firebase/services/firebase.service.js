const admin = require('firebase-admin');

var serviceAccount = require('../../../account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

module.exports = db;