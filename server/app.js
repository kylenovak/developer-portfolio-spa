const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorHandler = require('./services/errorHandler');
const apiRouter = require('./routes/api.router');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

// Handle API requests
app.use('/api', apiRouter);

// Send the app/index on non API requests
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handler
app.use(errorHandler);

module.exports = app;
