const express = require('express')

const port = process.env.PORT || 3000
const app = express()

const ProvidersController = require('./controllers/providers')

app.get('/providers', async (req, res) => {
  console.log(req.query)
  const providers = await ProvidersController.find('CA', 20)
  res.json(providers)
})

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
})
