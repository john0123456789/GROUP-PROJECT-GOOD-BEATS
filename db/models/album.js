'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    trackLists: DataTypes.TEXT,
    genre: DataTypes.STRING,
    artist: DataTypes.STRING,
    releaseDate: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.hasMany(models.Review, { foreignKey: 'albumId' })
  };
  return Album;
};
