var express = require('express');
var router = express.Router();


router.post('/updatelocation', function(req,res,next){
  console.log(req.body);
  res.send(req.body);
});


router.get('/locations', function(req,res,next){
  res.send([
  {
    "coords": {
      "accuracy": 65,
      "altitude": 554.8209838867188,
      "altitudeAccuracy": 10,
      "heading": -1,
      "latitude": 43.84702629718166,
      "longitude": 18.374295023093808,
      "speed": -1,
    },
    "timestamp": 1358180986026.164,
  },
  {
    "coords": {
      "accuracy": 65,
      "altitude": 554.8209838867188,
      "altitudeAccuracy": 10,
      "heading": -1,
      "latitude": 43.94702629718166,
      "longitude": 18.374295023093808,
      "speed": -1,
    },
    "timestamp": 1558180986026.164,
  },
  {
    "coords": {
      "accuracy": 65,
      "altitude": 554.8209838867188,
      "altitudeAccuracy": 10,
      "heading": -1,
      "latitude": 43.84702629718166,
      "longitude": 18.375295023093808,
      "speed": -1,
    },
    "timestamp": 1458180986026.164,
  }

  
]);
});

module.exports = router;
