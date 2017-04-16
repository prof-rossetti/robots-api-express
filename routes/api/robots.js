var express = require('express');
var router = express.Router();
var Robot = require("../../models/robot");

// HANDLE PRE-FLIGHT REQUESTS
// source: http://stackoverflow.com/a/7069902/670433
router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next()
})

/* LIST */

router.get('/api/robots', function(req, res, next) {
  Robot.find( function (err, robots) {
    if (err) {
      console.log(err)
      res.setHeader('Content-Type', 'application/json')
      res.status(500).json("OOPS. SERVER ERROR.")
    } else {
      console.log("LIST", robots.length, "ROBOTS")
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(robots.reverse())
    }
  })
})

/* CREATE */

router.post('/api/robots', function(req, res, next) {
  console.log("RECEIVED DATA", req.body)
  const robotData = {name: req.body.name, description: req.body.description}

  var robot = new Robot(robotData)
  robot.save(function(saveErr, persistedRobot) {
    if (saveErr){
      res.setHeader('Content-Type', 'application/json')
      res.status(400).json({message: saveErr, robotData: robotData})
    } else {
      res.setHeader('Content-Type', 'application/json')
      res.status(201).json({message:"ROBOT CREATED", robot: persistedRobot})
    }
  })
})

/* SHOW */

router.get('/api/robots/:id', function(req, res, next) {
  console.log(req.params)
  const robotId = req.params.id

  Robot.findById(robotId, function(err, robot) {
    if (err){
      errorMessage = `Couldn't find robot ${robotId}. Please double-check you are requesting a robot with a valid identifier. Try listing all robots to see some examples.`
      console.log(errorMessage)
      res.setHeader('Content-Type', 'application/json')
      res.status(404).json(errorMessage)
    } else {
      console.log("SHOW ROBOT", robot)
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(robot)
    }
  })
})

/* UPDATE */

router.put('/api/robots/:id', function(req, res, next) {
  console.log("RECEIVED DATA", req.body)
  const robotId = req.params.id
  const robotData = {name: req.body.name, description: req.body.description}

  Robot.findById(robotId, function(err, robot) {
    if (err){
      const message = "Couldn't Find Robot"
      console.log(message, robotId)
      res.setHeader('Content-Type', 'application/json')
      res.status(404).json({message: message, robotId: robotId, robotData: robotData}) // pass-back form values
    } else {
      robot.name = robotData.name
      robot.description = robotData.description
      robot.save(function(saveErr, persistedRobot) {
        if (saveErr){
          const message = "Save Error"
          console.log(message, saveErr, robot)
          res.setHeader('Content-Type', 'application/json')
          res.status(500).json({message: message, robotId: robotId, robotData: robotData})
        } else {
          res.setHeader('Content-Type', 'application/json')
          res.status(200).json({message:"ROBOT UPDATED", robot: persistedRobot})
        }
      })
    }
  })
})

/* DESTROY */

router.delete('/api/robots/:id', function(req, res, next) {
  const robotId = req.params.id;

  Robot.findById(robotId, function(err, robot) {
    if(err){
      const message = "Couldn't Find Robot"
      console.log(message, robotId)
      res.setHeader('Content-Type', 'application/json')
      res.status(404).json({message: message, robotId: robotId})
    } else {
      robot.remove( function(rmErr, rmBot) {
        console.log("RMBOT", rmBot)
        if (rmErr) {
          const message = "Couldn't Destroy Robot"
          console.log(message, robotId)
          res.setHeader('Content-Type', 'application/json')
          res.status(500).json({message: message, robotId: robotId})
        } else {
          const message = "Destroyed Robot"
          console.log(message, robotId)
          res.setHeader('Content-Type', 'application/json')
          res.status(200).json({message: message, robotId: robotId})
        }
      })
    }
  })
})

module.exports = router;
