var express = require('express');
var router = express.Router();

var robots = [
    {
        id: 1,
        name:"c3po",
        description:"specializes in language translation",
        created_at: new Date("1976-06-06 13:23:23"),
        updated_at: new Date("1976-06-06 13:23:23") }
    ,
    {
        id: 2,
        name:"r2d2",
        description:"holds a secret message",
        created_at: new Date("1977-07-07 23:10:10"),
        updated_at: new Date("1977-07-07 23:10:10")
    },
    {
        id: 3,
        name:"bb8",
        description:"rolls around",
        created_at: new Date("2016-01-01 07:59:59"),
        updated_at: new Date("2016-01-01 07:59:59")
    },
]; // temporary data

/* List Robots (GET) */

router.get('/api/robots.json', function(req, res, next) {
  console.log("LIST ROBOTS")
  res.send(robots);
});

/* Show Robot (GET) */

router.get('/api/robots/:id.json', function(req, res, next) {
  const robotId = req.params.id;
  console.log("SHOW ROBOT:", robotId)
  const robot = robots.find(function(robot){ return robot.id == robotId})
  res.send(robot);
});

module.exports = router;
