var express = require('express');
var path = require('path');

// express middleware
var app = express();

// specify the location of the static files (html, css)
app.use(express.static(path.join(__dirname, "../app/dist")));

// listen in the specified port for requests
app.listen(3000, function() {
  console.log("Form-Submit App: Started listening on port 3000");
})
