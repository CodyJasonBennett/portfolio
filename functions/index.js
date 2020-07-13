const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

admin.initializeApp();
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: 'https://codyb.co' }));

app.post('/functions/sendMessage', async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    } else if (!message) {
      return res.status(400).json({ error: 'Please enter a message' });
    } else if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }

    await admin.database().ref('/messages').push({ email, message });
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Message rejected' });
  }
});

function sendMail(email, message) {
  const mailOptions = {
    from: `Portfolio <${gmailEmail}>`,
    to: 'hi@codyb.co',
    subject: `New message from ${email}`,
    text: `From: ${email}\n\n${message}`,
  };

  return mailTransport.sendMail(mailOptions);
}

exports.sendMail = functions.database.ref('/messages/{messageID}').onCreate(snapshot => {
  const { email, message } = snapshot.val();

  if (email === 'test@test.test') {
    snapshot.ref.set(null);
  }

  return sendMail(email, message);
});

exports.app = functions.https.onRequest(app);
