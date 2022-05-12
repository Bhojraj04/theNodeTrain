'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    alternative_contact: DataTypes.STRING,
    country: DataTypes.INTEGER,
    state: DataTypes.INTEGER,
    city: DataTypes.STRING,
    pin_code: DataTypes.INTEGER,
    dob: DataTypes.DATE,
    download: {
      type: DataTypes.ENUM, 
      values: [
        "pending", "downloaded"
      ],
      default: "pending"
    },
    image: DataTypes.STRING,
    refer_user_id: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};