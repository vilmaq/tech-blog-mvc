const sequelize = require("sequelize");

const dbOptions = {
  host: "	esilxl0nthgloe1y.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  dialect: "mysql",
  port: 3306,
  logging: false,
};

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const dbNameH = "tunzn9nuuemxrzcj";
const dbUserH = "cwe5by7jy7qwxiwy";
const dbPasswordH = "gpfweonx84iqptlp";

let connection;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(dbNameH, dbUserH, dbPasswordH, dbOptions);
} else {
  // connection for local development
  connection = new sequelize(dbName, dbUser, dbPassword, dbOptions);
}

module.exports = connection;
