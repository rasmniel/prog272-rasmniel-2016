var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        'use strict';
        var url = 'mongodb://127.0.0.1:27017/renew';
        mongoose.connect(url);
        connect.connected = true;
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to local MongoDb');
        });
    },

    mlabConnect: function() {
        'use strict';
        connect.connected = true;
        var userName = 'rasmniel';
        var password = '1337haxxor';
        var siteAndPort = 'ds011314.mlab.com:11314';
        var databaseName = 'prog272-nielsen';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        mongoose.connect(url);
        connect.connected = true;
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to MLab');
        });
    },

    doConnection: function(useSimple) {
        'use strict';
        //var connectType = useSimple || true;
        if (false) {
            connect.simpleConnect();
        } else {
            connect.mlabConnect();
        }
    }

};

module.exports = connect;
