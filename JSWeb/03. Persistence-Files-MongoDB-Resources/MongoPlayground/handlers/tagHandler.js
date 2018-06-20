const formidable=require('formidable');
const Tag=require('../models/TagSchema')
const util=require('util');


module.exports = (req, res) => {
  if (req.pathname === '/generateTag' && req.method === 'POST') {

    const form=new formidable.IncomingForm();


    form.parse(req,(err,fields,files)=>{
      res.writeHead(200,{
        'content-type':'text/plain'
      });
      res.write('received upload:\n\n');
      res.end(util.inspect({
        fields:fields,
        files:files
      }));
    })
  } else {
    return true;
  }
}
