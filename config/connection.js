/**
 * Sequelize is a promise-based Node.js ORM (Object-Relational Mapping) library
 * that provides easy access to databases by mapping database objects to JavaScript objects.
 * It supports various database systems such as MySQL, PostgreSQL, SQLite, and more.
 * Sequelize simplifies the database operations and allows you to interact with the database
 * using JavaScript syntax and concepts.

 */
const Sequelize = require('sequelize');
//Dotenv to store environment variables in a .env file and load them into process.env
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;
