const express = require('express');
const path = require('path');

// This is the root file of the routing structure
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

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
