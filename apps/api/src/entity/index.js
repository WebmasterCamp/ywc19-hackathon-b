'use strict'

const { logger } = require('../utils')
const Sequelize = require('sequelize')
const config = require('../../config/sequelizeConfig')
const TbUser = require('./TbUser')

const sequelize = new Sequelize(config.database, config.username, config.password, config)

sequelize
  .authenticate()
  .then(() => {
    logger.info(`Successful, connect to database ${config.host}`)
  })
  .catch(() => {
    logger.error(`Failed, connect to database ${config.host}`)
    process.exit()
  })

const entity = {
  seq: sequelize,
  Seq: Sequelize,
  // tb_user: TbUser(sequelize, Sequelize.DataTypes),
}

module.exports = entity
