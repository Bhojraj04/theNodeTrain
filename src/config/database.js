const Sequelize = require("sequelize").Sequelize;
const connection = new Sequelize(
  "testing_mamn",
  "root",
  "mamnooN@",
  {
    dialect: "mysql",
    host: "127.0.0.1",
    port: "3306",
    logging: true,
    pool: {
      max: 1000,
      min: 0,
      acquire: 600000,
      idle: 100000,
    },
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
);

module.exports = connection;
