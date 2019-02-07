const mongoose=require('mongoose');

module.exports=function initData(){
    mongoose.connect('mongodb://User:9208143629q@ds115625.mlab.com:15625/expressjs');
}