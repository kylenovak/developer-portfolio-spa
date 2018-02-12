const express = require('express');
const mail = require('../services/mail');
const bodyParser = require('body-parser');
const formService = require('../../src/services/formService');

const mailRouter = express.Router();

mailRouter.use(bodyParser.json());

mailRouter.post('/contact', (req, res, next) => {
  const formFields = req.body;

  const name = formFields.name.value;
  const email = formFields.email.value;
  const subject = formFields.subject.value;
  const message = formFields.message.value;

  if (formService.isValidText(name) &&
      formService.isValidEmail(email) &&
      formService.isValidText(subject) &&
      formService.isValidText(message))
      {
        mail.sendMail(email, name, subject, message)
          .then(() => {
            res.json({
              success: true,
              message: "Your message was sent successfully!"
            });
          })
          .catch((err) => {
            console.error(err);
            res.json({
              success: false,
              message: "Something went wrong, please try again."
            });
          });
      }
      else {
        res.json({
          success: false,
          message: "Invalid form input. Please fill out the form."
        });
      }
});

module.exports = mailRouter;
