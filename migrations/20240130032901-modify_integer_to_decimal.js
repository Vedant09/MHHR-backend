'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Properties', 'bedrooms', {
      type: Sequelize.DECIMAL,
      // allowNull: false
    });

    await queryInterface.changeColumn('Properties', 'bathrooms', {
      type: Sequelize.DECIMAL,
      // allowNull: false
    });

    await queryInterface.changeColumn('Properties', 'rent', {
      type: Sequelize.DECIMAL,
      // allowNull: false
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.changeColumn('Properties', 'bedrooms', {
      type: Sequelize.INTEGER,
      // allowNull: false
    });

    await queryInterface.changeColumn('Properties', 'bathrooms', {
      type: Sequelize.INTEGER,
      // allowNull: false
    });

    await queryInterface.changeColumn('Properties', 'rent', {
      type: Sequelize.INTEGER,
      // allowNull: false
    });
  }
};
