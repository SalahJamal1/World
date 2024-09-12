const nodemailer = require("nodemailer");
const pug = require("pug");
const { htmlToText } = require("html-to-text");
exports.AppEmail = class AppEmail {
  constructor(user, url) {
    this.user = user;
    this.url = url;
  }

  creatTransport() {
    return nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "99ed93ce164615",
        pass: "d720fe6e782fd0",
      },
    });
  }
  sendEmail(subject, temp) {
    const html = pug.renderFile(`${__dirname}/../view/email/${temp}.pug`, {
      firstName: this.user.name,
      url: this.url,
    });
    const mailOption = {
      from: "Gm <salah@altamimi.com>",
      to: this.user.email,
      subject,
      html,
      text: htmlToText(html),
    };
    this.creatTransport().sendMail(mailOption);
  }
  sendWelcome() {
    this.sendEmail("Welcome to Natours, we are glad to have you", "welcome");
  }
  sendReset() {
    this.sendEmail("forgot password will expier after 10m", "passwordReset");
  }
};
