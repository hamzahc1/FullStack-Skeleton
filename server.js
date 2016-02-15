var express = require("express");
var app = express();
var bodyParser = require('body-parser');
// var routes = require('./routes.js');
// var http = require('http').Server(app);
// var cors = require('cors');
// app.use(cors);
app.use(bodyParser.json());
app.use('/client', express.static( __dirname + '/client'));
app.use('/services', express.static( __dirname + '/services'));
app.use('/getList', express.static( __dirname + '/getList'));

//MONGOOSE STUFF
var mongoose = require('mongoose');
var db = require('./itemSchema.js');
mongoose.connect('mongodb://localhost/michael');


//ROUTES FOR '/' AJAX Requests
app.route('/').
  options(function (req, res, next) {
      res.status(200).end();
      next();
  }).
  get(function (req, res) {
  	res.sendFile(__dirname + '/index.html');
  });

app.post('/post', function (req, res) {
  console.log('IN THE FUCKING POST!!!!', req.body);
  db.create({task: req.body.task}, function(error, newItem){
    if(error){
      console.log("ERRRRRROR");
      return res.send(404);
    } else {
      console.log('COMPLETED!');
      res.send(200, newItem);
    }
  });
});

  app.get('/items', function(req, res) {
    db.find({},{task: true, _id: false}, function(error, allItems) {
      if(error) {
        console.log('GET ERRRRORR');
        return res.send(404);
      } else {
        console.log('GET COMPLETED');
        console.log('ALL ITEMS: ------>', allItems);
        res.send(200, allItems);
      }
    });
  });


//SETTING UP PORT AND STARTING SERVER
var port = 3000;
app.listen(3000, function(){
console.log("server listening on....", port);
});

module.exports = app;