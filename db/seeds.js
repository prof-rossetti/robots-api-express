var db = require("../db"); // starts a mongoose connection
var Robot = require("../models/robot");

var exampleRobots = [
  {name:"c3po", description:"specializes in language translation"},
  {name:"r2d2", description:"holds a secret message"},
  {name:"bb8",  description:"rolls around"}
];

// Find all the robots.

Robot.find(function (err, robots) {
  if (err) return console.error(err);
  console.log("FOUND", robots.length, "ROBOTS TO BE DELETED")

  // Delete all the robots.

  Robot.remove(robots, function (err) {
    if (err) return console.error(err);
    console.log("DELETED")

    // Create all the robots.

    Robot.create(exampleRobots, function (err, newBots) {
      console.log(newBots)
      db.disconnect(); // close the connection, else it will keep running, which is appropriate for when the web server runs, but not for a script like this.
    });
  });
});
