/* eslint-disable no-undef */
const nodemailer = require("nodemailer");

const generateMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ecomm561@gmail.com",
      pass: process.env.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Email content
  const mailOptions = {
    from: "ecomm561@gmail.com",
    to: "19516uttam@gmail.com",
    subject: "Mail from your Developer's Portfolio",
    text: `Dear Uttam
You have recieved a mail from ${email}.
The message is :

${message}.

Thank You,
${name}`,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = generateMail;
