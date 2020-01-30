/*jshint esversion: 8 */

const app = require('./app');

// Setup server on a certain port
app.listen(8000, function () {
    console.log("Server started on port 8000!");
});