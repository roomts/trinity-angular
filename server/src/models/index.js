const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

const blacklist = ['index.js', 'comments', 'posts']

fs
  .readdirSync(__dirname)
  .filter(file => !blacklist.includes(file))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

const folder = [
  path.join(__dirname, 'comments'), path.join(__dirname, 'posts')
]

folder.forEach(element => {
  fs
    .readdirSync(element)
    .forEach((file) => {
      const model = sequelize.import(path.join(element, file))
      db[model.name] = model
    })
})

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
