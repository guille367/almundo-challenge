'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define('Hotel', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    image: DataTypes.STRING
  }, {
    timestamps: false
  });
  Hotel.associate = function(models) {
    Hotel.belongsToMany(models.Amenity, { as: 'amenities', through: 'HotelAmenity', foreignKey: 'hotel_id', timestamps: false });
  };
  return Hotel;
};