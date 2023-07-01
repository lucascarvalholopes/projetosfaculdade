// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de carvalho lOPES
// DATA: 01/07/2023

// app.js
const express = require('express');
const app = express();
const UserController = require('./controllers/UserController');

app.use(express.json());

app.post('/login', UserController.login);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000...');
});
