//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação web
//Dev:Lucas de Carvalho Lopes
//DATA:12/05/2023
// Importando o framework Express
const express = require('express')

// Instanciando a aplicação Express
const app = express()

// Definindo a porta onde a aplicação irá rodar
const port = 8080

// Configurando a aplicação para usar o middleware express.json() para tratar requisições com corpo em JSON
app.use(express.json())

// Criando uma lista de cidades (poderia ser conectado a um banco de dados ou outro recurso de armazenamento)
const cities = [
  { id: 1, name: 'São Paulo', projectRelated: true },
  { id: 2, name: 'Rio de Janeiro', projectRelated: true },
]

// Rota para redirecionar a página principal para a rota de cidades
app.get('/', (req, res) => {
  res.redirect('/cities')
})

// Rota para listar as cidades relacionadas a um projeto
app.get('/cities', (req, res) => {
  const projectCities = cities.filter(city => city.projectRelated)
  res.json(projectCities)
})

// Rota para exibir uma cidade específica pelo ID
app.get('/cities/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const city = cities.find(city => city.id === id)
  if (!city) {
    return res.status(404).json({ error: 'City not found' })
  }
  res.json(city)
})

// Rota para adicionar uma cidade à lista
app.post('/cities', (req, res) => {
  const city = req.body
  cities.push(city)
  res.json({ inputs: city })
})

// Rota para atualizar uma cidade na lista pelo ID
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

// Rota para remover uma cidade da lista pelo ID
app.delete('/cities/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = cities.findIndex(city => city.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'City not found' })
  }
  const city = cities.splice(index, 1)
  res.json({ inputs: city[0] })
})

// Iniciando o servidor na porta definida anteriormente
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
