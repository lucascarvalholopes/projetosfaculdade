//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Lucas de carvalho Lopes
//DATA: 20/05/2023
// Express Framework
const express = require('express');
const app = express();

// Import Controllers
const PontoTuristicoController = require('./app/controllers/PontoTuristicoController');
const pontoturisticoController = new PontoTuristicoController();

// Define json
app.use(express.json());

// Routes
app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

// Pacientes
app.get('/pontoturistico', (req, res) => pontoturisticoController.findAll(req, res));
app.post('/pontoturistico', (req, res) => pontoturisticoController.create(req, res));
app.get('/pontoturistico/:id', (req, res) => pontoturisticoController.findById(req, res));
app.put('/pontoturistico/:id', (req, res) => pontoturisticoController.update(req, res));
