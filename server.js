const port = 9000;
const host = 'localhost';

require('cors-anywhere').createServer({
    /* Allow all origins */
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
