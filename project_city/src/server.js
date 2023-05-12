const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

const cities = [
  { id: 1, name: 'São Paulo', projectRelated: true },
  { id: 2, name: 'Rio de Janeiro', projectRelated: true },
]

app.get('/', (req, res) => {
  res.redirect('/cities')
})

app.get('/cities', (req, res) => {
  const projectCities = cities.filter(city => city.projectRelated)
  res.json(projectCities)
})

app.get('/cities/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const city = cities.find(city => city.id === id)
  if (!city) {
    return res.status(404).json({ error: 'City not found' })
  }
  res.json(city)
})

app.post('/cities', (req, res) => {
  const city = req.body
  cities.push(city)
  res.json({ inputs: city })
})

app.put('/cities/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const city = req.body
  const index = cities.findIndex(city => city.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'City not found' })
  }
  cities[index] = { ...city, id }
  res.json({ inputs: cities[index] })
})

app.delete('/cities/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = cities.findIndex(city => city.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'City not found' })
  }
  const city = cities.splice(index, 1)
  res.json({ inputs: city[0] })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
