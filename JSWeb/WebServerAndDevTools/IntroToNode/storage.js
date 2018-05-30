const fs=require('fs');
let storage={};

/*
    check functions
*/
let isKey=key=>{
        if(typeof key !=='string'){
        throw new Error('This key is not a string: '+key)
    }
};
let keyExist=key=>{
    if(!storage.hasOwnProperty(key)){
        throw new Error('This key does not exist: '+key)
    }
};
/*------------------------------------------------- */

function put(key,value){
    isKey(key);
    if(storage.hasOwnProperty(key)){
        console.log('Key already exist');
        return;
    }
    storage[key]=value;
}
function get(key){
    isKey(key);
    keyExist(key);
    if(!storage.hasOwnProperty(key)){
        console.log('Do not have this');
        return;
    }
    return storage[key];
}
function getAll(){
    if(Object.values(storage).length===0){        
        return 'Storage is empty!';  
    }
    return storage;
}
function update(key,newValue){
    isKey(key);
    keyExist(key);
    if(!storage.hasOwnProperty(key)){
        throw new Error('There is no key with name: '+key);
        
    }
    storage[key]=value;
}
function remove(){
    if(!storage.hasOwnProperty(key)){
        throw new Error('There is no key with name: '+key);
    }
    delete storage[key];
}
function clear(){
    storage={};
}

function save(){                                              /* async way  sync way is with writeFileSync(filePath,JSON.stringify(filePath))*/
    let jsonData=JSON.stringify(storage);
    fs.writeFile("./storage.json",jsonData,(err)=>{
        if(err){
            return;
        }
        console.log("File Created!");
    });
}
let load=()=>{                                         /*this cant work at this point in Async way  Sync way is : storage=JSON.parse(fs.readFileSync(filePath))*/
    return new Promise((resolve,reject)=>{
     let data= fs.readFile('./storage.json',((err,data)=>{    /*Ive created one Folder database but from several tries Ive change it from ./database/storage.json */

            if(err){
                reject(err)
                return;
            } 
            storage=JSON.parse(data);
            resolve();
    })
 );
});   
};
module.exports={
    put:put,
    get:get,
    getAll:getAll,
    update:update,
    delete:remove,
    clear:clear,
    save:save,
    load:load
};