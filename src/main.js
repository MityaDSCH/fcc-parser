'use strict';

var express = require('express');
var uaParser = require('ua-parser-js');

var app = express();

app.use('/', express.static('./'));

app.route('/')
  .get(function(req, res) {

    var ip = req.ip;
    if (ip.lastIndexOf(':') !== -1) {
      ip = ip.substr(ip.lastIndexOf(':') + 1, ip.length - 1);
    }

    var lang = req.headers['accept-language'];
    lang = lang.substr(0, lang.indexOf(','));

    var uaInfo = uaParser(req.headers['user-agent']);

    res.json({
      ipaddress: ip,
      language: lang,
      software: uaInfo.os.name + ' ' + uaInfo.os.version + ', ' + uaInfo.browser.name + ': ' + uaInfo.browser.version
    });
  });

app.listen(process.env.PORT || 8080, function() {
  console.log('listening');
});
