'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.cre ateTable('users', { id: Sequelize.INTEGER });
     */

    // Adding 'homeType' ENUM column
    await queryInterface.addColumn('Properties', 'houseType', {
      type: Sequelize.ENUM('apartment', 'single_family', 'condo', 'town_house'),
      // allowNull: false // or true, based on your requirements
    });

    // Adding 'availability' ENUM column
    await queryInterface.addColumn('Properties', 'availability', {
      type: Sequelize.ENUM('available', 'unavailable', 'coming_soon'),
      // allowNull: false // or true, based on your requirements
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('Properties', 'homeType');

    // Sequelize does not directly support removing ENUM types in migrations since it requires more complex operations (like removing the ENUM type after ensuring no column uses it).
    // However, you can remove the 'availability' column directly. Handling the ENUM type cleanup might require raw SQL or manual intervention depending on your DB.
    await queryInterface.removeColumn('Properties', 'availability');

    // If you want to clean up the ENUM types, you might need to execute raw SQL queries depending on your database, for example:
    // await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_YourTableName_homeType";');
    // await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_YourTableName_availability";');
  }
};
