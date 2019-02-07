const mongoose=require('mongoose');

const imageSchema=new mongoose.Schema({
    url:{type:String,required:true},
    creationDate:{type:mongoose.SchemaTypes.Date,required:true,default:Date.now},
    description:{type:mongoose.SchemaTypes.String,required:false},
    tags:[{type:mongoose.SchemaTypes.ObjectId,ref:"Tag"}]
});


module.exports=mongoose.model('Image',imageSchema);