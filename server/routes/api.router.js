const express = require('express');
const mailRouter = require('./mail.router');

const apiRouter = express.Router();

apiRouter.use('/mail', mailRouter);

module.exports = apiRouter;
