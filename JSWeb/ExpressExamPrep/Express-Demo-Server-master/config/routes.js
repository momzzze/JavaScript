const controllers = require('../controllers');
const restrictedPages = require('./auth');
module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/users/register', controllers.user.registerGet);
    app.post('/users/register', controllers.user.registerPost);
    app.get('/users/logout', controllers.user.logout);
    app.get('/users/login', controllers.user.loginGet);
    app.post('/users/login', controllers.user.loginPost);

    app.get('/threads/find',controllers.thread.findThread);
    app.post('/threads/find',controllers.thread.findThread)


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};