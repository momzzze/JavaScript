const http = require('http');
const port = 1337;
const fs=require('fs');
const url=require('url')

http.createServer((req, res) => {
    const parsedUrl=url.parse(req.url);

    if(parsedUrl.pathname==='/'){
        let formData='';
        req.on('data',(chunk)=>{
            formData+=chunk;
        });
        req.on('end',()=>{
            const body=qs.parse(formData);
            debugger;
            body;
        });
        res.end();
    }     
}).listen(port);


console.log(`Web Server started at port : ${port}`)

