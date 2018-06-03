const staticHandler=require('./staticHandler');
const errorHandler=require('./errorHandler');
const homeHandler=require('./homeHendler');
const moviesHandler=require('./movieHandler');

module.exports=[
    homeHandler,staticHandler,moviesHandler,errorHandler
];