const nodemailer = require("nodemailer");
console.log('hi');
class Mailer {
  constructor({ subject, recipients }, content) {
    const mailOptions = {
      from: "no-reply@gmail.com",
      to: this.formatAddresses(recipients),
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

  formatAddresses(recipients) {
    let formattedRecipients = '';
    recipients.forEach(r => formattedRecipients += `, ${r.email}`);
    return formattedRecipients;
  }

  async send() {
    this.transporter.sendMail(this.mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

/**
 * test send mail to many users
 */
const mail = new Mailer({subject: 'subject', recipients: [{email: "anass@gmail.com"}, {email: "bendarsi@gmail.com"}]}, '<div>hi</div>');
mail.send();
