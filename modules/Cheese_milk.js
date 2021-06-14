const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Cheese_milk extends Model {}
Cheese_milk.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "cheese_milk", timestamps: true }
);
Product.hasMany(Cheese_milk,{foreignKey: "product_id"})
Cheese_milk.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Cheese_milk;