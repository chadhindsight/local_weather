const express = require('express');

const app = express();

// dictates what happens when "/" route is requested
app.get("/",function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

// setup server on a certain port
app.listen(3000, function() {
    console.log("Server started on port 3000");
});