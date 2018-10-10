const Request = require('request-promise');
const cheerio = require('cheerio');

function convert(url) {
    let nota = {};
    let items = [];

    let options = {
        method: 'GET',
        url: url
    };

    return Request(options)
        .then((resp) => {
            let documento = cheerio.load(resp, { normalizeWhitespace: true });
            nota.totalValue = documento('span.totalNumb.txtMax').text();
            nota.purchasePlace = documento('div.txtTopo').text();
            documento('span.txtTit2').each((a, b) => {
                items[a] = {
                    name: b.children[0].data
                };
            });
            documento('span.RvlUnit').each((a, b) => {
                items[a].value = 'R$'+b.children[2].data;
            });

            nota.items = items;

            return Promise.resolve(nota);
        })
        .catch(e => {
            console.log(e);
            return Promise.reject({});
        })
}

exports.convert = convert;