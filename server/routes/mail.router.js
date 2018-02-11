const express = require('express');
const mail = require('../services/mail');

const mailRouter = express.Router();

mailRouter.post('/api/mail', (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const subject = req.body.subject;
  const text = req.body.text;

  console.log(req.body);

  mail.sendMail(email, name, subject, text)
    .then(() => {
      res.json({success: true});
    })
    .catch((err) => {
      console.error(err);
      res.json({success: false});
    });
});

module.exports = mailRouter;
