const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
require('dotenv').config({ path: __dirname + '/.env' });
const http = require('http');
const routes = require('./routes');
const app = express();
const server = http.Server(app);

mongoose.connect(process.env.MONGO_URL);

const connectedUsers = {};

app.use((req, res, next) => {
  req.connectedUsers = connectedUsers;
  next();
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.get('/', (req, res) => {
  res.json({ app: 'User API by Marcelo', version: '1.2', beta: true });
});

// Endpoint para apagar todos os documentos da coleção users
app.delete('/users', async (req, res) => {
  try {
    await mongoose.connection.db.collection('users').deleteMany({});
    res.status(200).send('All users deleted');
  } catch (err) {
    res.status(500).send('Error deleting users');
  }
});

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});