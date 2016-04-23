'use strict';

module.exports = (sequelize, DataTypes) => {
  let Photo = sequelize.define('Photo', {
    author: DataTypes.STRING,
    link: DataTypes.STRING,
    Description: DataTypes.TEXT
  });
  return Photo;
};

