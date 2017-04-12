var express = require('express');
var router = express.Router();
var Robot = require("../../models/robot");

/* List Robots (GET) */

router.get('/api/robots.json', function(req, res, next) {
  Robot.find( function (err, robots) {
    if (err) {
      console.log(err)
      res.setHeader('Content-Type', 'application/json')
      res.status(404).json("OOPS. SERVER ERROR.")
    } else {
      console.log("LIST", robots.length, "ROBOTS:", robots)
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(robots.reverse())
    }
  })
})

/* Show Robot (GET) */

router.get('/api/robots/:id.json', function(req, res, next) {
  console.log(req.params)
  const robotId = req.params.id;

  Robot.findById(robotId, function(err, robot) {
    if (err){
      errorMessage = `Couldn't show robot ${robotId}. Please double-check you are requesting a robot with a valid identifier. Try listing all robots to see some examples.`
      console.log(errorMessage)
      res.setHeader('Content-Type', 'application/json')
      res.status(404).json(errorMessage)
    } else {
      console.log("SHOW ROBOT", robot);
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(robot)
    };
  });
});

module.exports = router;
