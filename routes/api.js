var express = require('express');

module.exports = (function() {

    var api = express.Router();

    api.get('/test.json', function(req, res){
      res.send({
        test: true,
        current_time: new Date()
      });
    });

    return api;
})();