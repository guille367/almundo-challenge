'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HotelAmenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Hotels",
          key: "id"
        }
      },
      amenity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Amenities",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HotelAmenities');
  }
};