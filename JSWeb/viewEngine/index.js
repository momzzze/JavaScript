const express=require('express');
const handlebars=require('express-handlebars')
let app=express();

app.engine('.hbs',handlebars({
    extname:'.hbs'
}));

app.set('view engine','.hbs');


app.get('/',(req,res)=>{
    res.render('home',{
        title:'Nikola'
    });
});

app.listen(1337);