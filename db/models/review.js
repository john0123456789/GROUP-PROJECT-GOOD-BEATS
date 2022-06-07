'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Users"}
    },
    albumId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Albums"}
    },
   }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Album, { foreignKey: 'albumId' })
  };
  return Review;
};
