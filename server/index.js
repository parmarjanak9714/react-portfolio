// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// frontend origin (vite default 5173). अगर frontend अलग पोर्ट पर है तो बदल देना.
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => res.send("Server running"));

// POST /send -> receive contact form and send email
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  // Check env vars before trying to send
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      success: false,
      message: "Server config error: EMAIL_USER or EMAIL_PASS missing in .env",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // optional verify - helps debug auth issues
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,       // receive in same gmail (or change to RECEIVER_EMAIL)
      replyTo: email,
      subject: `New message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h3>New message from portfolio</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return res.status(200).json({ success: true, message: "Message sent" });
  } catch (err) {
    console.error("Send error:", err);
    return res.status(500).json({ success: false, message: "Failed to send message", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
