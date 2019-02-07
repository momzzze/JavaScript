const fs = require('fs');


let storage = {};



module.exports = {
    put: (key, value) => {
        if (typeof (key) === 'string') {
            if (!storage.hasOwnProperty(key)) {
                storage[key] = value;
            } else {
                throw new Error('Key already exist');
            }
        } else {
            throw new Error("The key should be string");
        }
    },
    get: (key) => {
        if (typeof (key) === 'string') {
            if (storage.hasOwnProperty(key)) {
                return storage[key];
            } else {
                throw new Error('Key is not defined');
            }
        } else {
            throw new Error("The key should be string");
        }
    },
    getAll: () => {
        if (Object.keys(storage).length === 0) {
            throw new Error('The storage is empty');
        } else {
            return storage;
        }
    },
    update: (key, newValue) => {
        if (typeof (key) === 'string') {
            if (storage.hasOwnProperty(key)) {
                storage[key] = newValue;
            } else {
                throw new Error('The key doesn\'t exist')
            }
        } else {
            throw new Error("The key must be string type!");
        }
    },
    del: (key) => {
        if (typeof (key) === 'string') {
            if (storage.hasOwnProperty(key)) {
                delete storage[key];
            } else {
                throw new Error('Key doesn\'t exist!');
            }
        } else {
            throw new Error("The key must be string type!");
        }
    },
    clear: () => {
        storage = {};
    },
    save: () => {
        fs.writeFileSync('storage.json', JSON.stringify(storage), 'utf-8');
    },
    load: () => {
        return new Promise((resolve,reject)=>{
            let data= fs.readFile('./storage.json',((err,data)=>{    
       
                   if(err){
                       reject(err)
                       return;
                   } 
                   storage=JSON.parse(data);
                   resolve();
           })
        );
       }); 
    }
}