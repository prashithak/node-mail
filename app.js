const express=require('express');
var nodemailer = require('nodemailer');
const dotenv=require('dotenv');
dotenv.config();


var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.email",
  port: 587,
  secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PWD,
    }
  });
  
  var mailOptions = {
    from: 'prashithak@gmail.com',
    to: 'sibigomas@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successfully');
    }
  });