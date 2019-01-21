'use strict'

const path = require('path')
const Sequelize = require('sequelize')
const config = require('../../config').sequelize
const db = {}

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
