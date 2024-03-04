/* eslint-disable no-undef */
import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const generateMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
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
  await transporter.sendMail(mailOptions);
};

export default generateMail;
