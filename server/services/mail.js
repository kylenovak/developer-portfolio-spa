const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: config.GMAIL_USER,
    clientId: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    refreshToken: config.REFRESH_TOKEN,
  }
});

module.exports = {
  sendMail: function(email, name, subject, text) {
    let mailOptions = {
      from: config.GMAIL_USER,
      to: config.GMAIL_USER,
      subject: subject,
      text: `From ${name} <${email}>\n\n${text}`
    };
    return transporter.sendMail(mailOptions);
  }
};
