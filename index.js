console.log('Botty Bot Bot is live');

var Twit = require('twit');

var config = require('./config');

//console.log(config);

var T = new Twit(config);

//Sample Tweet
function TweetIt(SayWhat){
        //var r = Math.floor(Math.random()*210);
        T.post('statuses/update', { status: SayWhat + r + ' #AnABot' }, function(err, data, response) {
            console.log(data)
        });
}


// Update once an hour to stay alive.
function HourBlast {
    var Tstamp = ;
    TweetIt("DING DONG! An Hour Has Passed #AnABot" + Tstamp);
}
setInterval(HourBlast, 1000*60*60);


// Respond when followed.
var Fstream = T.stream('user');
Fstream.on('follow',followed);
function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    TweetIt("@"+screenName+'Whats Shakin homebacon?');
}


// Standard Answer when @mentioned.
var stream = T.stream('statuses/filter', { track: '@AdventuresBot' })
stream.on('tweet', function (tweet) {
    console.log(tweet)
})