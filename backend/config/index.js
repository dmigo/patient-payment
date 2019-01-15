const configuration = {
  sequelize: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}

module.exports = configuration
