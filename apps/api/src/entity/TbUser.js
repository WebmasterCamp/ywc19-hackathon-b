'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class TbUser extends Model {
    static associate(_models) {}
  }
  TbUser.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      employee_id: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      username: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      first_name: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      last_name: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      role_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      update_by: {
        type: DataTypes.INTEGER
      },
      update_date: {
        type: DataTypes.DATE
      },
      create_by: {
        type: DataTypes.INTEGER
      },
      create_date: {
        type: DataTypes.DATE
      },
      is_delete: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER
      },
      delete_date: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      timestamps: false,
      tableName: 'tb_user'
    }
  )
  return TbUser
}
