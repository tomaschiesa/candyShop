'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
      {
        id:7,
        email: "tomas@consekcomp.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Buenos Aires 3653",
        location: "Tres de Febrero",
        municipality: 'Ciudadela',
        province: "06",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "ConsekComp",
        business_name: "Chiesa, José Tomás",
        cuit: "20315766045",
        fiscal_condition_id: 5,
        image: "tomas@consekcomp.com.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
