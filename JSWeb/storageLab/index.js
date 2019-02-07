const storage=require("./storage");

storage.put('spa','spagetti');
console.log(storage.get('spa'));
console.log(storage.getAll());

storage.put('spa1','soaghetsada');
storage.update('spa','idiot');
console.log(storage.getAll());

storage.del('spa1')
console.log(storage.getAll());

storage.clear();

storage.put('spa2','2222222222222222222222222222222222222');
storage.put('spa3','33333333333333333333333333');
storage.put('spa4','4444444444444444444444444444444');
console.log(storage.getAll());
storage.save();
storage.load();
storage.put('spa5','555555555555555');
storage.save();
storage.load();

console.log(storage.getAll());