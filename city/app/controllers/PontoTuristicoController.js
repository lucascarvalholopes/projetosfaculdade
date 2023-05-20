// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de Carvalho Lopes
// DATA: 20/05/2023

const { PontoTuristico, Avaliacao } = require('../models');

class PontoTuristicoController {
// Encontra e retorna todos os pontos turísticos
async findAll(req, res) {
const pontosTuristicos = await PontoTuristico.findAll({ include: { model: Avaliacao, as: 'avaliacoes' } });
res.json(pontosTuristicos);
}

// Cria um novo ponto turístico
async create(req, res) {
const pontoTuristico = await PontoTuristico.create(req.body);
res.status(201).json(pontoTuristico);
}

// Encontra e retorna um ponto turístico pelo seu ID
async findById(req, res) {
const pontoTuristico = await PontoTuristico.findByPk(req.params.id, { include: { model: Avaliacao, as: 'avaliacoes' } });
if (!pontoTuristico) {
return res.status(404).json({ error: 'Ponto turístico not found' });
}
res.json(pontoTuristico);
}

// Atualiza um ponto turístico existente
async update(req, res) {
const [updated] = await PontoTuristico.update(req.body, { where: { id: req.params.id } });
if (!updated) {
return res.status(404).json({ error: 'Ponto turístico not found' });
}
const pontoTuristico = await PontoTuristico.findByPk(req.params.id);
res.json(pontoTuristico);
}

// Exclui um ponto turístico
async delete(req, res) {
const deleted = await PontoTuristico.destroy({ where: { id: req.params.id } });
if (!deleted) {
return res.status(404).json({ error: 'Ponto turístico not found' });
}
res.status(204).json();
}
}

module.exports = PontoTuristicoController;