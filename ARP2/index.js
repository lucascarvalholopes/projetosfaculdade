// Express Framework
const express = require('express');
const app = express();

// Import Controllers
const PacienteController = require('./app/controllers/PacienteController');
const pacienteController = new PacienteController();

// Define json
app.use(express.json());

// Routes
app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

// Pacientes
app.get('/paciente', (req, res) => pacienteController.findAll(req, res));
app.post('/paciente', (req, res) => pacienteController.create(req, res));
app.get('/paciente/:id', (req, res) => pacienteController.findById(req, res));
app.put('/paciente/:id', (req, res) => pacienteController.update(req, res));
