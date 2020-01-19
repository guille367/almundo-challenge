'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    name: DataTypes.STRING,
    icon_name: DataTypes.STRING,
  }, {});
  Amenity.associate = function(models) {
    Amenity.belongsToMany(models.Hotel, { as: 'amenities', through: 'hotel_amenities', foreignKey: 'hotel_id', timestamps: false });
  };
  return Amenity;
};