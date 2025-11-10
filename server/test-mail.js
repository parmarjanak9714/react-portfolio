// server/test-mail.js
require("dotenv").config();
const nodemailer = require("nodemailer");

async function test() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.verify();
    console.log("SMTP OK - ready to send");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nodemailer test",
      text: "This is a test email",
    });
    console.log("Sent:", info.messageId);
  } catch (e) {
    console.error("Test error:", e);
  }
}
test();
