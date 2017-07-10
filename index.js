console.log('Botty Bot Bot is live');

var Twit = require('twit');

var config = require('./config');

//console.log(config);

var T = new Twit(config);

function TweetIt(SayWhat){

        var r = Math.floor(Math.random()*210);

        T.post('statuses/update', { status: SayWhat + r + ' #AnABot' }, function(err, data, response) {
            console.log(data)
        });
}

TweetIt("Jive Turkey ");

var stream = T.stream('statuses/filter', { track: '@AdventuresBot' })

stream.on('tweet', function (tweet) {
    console.log(tweet)
})