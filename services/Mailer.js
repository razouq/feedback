var nodemailer = require('nodemailer');
console.log('hi');
var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ad5bfffec2e0c6",
    pass: "5def4acb236df8"
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  console.log('hiii');
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});