var { Model, DataTypes } = require('sequelize');

var sequelize = require('../config/connection.js');

class cateGory extends Model {}

cateGory.init(
  {
    cateGory_name: {
      type:DataTypes.STRING, 
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cateGory',
  }
);

module.exports = cateGory; 









// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Comment extends Model {}

// Comment.init(
//   {
//     // columns will go here
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'comment'
//   }
// );

// module.exports = Comment;  


