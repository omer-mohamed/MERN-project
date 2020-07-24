const router = require('express').Router();
const request = require("request");
const apiKey = process.env.API_KEY;

//*** GET  ***/
router.route('/').get((err,req, res) => {
    var url = `http://data.orghunter.com/v1/charitysearch?user_key=${apiKey}`
    request(url, function (error, req, body) {
        if(error){res.send(error);}else{res.send(body);}
      });
});

//specifc route for an organization get request 
router.route('/:uid').get((err,req, res) => {
  var url = `http://data.orghunter.com/v1/charitysearch?user_key=${apiKey}&ein=${req.params.uid}`
  request(url, function (error, req, body) {
      if(error){res.send(error);}else{res.send(body);}
    });
});

//*** POST  ***/
router.route('/advancedSearch').post((err,req, res) => {
  let data = req.body;
  var url = `http://data.orghunter.com/v1/charitysearch?user_key=${apiKey}`
  request(url, function (error, req, body) {
      if(error){res.send(error);}else{res.send(req.body);}
    });
});


module.exports = router;