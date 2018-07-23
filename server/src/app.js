const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const path = require('path')
const fs = require('fs')

const app = express()
const server = require('http').Server(app)

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport/passport')
/* app.use('/admin/', require('./routes/admin')) */
fs
  .readdirSync(path.join(__dirname, '/routes'))
  .forEach((file) => {
    app.use(`/${file.slice(0, -3)}`, require(`./routes/${file.slice(0, -3)}`))
  })

// reseta o banco = true
sequelize.sync({force: false})
  .then(() => {
    server.listen(config.port)
    console.log(`Server Start on por ${config.port}`)
  })
