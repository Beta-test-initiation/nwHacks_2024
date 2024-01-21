// Short endpoint: /stream
// - Up to 1000 characters
// - Synchronous, instant response (0.3s+)
// - Streams back raw audio data

const axios = require('axios');
const fs = require('fs');

const headers = {
    'Authorization': 'Bearer mkSWMMpAjbg2xK0dbw6xJ76SPnZeZfg9iciqtepH2Ul6fMK2nLoBl9',
};

const data = {
    'Text': 'This is a test', // Up to 1000 characters
    'VoiceId': 'Scarlett', // Dan, Will, Scarlett, Liv, Amy
    'Bitrate': '192k', // 320k, 256k, 192k, ...
    'Speed': '0', // -1.0 to 1.0
    'Pitch': '1', // -0.5 to 1.5
    'Codec': 'libmp3lame', // libmp3lame or pcm_mulaw
};

axios({
    method: 'post',
    url: 'https://api.v6.unrealspeech.com/stream',
    headers: headers,
    data: data,
    responseType: 'stream'
}).then(function (response) {
    response.data.pipe(fs.createWriteStream('audio.mp3'))
});
