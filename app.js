const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse the json that you get
app.use(bodyParser.json())
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

// Dictates what the response is when "/" route gets requested
app.get("/", function (req, res) {
    res.render('main');
});


// Axios stuff
const API_KEY = '18436a5aee03555399b6774854293b06';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

app.post("/", function (req, res) {
    // Under normal circumstances you would use req.ip to get ip address, but here it is localhost
    let url = `${ROOT_URL}&q=bronx,us`

    async function getWeather() {
        let request = await axios.get(url).then(resp => {
           let d = JSON.stringify(resp.data.list[0].weather)
            let forecast = JSON.parse(d);
            
            for (var i = 0; i < forecast.length; i++) {
                const weather = forecast[i]['main'];
                const temperature = resp.data.list[0].main.temp;

                let celsius = Math.round(temperature - 273.15);
                let fahrenheit = Math.round((temperature - 273.15) * 1.8 + 32);
                // Render view and sends the relevant info and template to the client
                res.render("forecast", { weather, temperature });
            }

        });        
    }

    getWeather();
})
// Setup server on a certain port
app.listen(3000, function() {
    console.log("Server started on port 3000!");
});
// maybe use .catch for error handling
// if you try to log raw JSON response from API it shows undefined so you gott parse it