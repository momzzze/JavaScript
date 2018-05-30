let test=require('./storage/db');
test.put('first','first value');
test.put('second','second value');
test.put('third','third value');

test.update('first','first value modified');

test.put('forth','forth value');

test.delete('forth');


test.save();
test.clear();
test.load()
.then(function(){
    console.log(test.getAll());
})
//console.log(test.getAll());
