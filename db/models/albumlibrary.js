'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumLibrary = sequelize.define('AlbumLibrary', {
    libraryId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  AlbumLibrary.associate = function(models) {
    // associations can be defined here
  };
  return AlbumLibrary;
};