const qif2json = require('qif2json');
const encode  = require('@prudent/encode');

require('@prudent/text-import').start(function(content) {

    let parsedContent = qif2json.parse(content, {
        dateFormat: 'us'
    });

    let transactions = [];

    parsedContent.transactions.forEach(function(item) {

        let transactionObject = encode.transaction(
            encode.dateString(item.date),
            item.payee,
            item.amount,
            item.category
        );

        transactions.push(transactionObject);
        
    });

    console.log(encode.protocol('transactions', transactions));

});
