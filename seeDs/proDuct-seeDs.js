var { ProDuct } = require('../models');

var proDuctData = [
  
  
  {
    proDuct_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    cateGory_id: 4,
  },
  {
    proDuct_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    cateGory_id: 3,
  },
  
];

var seeDsproDucts = () => proDuct.bulkCreate(proDuctData);

module.exports = seeDsproDucts;

