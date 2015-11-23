var express = require('express');
var app = express();
var path = require("path");
var logger = require('morgan');
var bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// accept POST request for login
app.post('/login', function (req, res) {
  var password = req.body.password;
  var date = new Date();

  console.log('[' + date + '] [' + req.ip + '] Password: ' + password);

  if (password === 'baccano') {
    res.send('Correct password...<br> But there\'s nothing here.');
  } else {
    res.send('Wrong password...<br> Guess you don\'t watch good Anime.');
  }
});

// handle favicon
app.get('/favicon.ico',function(req,res) {
    res.sendFile(path.join(__dirname, '/public/img/favicon.ico'));
});

// ============================= node_modules =================================

app.get('/js/jquery.min.js',function(req,res) {
    res.sendFile(path.join(__dirname,
      '/node_modules/jquery/dist/jquery.min.js'));
});

app.get('/js/jquery.min.map',function(req,res) {
    res.sendFile(path.join(__dirname,
      '/node_modules/jquery/dist/jquery.min.map'));
});
// ============================================================================

var server = app.listen(30080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Dollars\' login page listening at http://%s:%s', host, port);
});