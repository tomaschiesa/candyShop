'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      adress:{
        type: Sequelize.DataTypes.STRING(100)
      },
      location: {
        type: Sequelize.DataTypes.STRING(100)
      },
      municipality: {
        type: Sequelize.DataTypes.STRING(100)
      },
      province: {
        type: Sequelize.DataTypes.STRING(100)
      },
      postal_code: {
        type: Sequelize.DataTypes.INTEGER(11)
      },
      telephone: {
        type: Sequelize.DataTypes.STRING(100)
      },
      name_fantasy:{
        type: Sequelize.DataTypes.STRING(100)
      },
      business_name:{
        type: Sequelize.DataTypes.STRING(100)
      },
      cuit:{
        type: Sequelize.DataTypes.STRING(80)
      },
      fiscal_condition_id:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
          model: 'fiscals_conditions',
          key: 'id'
        }
      },
      image:{
        type: Sequelize.DataTypes.STRING(100)
      },
      admin:{
        type: Sequelize.DataTypes.BOOLEAN(1),
        allowNull: false
      },
      active:{
        type: Sequelize.DataTypes.BOOLEAN(1),
        allowNull: false
      },
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};