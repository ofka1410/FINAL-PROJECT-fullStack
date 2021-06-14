const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Bakery extends Model {}
Bakery.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "bakery", timestamps: true }
);
Product.hasMany(Bakery,{foreignKey: "product_id"})
Bakery.belongsTo(Product,{foreignKey:"product_id"})

module.exports = Bakery;
