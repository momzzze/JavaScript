const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const threadSchema=new Schema({
    users:[{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}],
    dateCreated:{type:Schema.Types.Date,default:Date.now}

})

const Thread=mongoose.model('Thread',threadSchema);

module.exports=Thread