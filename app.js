// Introduction to express

const express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express();

app.set('view engine', 'ejs');

app.use('/stuff', express.static('stuff'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.post('/contact', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function (req, res) {
  const data = {age: 19, job: 'Node JS Dev', hobbies: ['eating', 'drinking', 'playing']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen('3000');
