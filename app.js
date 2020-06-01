// Introduction to express

const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('This is home page.');
});

app.get('/contact', function (req, res) {
  res.send('This is contact page.');
});

app.listen('3000');
