const express = require('express');

const app = express();

// dictates what happens when "/" route is requested
app.get("/",function (req, res) {
    res.send("<p>hello world</p>");
})

app.get("/about", function (req, res) {
  res.send("Hi I love booty")  
})
// setup server on a certain port
app.listen(3000, function() {
    console.log("Server started on port 3000");
});