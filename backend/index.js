const express = require('express')

const port = process.env.PORT || 3000
const app = express()

const ProvidersController = require('./providers')

app.get('/providers', async (req, res) => {
  const providers = await ProvidersController.find(req.query)
  res.json(providers)
})

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
})
