const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
class Vegtables_fruits extends Model {}
Vegtables_fruits.init(
  {
  product_id: {
    type:Sequelize.INTEGER,
    references:{
        model:Product,
        key:'id'
      }
    },
 
  },
  { sequelize, modelName: "vegtables_fruits", timestamps: true }
);
Product.hasMany(Vegtables_fruits,{foreignKey: "product_id"})
Vegtables_fruits.belongsTo(Product,{foreignKey:"product_id"})

module.exports =Vegtables_fruits;