// server.js
// where your node app starts

// init project
const express = require('express');
const request = require('request');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
const port = process.env.PORT || 8123;
// listen for requests :)
const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + port);
});

app.use('/proxy', function(req, res) {  
  var url = req.url.replace('/?url=','');
  req.pipe(request(url)).pipe(res);
});

//app.listen(process.env.PORT || 8123);  