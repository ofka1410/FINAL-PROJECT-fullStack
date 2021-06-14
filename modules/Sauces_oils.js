const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Sauces_oils extends Model {}
Sauces_oils.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "sauces_oils", timestamps: true }
);
Product.hasMany(Sauces_oils,{foreignKey: "product_id"})
Sauces_oils.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Sauces_oils;
