let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let mongoose = require('mongoose')


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = Promise

let dbUrl = `mongodb://user:12345q@ds135726.mlab.com:35726/learning_node`;

//----------------------------------model--------------------------
let Message = mongoose.model('Message', {
    name: String,
    message: String
})
//__________________________________________________________________

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    })
})

app.post('/messages', async (req, res) => {


    try {
        let message = new Message(req.body);

        let savedMessage = await message.save()

        console.log('Saved');

        let censored = await Message.findOne({ message: 'badword' })

        if (censored)
            await Message.remove({ _id: censored.id });
        else
            io.emit('message', req.body);

        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
        return console.error(err);
    }
})








io.on('connection', (socket) => {
    console.log('a user connected');
});

mongoose.connect(dbUrl, { useMongoClient: true }, (err) => {
    console.log('mongo db connection', err);
});

let server = http.listen(3000, () => {
    console.log('server is listening on prompt ', server.address().port);
});

