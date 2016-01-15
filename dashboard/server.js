var express = require('express')
var redis = require('redis').createClient(6379 , '192.168.99.100')
redis.get('test', function(err,res) {
  if(err) 
    throw err;
  console.log('redis connected !!')
});

var pg = require('pg');
var conString = process.env.ELEPHANTSQL_URL || "postgres://dbuser:dbuserpass@192.168.99.100/dbname";
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgre sql', err);
  }
  console.log('pg connected !!')
});

var app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001)