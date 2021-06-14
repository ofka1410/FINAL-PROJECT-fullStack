const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Drinks extends Model {}
Drinks.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "drinks", timestamps: true }
);
Product.hasMany(Drinks,{foreignKey: "product_id"})
Drinks.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Drinks;