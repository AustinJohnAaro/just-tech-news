require('dotenv').config();

require('dotenv').config();

var Sequelize = require('sequelize');

var sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;




// const Sequelize = require('sequelize');
// const sequelize = require('../../config/connection'); 

// require('dotenv').config();
// // create connection to our db
// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
  
 

// module.exports = sequelize; 



