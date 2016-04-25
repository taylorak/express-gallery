'use strict';

module.exports = (sequelize, DataTypes) => {
  let Photo = sequelize.define('Photo', {
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Photo;
};

