console.log('Botty Bot Bot is live');

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'esd3u48TKL0iaXmAsAMUVm7wo',
    consumer_secret:      'dVPqzi9is9la96nY03O2jBcScPOETODZ0BWO7dNHPa7swrIqAL',
    access_token:         '884142774462935041-k06sdmkd62K1LGRZqlr05ww9MVSXRlH',
    access_token_secret:  'CTZhJQ8vqh4I6HhDcmT52Q9NLYovKyll2RsmA0hWaeEs2',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

T.post('statuses/update', { status: 'Bot Is Go!' }, function(err, data, response) {
    console.log(data)
})