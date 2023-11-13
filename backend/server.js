const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});

module.exports = app; // Exportez l'application pour les tests
