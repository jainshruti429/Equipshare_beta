// config/database.js

// configs to connect to the database

//=================================USE THIS FOR COMPUTER===================================
// module.exports = {
//     'connection': {
//       // local configs.
//         'host' : 'localhost',
//         'user': 'root',
//         'password': 'root@SQL1',
// 			'database': 'eqsAuction'
//     }   
// };

//=================================USE THIS FOR SERVER===================================
module.exports = {
    'connection': {
      // server configs.
        'host' : 'mydbinstance.cltmsxnlpv2o.ap-south-1.rds.amazonaws.com',
        'user': 'aakash',
        'password': '123aakash',
        'database': 'eqsAuction'
    }
};
