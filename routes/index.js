var express = require('express');

var pg = require('pg').native,
    connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/angular',
    start = new Date(),
    client;


module.exports = (function(io) {

  var router = express.Router();


  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });

  /* GET test page. */
  router.get('/test', function(req, res){

    //socket.io
    io.on('connection', function (socket) {
      socket.emit('log_environment', { environment: process.env.ENVIRONMENT });
    });

    //connect to psql
    client = new pg.Client(connectionString);
    client.connect();

    var date = new Date(),
        title = 'Test Page with psql';

    client.query('INSERT INTO visits(date) VALUES($1)', [date]);

    query = client.query('SELECT COUNT(date) AS count FROM visits WHERE date = $1', [date]);
    query.on('row', function(result) {

      if (!result) {
        return res.render('test', { title: title, result: 'no results' });
      } else {
        res.render('test', { title: title, result: 'Visits today: ' + result.count });
      }
    });

    query.on('end', function() { client.end(); });

  });

  return router;
});
