//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Lucas de carvalho Lopes
//DATA: 20/05/2023
const { Paciente, Item } = require('../models');

class PacienteController {
  // Encontra e retorna todos os pacientes
  async findAll(req, res) {
    const patients = await Paciente.findAll({ include: { model: Item, as: 'items' } });
    res.json(patients);
  }

  // Cria um novo paciente
  async create(req, res) {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  }

  // Encontra e retorna um paciente pelo seu ID
  async findById(req, res) {
    const paciente = await Paciente.findByPk(req.params.id, { include: { model: Item, as: 'items' } });
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    res.json(paciente);
  }

  // Atualiza um paciente existente
  async update(req, res) {
    const [updated] = await Paciente.update(req.body, { where: { id: req.params.id } });
    if (!updated) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    const paciente = await Paciente.findByPk(req.params.id);
    res.json(paciente);
  }

  // Exclui um paciente
  async delete(req, res) {
    const deleted = await Paciente.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    res.status(204).json();
  }
}

module.exports = PacienteController;
