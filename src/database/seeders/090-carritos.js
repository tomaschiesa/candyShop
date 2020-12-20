'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('purchases', [
      {
        user_id: "7",
        product_id: "4",
        quantity: "5",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "7",
        product_id: "8",
        quantity: "9",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "7",
        product_id: "6",
        quantity: "2",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: "77",
        product_id: "4",
        quantity: "5",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "77",
        product_id: "8",
        quantity: "9",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "77",
        product_id: "7",
        quantity: "2",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: "78",
        product_id: "4",
        quantity: "5",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "78",
        product_id: "8",
        quantity: "9",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "78",
        product_id: "10",
        quantity: "5",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: "79",
        product_id: "4",
        quantity: "5",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "79",
        product_id: "8",
        quantity: "9",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "79",
        product_id: "6",
        quantity: "2",
        created_at: new Date(),
        updated_at: new Date()
      }      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('purchases', null, {})
  }
};