'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('moneys_publish', [
      {
        id: 1,
        name: "PESO ARGENTINO",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: "DOLAR OFICIAL",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: "DOLAR BLUE",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('moneys_publish', null, {})
  }
};