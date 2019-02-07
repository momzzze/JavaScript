const http = require('http');
const url = require('url');
const port = 1337;
const handlers = require('./handlers/index')

http.createServer((req, res) => {
    req.path = url.parse(req.url).pathname;

    for (const handler of handlers) {
        if (handler(req, res) === false) {
            break;
        }
    }
}).listen(port);