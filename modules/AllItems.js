const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/conection");

class Items extends Model {}
Items.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
        type: DataTypes.STRING,
        allowNull: false,  
    },
    price:{
        type: DataTypes.DECIMAL,
        allowNull: false,    
    },
    category:{
      type: DataTypes.STRING,
      allowNull: false,    
  }
  },
  { sequelize, modelName: "products", timestamps: true }
);

module.exports = Items;

