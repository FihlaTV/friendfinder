// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// You should save the data in your app as an array of objects. Each of these objects should roughly follow the format below.

/*You should save the data in your app as an array of objects. Each of these objects should roughly follow the format below.

{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
*/

// LOAD DATA
var friendsData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    //get array of friends array first to do the calc
    res.json(friendsData);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    res.json("you have sent to the friends api");
    //logic of match making
  }); 
};
