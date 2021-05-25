var express = require('express');
var debug = require('debug');
var bodyParser = require('body-parser');

var config = require('./config/localConfig');
config = config[config.activeEnv];
console.log("active env::", config)

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var userRouter = require('./route/user')
app.use('/users', userRouter)

var portNumber = process.env.PORT || 3000;
app.set('port', portNumber);

console.log("portNumber ", portNumber);
var server = app.listen(app.get('port'), function (err, res) {
  if (err) {
    debug("Unable to start server " + config.PORT);
  }
  else {
    debug('Express server listening on port ' + server.address().port);
  }
})



module.exports = app;