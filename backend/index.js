const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bonjour depuis le serveur de la Chapelle des Conquérants!');
});

async function startServer() {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);
  console.log("La connexion à la base de données MongoDB en mémoire a été établie avec succès");

  app.listen(port, () => {
      console.log(`Le serveur tourne sur le port: ${port}`);
  });
}

startServer();
