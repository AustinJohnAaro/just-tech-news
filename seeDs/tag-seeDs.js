var { tag } = require('../models');

var tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'classic rock music',
  },
  {
    tag_name: 'blue',
  },
]


var seeDsTags = () => tag.bulkCreate(tagData);

module.exports = seeDsTags;