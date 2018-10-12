// Bring in ExpressJS, a npm module for creating a web server! See more -  https://expressjs.com/
const express = require('express');
// We need access to the main express function. We assign it to a constant called app.
const app = express();

// This is the port that we will run our Node.js application on. This will allow people to use it!
const port = 8080;
// Use Node.js path lib. This will make it far easier to ensure your application works cross-platform.
const path = require('path');
// Our routes file we created!
const routes = require('./routes');

// Body Parser parses the body sent in a request! 
// Read more: https://www.npmjs.com/package/body-parser.
const bodyParser = require('body-parser');

// app.use() is middleware. Middleware has access to req, res and next. Read more here - https://expressjs.com/en/guide/using-middleware.html

// Tell express that we have a static location and that it can serve static files!
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({extended: true}));
// Any request received will go through this middleware and find the correct route 
app.use('/', routes);


// Start our server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});