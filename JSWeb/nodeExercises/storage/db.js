const fs=require('fs');

let db={};


let isKey=key=>{
    if(typeof key !== 'string'){
        throw new Error('This key is not a string =>'+ key);
        
    }
};
let keyExists=key=>{
    if(!db.hasOwnProperty(key)){
        throw new Error('This ket does not exists=> '+key)
    }
};
let put=(key,value)=>{
    isKey(key);

    if(db.hasOwnProperty(key)){
        console.log('Key already exists');
        return;
    }
    db[key]=value;
};
let get=(key)=>{
    if(!db.hasOwnProperty(key)){
        console.log('I dont have this!');
        return;
    }
    return db[key];
};
let getAll=()=>{
   if(Object.values(db).length===0){
       return 'No items in storage!'
   }
    return db;
};
let update=(key,value)=>{
    isKey(key);
    if(!db.hasOwnProperty(key)){
        throw new Error('There is no key with name =>'+key)
    }
    db[key]=value;
};
let deleteItem=(key)=>{
    isKey(key);
    if(!db.hasOwnProperty(key)){
        throw new Error('There is no key with name =>'+key)
    }
    delete db[key];
};
let clear=()=>{
    db={};
};
let save=()=>{
    let jsonData=JSON.stringify(db);
    fs.writeFileSync("./storage.json",jsonData,'utf8')
      
};
let load=()=>{
    try{
        db=JSON.parse(fs.readFileSync('./storage.json','utf8'));
    }catch(err){

    }finally{

    }
};
module.exports={
    put:put,
    get:get,
    getAll:getAll,    
    update:update,
    delete:deleteItem,
    clear:clear,
    save:save,
    load:load
};
