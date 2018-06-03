const http=require('http');
const fs=require('fs');
const formidable=require('formidable');

http.createServer((req,res)=>{
    if(req.method==="GET"){
    fs.readFile('./index.html','utf8',(err,data)=>{
      if(err){
          console.log(err);
          return;
      }

      res.writeHead(200,{
          'content-type':'text/html'
      });
       res.write(data);
       res.end();
    });
}else if(req.method==="POST"){
    let form=new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(err){
            console.log(err);
            return;
        }    
      let file=files.file;
      let tempPath=file.path;
      let fileName=file.name;

      fs.rename(tempPath,'./files/'+fileName,(err)=>{
          if(err){
              console.log(err);
              return;                 
          }

          res.write('Thank you');
          res.end();
      });     
    });
}
    
}).listen(1337);
