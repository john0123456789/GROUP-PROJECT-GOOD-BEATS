'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Library.associate = function (models) {
    const columnMapping = { through: 'AlbumLibrary', otherKey: 'albumId', foreignKey: 'libraryId' }
    Library.belongsToMany(models.Album, columnMapping)
    Library.belongsTo(models.User, { foreignKey: 'userId' })

  };
  return Library;
};
