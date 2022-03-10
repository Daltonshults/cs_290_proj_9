const express = require('express')
const app = express()
const port = 3000

const { categories, manufacturers, motorcycles } = require('./data')

app.use(express.static('public'))

app.get('/categories', (req, res) => res.send(categories))

app.get('/manufacturers', (req, res) => res.send(manufacturers))

app.get('/motorcycles/featured', (req, res) => res.send(motorcycles[Math.floor(Math.random()* motorcycles.length)]))

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
