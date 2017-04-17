var express = require('express');
var router = express.Router();
var Robot = require("../../models/robot");

router.use(function(req, res, next) {
  //
  // HANDLE PRE-FLIGHT REQUESTS
  // source: http://stackoverflow.com/a/7069902/670433
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  // APPLY COMMON HEADERS
  //res.header('Content-Type', 'application/json')

  next()
})

// adapted from source: https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
function findRobot(req, res, next) {
  console.log("REQUEST PARAMS", req.params)
  const robotId = req.params.id

  Robot.findById(robotId, function(err, robot) {
    if (err){
      const errorMessage = `COULDN'T FIND ROBOT ${robotId}. ENSURE YOU ARE SPECIFYING A VALID IDENTIFIER.`
      console.error(errorMessage)
      return res.status(404).json({message: errorMessage, robotId: robotId})
    } else {
      console.log("ROBOT FOUND.", robot)
      req.robot = robot // attach to the request object for further use
      next() // yeild to the next middleware function
    }
  })
}

function parseRobotData(requestBody) {
  console.log("REQUEST BODY", requestBody)
 return {name: requestBody.name, description: requestBody.description, in_stock: requestBody.in_stock}
}

/* LIST */

router.get('/api/robots', function(req, res) {
  Robot.find( function (err, robots) {
    if (err) {
      console.log(err)
      res.status(500).json("COULDN'T LIST ROBOTS.")
    } else {
      console.log("LIST", robots.length, "ROBOTS")
      res.status(200).json(robots.reverse())
    }
  })
})

/* CREATE */

router.post('/api/robots', function(req, res) {
  const robotData = parseRobotData(req.body)

  var robot = new Robot(robotData)
  robot.save(function(saveErr, persistedRobot) {
    if (saveErr){
      res.status(400).json({message: saveErr, robotData: robotData})
    } else {
      res.status(201).json({message:"ROBOT CREATED", robot: persistedRobot})
    }
  })
})

/* SHOW */

router.get('/api/robots/:id', findRobot, function(req, res) {
  res.status(200).json(req.robot)
})

/* UPDATE */

router.put('/api/robots/:id', findRobot, function(req, res) {
  console.log("REQUEST BODY", req.body)
  const robotId = req.params.id
  const robotData = parseRobotData(req.body)
  const robot = req.robot

  robot.name = robotData.name
  robot.description = robotData.description
  robot.in_stock = robotData.in_stock

  robot.save(function(saveErr, persistedRobot) {
    if (saveErr){
      const message = "COULDN'T UPDATE ROBOT."
      console.log(message, saveErr, robot)
      res.status(400).json({message: message, robotId: robotId, robotData: robotData})
    } else {
      res.status(200).json({message:"ROBOT UPDATED.", robot: persistedRobot})
    }
  })
})

/* DESTROY */

router.delete('/api/robots/:id', findRobot, function(req, res) {
  const robotId = req.params.id
  const robot = req.robot

  robot.remove( function(removalError, removedRobot) {
    if (removalError) {
      const message = "COULDN'T DESTROY ROBOT."
      console.log(message, robotId)
      res.status(500).json({message: message, robotId: robotId})
    } else {
      const message = "ROBOT DESTROYED."
      console.log(message, robotId)
      res.status(200).json({message: message, robotId: robotId})
    }
  })
})

module.exports = router;
