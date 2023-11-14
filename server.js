// const express = require('express');
// const app = express();

// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });



// app.listen(port, () => {
//   console.log(`Le serveur Express écoute sur le port ${port}`);
// });

// module.exports = app; // Exportez l'application pour les tests


const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});

// Define a route to gracefully shut down the server
app.get('/shutdown', (req, res) => {
  console.log('Shutting down the server...');
  res.send('Shutting down the server...');
  server.close(() => {
    console.log('Server is closed.');
  });
});

module.exports = app; // Exportez l'application pour les tests


