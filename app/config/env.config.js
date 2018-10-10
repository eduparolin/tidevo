module.exports = {
    "elasticsearch": {
        "host": "elastic.service.cwb1.tunts.net",
        "indexPattern": "[logs-pgmais-occurrences-]YYYY.MM.DD",
        "logLevel": 10,
        "logName": "logs-pgmais-occurrences",
        "type": "logs"
    },
    "jwt": {
        "expiresIn": 3600000,
        "secret": "Q0MGU3NDYiLCJlbWFpbCI6ImpvYl9ydW5uZXJ"
    },
    "database": {
        name: 'pgmais_occurrences',
        host: '35.198.3.4',
        password: 'fakePass!PgMais',
        user: 'pgmais_occurrences'
    },
    block_sms: {
        name: 'cancelar_sms'
    },
    block_voz: {
        name: 'cancelar_voz'
    },
    "jwt": {
        "expiresIn": 3600000,
        "secret": "Q0MGU3NDYiLCJlbWFpbCI6ImpvYl9ydW5uZXJ"
    },
};