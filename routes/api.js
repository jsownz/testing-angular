var express = require('express');
var router = express.Router();

router.get('/test.json', function(req, res){
  res.send({
    test: true,
    current_time: new Date()
  });
});

module.exports = router;