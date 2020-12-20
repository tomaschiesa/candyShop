'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
      {
        id:77,
        email: "admin@consekcomp.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'Tres de Febrero',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Consek Comp",
        business_name: "Consek Comp",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "logocandy.svg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:78,
        email: "usuario@consekcomp.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'Tres de Febrero',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Consek Comp",
        business_name: "Consek Comp",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "logocandy.svg",
        admin: "0",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:79,
        email: "suspendido@consekcomp.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'Tres de Febrero',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Consek Comp",
        business_name: "Consek Comp",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "logocandy.svg",
        admin: "0",
        active: "0",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
