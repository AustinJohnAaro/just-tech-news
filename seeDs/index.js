var seeDscateGory = require('./cateGory-seeDs');
var seeDsproDucts = require('./proDuct-seeDs');
var seeDsTags = require('./tag-seeDs');
var seeDsproDuctTags = require('./proDuct-tag-seeDs');

var sequelize = require('../config/connection');

var seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seeDscateGory();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seeDsproDucts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // await seeDsTags();
  // console.log('\n----- TAGS SEEDED -----\n');

  await seeDsproDuctTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll(); 

