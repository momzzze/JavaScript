const restrictedPages = require('./auth');
const homeController = require('../controllers/home');
const userController = require('../controllers/user')
const carController=require('../controllers/car');


module.exports = app => {
    app.get('/', homeController.index);
    app.get('/user/register', restrictedPages.isAnonymous, userController.registerGet)
    app.post('/user/register', restrictedPages.isAnonymous, userController.registerPost)
    app.get('/user/login', restrictedPages.isAnonymous, userController.loginGet)
    app.post('/user/login', restrictedPages.isAnonymous, userController.loginPost)
    app.post('/user/logout', userController.logout)
    app.get('/user/rents',restrictedPages.isAuthed,userController.myRents);

    
    app.get('/car/add', restrictedPages.hasRole('Admin'),carController.addGet);
    app.post('/car/add',restrictedPages.hasRole('Admin'),carController.addPost);
    app.get('/car/all',carController.allCars);
    app.get('/car/rent/:id',restrictedPages.isAuthed,carController.rent);
    app.get('/car/edit/:id',restrictedPages.isAuthed,carController.editGet);
    app.post('/car/edit/:id',restrictedPages.isAuthed,carController.editPost);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};