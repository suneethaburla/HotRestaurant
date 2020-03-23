const express = require('express');

const app = express();

// Add a body parser to grab from the incoming post request, takes the data and attaches that whole data on req.body so we get access on the server side
// Without this, we cant get req.body
// It just means grabbing input from the front end and get access to the backend

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//create a port 
const PORT = 3000;

const routes = require('./routes');
//we did not specify any index.js so by default it is index.js in the routes folder
//when we use app.use, it takes a callback with req, res as parameters

//for every route that hits slash, use these routes

app.use ('/', routes);

//when app is listening to the port console log something
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));