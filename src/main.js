'use strict';

var express = require('express');

var app = express();

var path = process.cwd();

app.use('/', express.static('./'));

app.route('/')
  .get(function(req, res) {
    console.log(req.headers);
    res.json({
      ipaddress: req.ip,
      language: req.get('user-agent'),
      software: req.get('user-agent')
    });
  });

app.listen(process.env.PORT || 8080, function() {
  console.log('listening');
});
