var express = require('express');
var router = express.Router();
var Robot = require("../../models/robot");

/* LIST */

router.get('/api/robots.json', function(req, res, next) {
  Robot.find( function (err, robots) {
    if (err) {
      console.log(err)
      res.setHeader('Content-Type', 'application/json')
      res.status(500).json("OOPS. SERVER ERROR.")
    } else {
      console.log("LIST", robots.length, "ROBOTS:", robots)
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(robots.reverse())
    }
  })
})

/* CREATE */

router.post('/api/robots.json', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json("TODO: CREATE")
})

/* SHOW */

router.get('/api/robots/:id.json', function(req, res, next) {
  console.log(req.params)
  const robotId = req.params.id;

  Robot.findById(robotId, function(err, robot) {
    if (err){
      errorMessage = `Couldn't find robot ${robotId}. Please double-check you are requesting a robot with a valid identifier. Try listing all robots to see some examples.`
      console.log(errorMessage)
      res.setHeader('Content-Type', 'application/json')
      res.status(404).json(errorMessage)
    } else {
      console.log("SHOW ROBOT", robot);
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(robot)
    }
  })
})

/* UPDATE */

router.patch('/api/robots/:id.json', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json("TODO: UPDATE")
})

/* DESTROY */

router.delete('/api/robots/:id.json', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json("TODO: DESTROY")
})

module.exports = router;
