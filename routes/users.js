'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Task);
      }
    }
  });
  return User;
};
