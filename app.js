const express = require('express');
const path = require('path');
const errorHandler = require('./server/services/errorHandler');
const apiRouter = require('./server/routes/api.router');

const app = express();

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
