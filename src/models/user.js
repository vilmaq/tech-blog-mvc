const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 20],
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
const hooks = {
  beforeCreate: async (newUser) => {
    newUser.password = await bcrypt.hash(newUser.password, 10);
  },
  beforeBulkCreate: async (users) => {
    const promises = users.map((user) => {
      return bcrypt.hash(user.password, 10);
    });
    const passwords = await Promise.all(promises);
    passwords.forEach((password, index) => {
      users[index].password = password;
    });
  },

  beforeUpdate: async (updatedUser) => {
    updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
    return updatedUser;
  },
};

const options = {
  hooks,
  sequelize,
  modelName: "user",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
};

class User extends Model {}

User.init(schema, options);

module.exports = User;
