//const mongoDb=require('mongodb');
//let connectionString='mongodb://localhost:27017/pets';
//
//mongoDb.MongoClient.connect(connectionString).then(client=>{
//    let db=client.db('pets');
//
//    let dogs=db.collection('dogs');
//    dogs.insert({
//        name: 'swagss',
//        age:17,
//        color:'black'
//    });
//
//
//    dogs.find({}).toArray((err,dogs)=>{
//        console.log(dogs);
//        
//    });
//});
//

const mongoose=require('mongoose');
let connectionString='mongodb://localhost:27017/cats';

let catSchema=new mongoose.Schema({
    name:{ type: String,required:true},
    age:{type:Number,required:true},
    color:{type:String}
})
let Cat=mongoose.model('Cat',catSchema)

//let Cat=mongoose.model('Cat',{
//  name:{ type: String,required:true},
//  age:{type:Number,required:true},
//  color:{type:String}
//});
//
//
//let Owner=mongoose.model('Owner',{
//    firstName:{type:String,required:true},
//    lastName:{type:String,required:true},
//    cats:[Cat.schema]
//});
//

mongoose.connect(connectionString).then(()=>{

    Cat.find({}).then(cats=>console.log(cats));
      
});


