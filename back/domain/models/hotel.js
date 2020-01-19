'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define('Hotel', {
    name: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    image: DataTypes.STRING
  }, {});
  Hotel.associate = function(models) {
    Hotel.belongsToMany(models.Amenity, { as: 'amenities', through: 'hotel_amenities', foreignKey: 'hotel_id', timestamps: false });
  };
  return Hotel;
};