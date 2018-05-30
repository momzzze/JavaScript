const http=require('http');
const port=8000;
const url=require('url');
const fs=require('fs');


const server=http.createServer(frontController);

/**
 * 
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 */

function frontController(req,res){
    console.log(url.parse(req.url));


    fs.readFile('./index.html','utf8',(err,data)=>{
        if(err){
            fs.readFile('./err.html','utf8',(err,data)=>{
                res.writeHead(404,{
                    'content-type': 'text/html'
                });
                res.write(data);
                res.end();
             
            });        
            return;       
        }
            res.writeHead(200,{
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
              

    });
    
}

server.listen(port);
console.log(`Listening on port ${port}...`);

