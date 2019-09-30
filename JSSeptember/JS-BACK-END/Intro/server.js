const http = require('http');
const url=require('url');
const port = 8080;

const app = http.createServer(function (req, res) {
    // res.write('Hello');
    // setTimeout(function(){
    //     res.write(' ')
    //     res.end(' World!');
    // },10000);
    const { pathname }=url.parse(req['url']);
    if(pathname==='/'){
        res.end('home');
        return;
    } 
    if(pathname==='/about'){
        res.end('about');
        return;
    }
    if(pathname==='/content'){
        res.end('content');
        return;
    }
});

app.listen(port, function () {
    console.log(`Server is listening on ${port}`);
})