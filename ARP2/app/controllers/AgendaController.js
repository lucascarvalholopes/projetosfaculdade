//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Lucas de carvalho Lopes
//DATA: 20/05/2023
 
const { agenda } = require('../models');

class AgendaController {
  constructor() {
    // Inicialize as propriedades da classe, se necessário
  }

  async findAll(req, res) {
    try {
      const agendas = await Agenda.findAll();
      res.status(200).json(agendas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;
      const agenda = await Agenda.findByPk(id);

      if (agenda) {
        res.status(200).json(agenda);
      } else {
        res.status(404).json({ error: 'Agenda not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const newAgenda = await Agenda.create(req.body);
      res.status(201).json(newAgenda);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const [updatedRows] = await Agenda.update(req.body, {
        where: { id },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'Agenda updated successfully' });
      } else {
        res.status(404).json({ error: 'Agenda not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRows = await Agenda.destroy({
        where: { id },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'Agenda deleted successfully' });
      } else {
        res.status(404).json({ error: 'Agenda not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = AgendaController;