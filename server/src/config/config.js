module.exports = {
  port: process.env.PORT || 2000,
  db: {
    database: process.env.DB_NAME || 'trinity',
    user: 'postgres',
    password: 'root',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      storage: './safe.postgres',
      logging: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
