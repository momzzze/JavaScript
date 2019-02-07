const mongoose = require('mongoose');
const connectionString="mongodb://localhost:27017/mongossPlayGround";


module.exports = mongoose.connect(connectionString);