//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Lucas de carvalho Lopes
//DATA: 20/05/2023
 
const { city } = require('../models');

class CityController {
  constructor() {
    // Inicialize as propriedades da classe, se necessário
  }

  async findAll(req, res) {
    try {
      const citys = await City.findAll();
      res.status(200).json(citys);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;
      const city = await  City.findByPk(id);

      if (city) {
        res.status(200).json(city);
      } else {
        res.status(404).json({ error: 'City not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const newCity = await City.create(req.body);
      res.status(201).json(newCity);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const [updatedRows] = await City.update(req.body, {
        where: { id },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'City updated successfully' });
      } else {
        res.status(404).json({ error: 'City not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRows = await City.destroy({
        where: { id },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'City deleted successfully' });
      } else {
        res.status(404).json({ error: 'City not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = CityController;