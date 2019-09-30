const fileManger = require('./file-manager');
const _=require('lodash');
const dir=require('./dir/index');

fileManger.readUsers(function (err, content){
    if (err) {
        console.error(err);
        return;
    }
    const userArr=content.split(',');
    console.log(_.chunk(userArr,2));
});

console.log('Hello');