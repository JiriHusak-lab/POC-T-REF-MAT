'use strict';

module.exports = function(Mvm) {
    Mvm.listAll = function(cb) {
        console.log('mvms/listAll invoked');
        // Fake JHUSAK 2020.11.11
        cb = {'mvm': 'wh1', 'mvm': 'wh2', 'mvm': 'wh3','mvm': 'mmswh18'};
        // Orig - stopped JHUSAK 2020.11.11
        // Mvm.find({}, cb);
        console.log('mvms/listAll passed.');
    };

    Mvm.remoteMethod('listAll', {
        returns: {
            arg: 'mvms',
            type: 'array'
        },
        http: {
            path: '/listall',
            verb: 'get'
        }
    });

    Mvm.disableRemoteMethodByName('create');     // Removes (POST) /products
    Mvm.disableRemoteMethodByName('upsert');     // Removes (PUT) /products
    Mvm.disableRemoteMethodByName('deleteById'); // Removes (DELETE) /products/:id
    Mvm.disableRemoteMethodByName('updateAll');  // Removes (POST) /products/update
    Mvm.disableRemoteMethodByName('prototype.updateAttributes');
};
