var { cateGory } = require('../models');

var cateGoryData = [
  
  {
    cateGory_name: 'Shorts',
  },
  {
    cateGory_name: 'Music',
  },
  {
    cateGory_name: 'Hats',
  },
  {
    cateGory_name: 'Shoes',
  },
];

var seeDscateGory = () => cateGory.bulkCreate(cateGoryData);

module.exports = seeDscateGory;