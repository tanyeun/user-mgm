const express = require('express');
const path = require('path');

// This is the root file of the routing structure
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;
const mongoose = require('mongoose'); // DB connection

var mongoDB = 'mongodb://localhost:37017/user-mgm';

mongoose   
  .connect(mongoDB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  })


// Set up views
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'ejs');
// Serving static assets like styles or images
app.use(express.static(path.join(__dirname, './public')));
app.use('/', indexRouter());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})


