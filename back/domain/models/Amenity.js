// module.exports = (sequelize, DataTypes) => {
//   const Amenity = sequelize.define('Amenity', {
//     name: DataTypes.STRING,
//     icon_name: DataTypes.STRING,
//   }, {
//       tableName: 'Amenity',
//   });

//   Hotel.relations = (models) => {
//     Amenity.belongsToMany(models.Hotel, { as: 'amenities', through: 'hotel_amenities', foreignKey: 'hotel_id', timestamps: false });
//   }

//   return Hotel;
// };
