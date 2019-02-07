
var mongoose = require('mongoose');
var connectionString = 'mongodb://User:9208143629q@ds115625.mlab.com:15625/expressjs';


module.exports = () => {
    mongoose.connect(connectionString);

}