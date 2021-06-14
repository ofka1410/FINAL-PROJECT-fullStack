const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Snacks extends Model {}
Snacks.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "snacks", timestamps: true }
);
Product.hasMany(Snacks,{foreignKey: "product_id"})
Snacks.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Snacks;