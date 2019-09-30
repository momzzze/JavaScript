const express = require("express");
const port = 8080;

const users=[{
    id:1,
    firstName: "FirstName"
}];



const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');

});

app.get('/user/:id', (req, res) => {
    const user = users.find(u => u.id === +req.params.id);
    res.send(user);
})


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})