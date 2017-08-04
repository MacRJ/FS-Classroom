var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send("Yo this worked")
  fs.readFile('../classrooms.json', function(err, data) {
    if (err) throw err;
    var records = JSON.parse(data)
    for(var i =0; i<records.length; i++){
var subjects = records[i]["subject"]

      res.render('infoDisplay.jade', {rooms: subjects})
    }
    // console.log(records)





    // console.log(data);
  })
})

module.exports = router;
