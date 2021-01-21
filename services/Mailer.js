const nodemailer = require("nodemailer");
console.log('hi');
class Mailer {
  constructor({ subject, recipient }, content) {
    const mailOptions = {
      from: "no-reply@gmail.com",
      to: recipient,
      subject,
      html: content,
    };
    this.mailOptions = mailOptions;

    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ad5bfffec2e0c6",
        pass: "5def4acb236df8",
      },
    });
    this.transporter = transporter;
  }

  send() {
    this.transporter.sendMail(this.mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

module.exports = Mailer;
