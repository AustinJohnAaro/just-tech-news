var Product = require("./Product");
var Category = require("./Category");
// var tag = require("./tag");
var ProductTag = require("./ProductTag");


Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Product.belongsToMany(tag, {
//   through: ProductTag,
// }); 

tag.belongsToMany(Product, {
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  tag,
  ProductTag,
}; 


 

