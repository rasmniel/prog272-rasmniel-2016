var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        var url = 'mongodb://127.0.0.1:27017/renew';
        connect.connected = true;
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    //mongodb://<dbuser>:<dbpassword>@ds011314.mlab.com:11314/prog272-nielsen
    mlabConnect: function() {
        connect.connected = true;
        var userName = 'rasmniel';
        var password = '1337haxxor';
        var siteAndPort = 'ds011314.mlab.com:11314';
        var databaseName = 'prog219-nielsen';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(useSimple) {
        var connectType = useSimple || false; // true for local, false for remote.
        if (connectType) {
            connect.simpleConnect();
        }
        else {
            connect.mlabConnect();
        }
    }

};

module.exports = connect;