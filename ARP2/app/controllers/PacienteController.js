const { Paciente, Item } = require('../models');

class PacienteController {

  async findAll(req, res) {
    const patients = await Paciente.findAll({ include: { model: Item, as: 'items' } });
    res.json(patients);
  }

  async create(req, res) {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  }

  async findById(req, res) {
    const paciente = await Paciente.findByPk(req.params.id, { include: { model: Item, as: 'items' } });
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    res.json(paciente);
  }

  async update(req, res) {
    const [updated] = await Paciente.update(req.body, { where: { id: req.params.id } });
    if (!updated) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    const paciente = await Paciente.findByPk(req.params.id);
    res.json(paciente);
  }

  async delete(req, res) {
    const deleted = await Paciente.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    res.status(204).json();
  }
}

module.exports = PacienteController;
