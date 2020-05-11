'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('usuario', [
    {
      nome: 'David',
      email: 'david@facebook.com',
      senha: bcrypt.hashSync('123456', 10)
    },
    {
      nome: 'Aguiaia',
      email: 'aguiaia@facebook.com',
      senha: bcrypt.hashSync('147852', 10)
    },
    {
      nome: 'Paula',
      email: 'paula@facebook.com',
      senha: bcrypt.hashSync('369852', 10)
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('usuario', null, {});
  }
};
