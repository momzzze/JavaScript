const fs = require('fs');

function getContentType(path) {
    if (path.endsWith('.css')) {
        return 'text/css';
    } else      
            if (path.endsWith('.ico')) {
                return 'text/x-icon';
            } else
                if (path.endsWith('.png')) {
                    return 'text/png';
                } else
                    if (path.endsWith('.jpg')) {
                        return 'text/jpg';
                    }
}
module.exports = (req, res) => {
    if (req.path.startsWith('/public') && req.method === 'GET') {
        fs.readFile(`./${req.path}`,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200,{
                'Content-type': getContentType(req.path)
            });   
            
            res.write(data);
            res.end();
        });
    }else{
        return true;
    }
};