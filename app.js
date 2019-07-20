const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse the json that you get!
app.use(bodyParser.json())
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

// Dictates what happens when "/" route gets requested
app.get("/", function (req, res) {
    res.render('main');
});


// Axios stuff
const API_KEY = '18436a5aee03555399b6774854293b06';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

app.post("/", function (req, res) {
    // Under normal circumstances you would use req.ip to get ip address
    let url = `${ROOT_URL}&q=bronx,us`


    async function getWeather() {
        let request = await axios.get(url)

        console.log(request);
    }
    getWeather();
    // The output weather data goes somewhere here
})

// setup server on a certain port
app.listen(3000, function() {
    console.log("Server started on port 3000");
});