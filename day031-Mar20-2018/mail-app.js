//var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'francis.adu.64@gmail.com',
//     pass: 'onlyhim1'
//   }
// });

// var mailOptions = {
//   from: 'francis.adu.64@gmail.com',
//   to: 'francis_adu@@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
var nodemailer = require('nodemailer');
var sendEmail = function(somedata){
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL, 
                  // you can try with TLS, but port is then 587
    auth: {
      user: 'francis.adu.64@gmail.com', // Your email id
      pass: 'onlyhim1' // Your password
    }
  };

  var transporter = nodemailer.createTransport(smtpConfig);
  // replace hardcoded options with data passed (somedata)
  var mailOptions = {
    from: 'francis.adu.64@gmail.com', // sender address
    to: 'francis_adu@yahoo.com', // list of receivers
    subject: 'Test email', // Subject line
    text: 'this is some text', //, // plaintext body
    html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return false;
    }else{
      console.log('Message sent: ' + info.response);
      return true;
    };
  });
}

exports.contact = function(req, res){
   // call sendEmail function and do something with it
   sendEmail(somedata);
}