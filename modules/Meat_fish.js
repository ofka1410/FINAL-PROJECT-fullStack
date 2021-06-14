const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Meat_fish extends Model {}
Meat_fish.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "meat_fish", timestamps: true }
);
Product.hasMany(Meat_fish,{foreignKey: "product_id"})
Meat_fish.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Meat_fish;