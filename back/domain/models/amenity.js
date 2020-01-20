'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    icon_name: DataTypes.STRING,
  }, {
    timestamps: false
  });
  Amenity.associate = function(models) {
    Amenity.belongsToMany(models.Hotel, { as: 'hotels', through: 'HotelAmenity', foreignKey: 'amenity_id', timestamps: false });
  };
  return Amenity;
};