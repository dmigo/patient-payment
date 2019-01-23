const express = require('express')
const asyncHandler = require('express-async-handler')

const port = process.env.PORT || 3000
const app = express()

const ProvidersController = require('./providers')
const { errorHandler } = require('./errors')

app.get(
  '/providers',
  asyncHandler(async (req, res, next) => {
    const providers = await ProvidersController.find(req.query)
    res.json(providers)
  })
)

app.use(errorHandler)

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
})
