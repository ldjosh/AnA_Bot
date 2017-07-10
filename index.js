console.log('Botty Bot Bot is live');

var Twit = require('twit');

var config = require('./config');

console.log(config);

var T = new Twit(config);

T.post('statuses/update', { status: 'Bot Is Go!' }, function(err, data, response) {
    console.log(data)
});