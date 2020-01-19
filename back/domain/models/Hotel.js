// module.exports = (sequelize, DataTypes) => {
//   const Hotel = sequelize.define('Hotel', {
//     name: DataTypes.STRING,
//     stars: DataTypes.STRING,
//     price: DataTypes.STRING,
//     image: DataTypes.STRING,
//     // amenities: DataTypes.STRING,
//   }, {
//       tableName: 'Hotel',
//   });

//   Hotel.relations = (models) => {
//     Hotel.belongsToMany(models.Amenity, { as: 'amenities', through: 'hotel_amenities', foreignKey: 'hotel_id', timestamps: false });
//   }

//   return Hotel;
// };
