const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const geoip = require('geoip-lite')

// parse the json that you get
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Dictates what happens when "/" route is requested
app.get("/",function (req, res) {
    res.sendFile(__dirname + "/index.html");
})


// Axios stuff
const API_KEY = '18436a5aee03555399b6774854293b06';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

app.post("/", function (req, res) {
    // Under normal circumstances you would use req.ip to get ip address
    const ip = "24.46.234.95"
    let city = geoip.lookup(ip).city;
    let url = `${ROOT_URL}&q=${city}`
    
    
    async function getWeather() {
        //  let request = await axios.get(url)

        console.log(city)
    }
    getWeather();
})

// setup server on a certain port
app.listen(3000, function() {
    console.log("Server started on port 3000");
});