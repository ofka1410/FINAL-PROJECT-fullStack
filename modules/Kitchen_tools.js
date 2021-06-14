const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Kitchen_tools extends Model {}
Kitchen_tools.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "kitchen_tools", timestamps: true }
);
Product.hasMany(Kitchen_tools,{foreignKey: "product_id"})
Kitchen_tools.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Kitchen_tools;