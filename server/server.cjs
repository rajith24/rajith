// Import required modules using ES module syntax
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
var debug = require('debug')('express-react:server');
var http = require('http');
const path = require('path');

dotenv.config();

const app = express();
app.io = require('socket.io')();

const index = require('./index.cjs')(app.io);

// app.use(cors());
// app.use(bodyParser.json());

app.use(cors({ credentials: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build')));
// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));
//API Router into index route
app.use('/api', index);

// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(req.body)
//   // Create a transporter object using your email service's SMTP settings.
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     // host: 'smtp.gmail.com',
//     // port: 465,
//     // secure: true,
//     auth: {
//       user: process.env.EMAIL_ID,
//       pass: process.env.PASSWORD,
//     },
//   });

//   // Email data
//   const mailOptions = {
//     from: `${email}`,
//     to: 'rajithrkbackup@gmail.com',
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   // Send email
//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent');
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Email sending failed' });
//   }
// });

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// const PORT = process.env.PORT || 3001;
var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app); // build http server on top of the express one
app.io.attach(server); // Attach Socket.io to server

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}



function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Event listener for HTTP server "listening" event.
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on('error', onError);
server.on('listening', onListening);