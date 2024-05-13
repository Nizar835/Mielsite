const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mielmieleux@gmail.com', // Remplacez par votre adresse e-mail
      pass: 'jul83500_', // Remplacez par votre mot de passe
    },
  });

  const mailOptions = {
    from: 'mielmieleux@gmail.com', // Remplacez par votre adresse e-mail
    to: 'mielmieleux@gmail.com', // Remplacez par l'adresse e-mail du destinataire
    subject: `Nouveau message de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.status(200).send('Votre message a été envoyé avec succès.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
