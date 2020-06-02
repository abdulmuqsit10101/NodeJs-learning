// Introduction to express

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/home.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function (req, res) {
  const data = {age: 19, job: 'Node JS Dev', hobbies: ['eating', 'drinking', 'playing']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen('3000');
