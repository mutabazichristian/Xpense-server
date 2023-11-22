const { Sequelize } = require('sequelize');
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const sequelizeConnection = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
});

module.exports = sequelizeConnection;