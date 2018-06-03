
const http=require('http');
const port=4000;
const url=require('url');

const attachFileReader=require('./config/fileReader');
const handlers=require('./handlers');

function framework(req,res){
    console.log(req.url);

    req.urlData=url.parse(req.url);

    attachFileReader(res);
    for (let handler of handlers) {
        if (handler(req, res)!==true) {            
            break;
        }
    }
}
let server=http.createServer(framework);
server.listen(port);

console.log('Server on '+port);