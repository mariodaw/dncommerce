'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
      firstName: 'John',
      lastName: 'Kent',
      email: 'super@gmail.com',
      password:'tuma123',
      birth:'2004-03-16',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
