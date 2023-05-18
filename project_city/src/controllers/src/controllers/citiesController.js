// controllers/citiesController.js

const cities = require('../models/cities')

function listCities(req, res) {
  const projectCities = cities.filter(city => city.projectRelated)
  res.json(projectCities)
}

function getCityById(req, res) {
  const id = parseInt(req.params.id)
  const city = cities.find(city => city.id === id)
  if (!city) {
    return res.status(404).json({ error: 'City not found' })
  }
  res.json(city)
}

function addCity(req, res) {
  const city = req.body
  cities.push(city)
  res.json({ inputs: city })
}

function updateCity(req, res) {
  const id = parseInt(req.params.id)
  const city = req.body
  const index = cities.findIndex(city => city.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'City not found' })
  }
  cities[index] = { ...city, id }
  res.json({ inputs: cities[index] })
}

function deleteCity(req, res) {
  const id = parseInt(req.params.id)
  const index = cities.findIndex(city => city.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'City not found' })
  }
  const city = cities.splice(index, 1)
  res.json({ inputs: city[0] })
}

module.exports = {
  listCities,
  getCityById,
  addCity,
  updateCity,
  deleteCity,
}
