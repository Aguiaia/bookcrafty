'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable(
    'endereco',
    {
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
      },
      endereco: {
       type: Sequelize.STRING(199),
       allowNull: false
      },
      numero: {
       type: Sequelize.INTEGER,
       allowNull: false
      },
      complemento: Sequelize.STRING,
      cep: Sequelize.INTEGER,
      uf: Sequelize.STRING(2),
      fk_usuario: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'usuario',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
       }
    }
  )
 },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('endereco');
  }
};
