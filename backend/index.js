const express = require('express')

const port = process.env.PORT || 3000
const app = express()

const { sequelize, Sequelize } = require('./models')
const ProviderModel = require('./models/provider')(sequelize, Sequelize)
const ProvidersSvc = require('./services/providers')(ProviderModel)

app.get('/providers', async (req, res) => {
  console.log(req.query)
  const providers = await ProvidersSvc.find('CA', 20)
  res.json(providers)
})

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
})
