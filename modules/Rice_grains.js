const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Rice_grains extends Model {}
Rice_grains.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "rice_grains", timestamps: true }
);
Product.hasMany(Rice_grains,{foreignKey: "product_id"})
Rice_grains.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Rice_grains;