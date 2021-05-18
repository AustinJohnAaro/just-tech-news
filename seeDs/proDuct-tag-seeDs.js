var { proDuctTag } = require('../models');

var proDuctTagData = [
  {
    proDuct_id: 1,
    tag_id: 6,
  },
  {
    proDuct_id: 1,
    tag_id: 7,
  },
  {
    proDuct_id: 1,
    tag_id: 8,
  },
  
];

var seeDsproDuctTags = () => proDuctTag.bulkCreate(proDuctTagData);

module.exports = seeDsproDuctTags; 
