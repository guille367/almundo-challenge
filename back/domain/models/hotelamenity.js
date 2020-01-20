'use strict';
module.exports = (sequelize, DataTypes) => {
  const HotelAmenity = sequelize.define('HotelAmenity', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'hotel',
        key: 'id',
        as: 'hotel_id'
      }
    },
    amenity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'amenity',
        key: 'id',
        as: 'amenity_id'
      }
    }
  }, {
    timestamps: false
  });
  // HotelAmenity.associate = function(models) {
  //   // associations can be defined here
  // };
  return HotelAmenity;
};