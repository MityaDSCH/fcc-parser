'use strict';

var express = require('express');

var app = express();

var path = process.cwd();

app.use('/', express.static('./'));

app.route('/')
  .get(function(req, res) {
    console.log(req.connection.remoteAddress);
    res.json({
      ipaddress: null,
      language: null,
      software: null
    });
  });

app.listen(process.env.PORT || 8080, function() {
  console.log('listening');
});
