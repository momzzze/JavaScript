const express = require('express');
const handlebars=require('express-handlebars')
const initData = require('./data');
const workoutLogRouter = require('./routes/workout-log-route')
const bodyParser = require('body-parser');


initData();
const app = express();
const port = 3000;

app.engine('.hbs',handlebars({
    extname:'.hbs',
}));
app.set('view engine','.hbs');
app.set('views','./views/');


app.use((req, res, next) => {
    console.log(Date.now());
    next();
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public/'))
app.use('/workoutlog', workoutLogRouter)

app.get('/', (req, res) => {
    res.send('Hello World');

});

app.listen(port, () => {
    console.log('Server started ...')
})