const _ = require('lodash');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

app.use(bodyParser.json());
app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/api/auth']}));

app.post('/api/auth', function(req, res) {
  const body = req.body;
  console.log(body, 'body');
  if(body.password != 'password') return res.sendStatus(401);
  var token = jwt.sign({userID: 1}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
  res.send({token});
});

app.get('/', function (req, res) {
    res.send('Angular JWT Todo API Server')
});

app.listen(4201, function () {
    console.log('Angular JWT Todo API Server listening on port 4201!')
});
