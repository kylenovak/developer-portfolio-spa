const mail = require('./mail');
const config = require('../config');

function internalErrorHandler(err, req, res, next) {
  const email = config.GMAIL_USER;
  const name = 'Internal Error Handler';
  const subject = 'Error Status 500';
  const text = JSON.stringify(err, Object.getOwnPropertyNames(err));
  
  // Send an email about the error
  mail.sendMail(email, name, subject, text)
    .then(() => {
      res.send('Internal Server Error; something went wrong.')
    })
    .catch((err) => {
      console.error(err);
      // Delegate to Express internal error handler
      next(err);
    });
}

module.exports = internalErrorHandler;
