// Written by Sam

'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'pug');

// Use the built-in express middleware for serving static files from './public'
app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
