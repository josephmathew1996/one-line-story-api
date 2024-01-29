'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     // Create the 'players' table
     await queryInterface.createTable('players', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Add other columns as needed
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

     // Insert some initial data into the 'players' table
     await queryInterface.bulkInsert('players', [
      {
        username: 'Maya',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Chris',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Alex',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   // Remove the 'players' table if needed
   await queryInterface.dropTable('players');
  }
};
