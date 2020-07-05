const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const bcrypt = require('bcryptjs');


class User extends Model {}

User.init({
  name: DataTypes.STRING,
  email:  DataTypes.STRING,
  password:  DataTypes.STRING
}, {

  sequelize, 
  modelName: 'User'
});

User.beforeCreate(async (user, options) => {
  return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});


console.log(User === sequelize.models.User);

module.exports = User;