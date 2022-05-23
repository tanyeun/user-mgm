const express = require('express');
const path = require('path');
const config = require('./config');

// This is the root file of the routing structure
const indexRouter = require('./routes/index');

const app = express();
const mongoose = require('mongoose'); // DB connection
const { logger }  = config;

const dsn = config.database.addr+':'+config.database.port+'/'+config.database.name;
mongoose   
  .connect(dsn)
  .then(() => {
    logger.info(`MongoDB connected on port ${config.database.port}`);
  })
  .catch((error) => {
    logger.fatal(error);
  })


// Set up views
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'ejs');
// Serving static assets like styles or images
app.use(express.static(path.join(__dirname, './public')));
app.use('/', indexRouter());

app.listen(config.port, () => {
  logger.info(`Express server listening on port ${config.port}`)
})


