const path=require('path');
let roothPath=path.normalize(path.join(__dirname,'/../../'));
let port=process.env.PORT || 1337;

module.exports={
    development:{
        roothPath:roothPath,
        db:'mongodb://localhost:27017/blogsystem',
        port: port
    },
    production: {}
};
