const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// parse the json that you get
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Dictates what happens when "/" route is requested
app.get("/",function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

// Axios stuff
const API_KEY = '18436a5aee03555399b6774854293b06';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


app.post("/", function (req, res) {
    async function getWeather() {
        let request = await axios.get(`https://dog.ceo/api/breeds/list/all`)

        console.log(request)
    }
    getWeather();
})

// setup server on a certain port
app.listen(3000, function() {
    console.log("Server started on port 3000");
});