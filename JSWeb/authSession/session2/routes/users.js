var express = require('express');
var router = express.Router();
var User = require('../data/models/user-model')

router.get('/login', function (req, res, next) {
  res.render('login');
})
  .get('/register', function (req, res) {
    res.render('register');
  })
  .post('/register', function (req, res) {
    const { email, password } = req.body;

    if (email.length && password.length) {
      const user = new User({
        email, password
      })

      user.save().then(() => {
        user.generateAuthToken()
          .then((token)=>{
            res.header('x-auth',token)
            .send(user);
          })
          .catch(error => res.status(400).send());

      }).catch(error => res.status(400).send());
    } else {

    }

    res.send({ email, password })
  })

module.exports = router;
