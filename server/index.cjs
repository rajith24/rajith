var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)
    // Create a transporter object using your email service's SMTP settings.
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      // host: 'smtp.gmail.com',
      // port: 465,
      // secure: true,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.PASSWORD,
      },
    });
  
    // Email data
    const mailOptions = {
      from: `${email}`,
      to: 'rajithrkbackup@gmail.com',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Email sending failed' });
    }
  });

module.exports = router;
module.exports = function (io) {
return router;
};


