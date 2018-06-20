let env=process.env.NODE_ENV || 'development';

const settings=require('./server/config/settings')[env];



let app=require('express')();

require('./server/config/database')(settings);
require('./server/config/express')(app);
require('./server/config/routes')(app);
require('./server/config/passport')();



app.listen(settings.port);
console.log(`Server listening on port ${settings.port}....`);
