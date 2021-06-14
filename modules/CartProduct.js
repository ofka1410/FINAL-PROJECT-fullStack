const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const Product = require('./AllItems')
const CartUser = require ('./CartUser')
class CartProduct extends Model {}
CartProduct.init(
{
    CartUser_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:CartUser,
            key:'id'
          }
        },
        Product_id: {
            type:Sequelize.INTEGER,
            allowNull:false,
            references:{
                model:Product,
                key:'id'
              }
            },
            amount:{
                type:DataTypes.INTEGER,
                allowNull:false  
            },
            total_price:{
                type:DataTypes.DECIMAL,
                allowNull:false  
            },
           
            currency:{
                type:DataTypes.STRING 
            }
        
        
},
{ sequelize, modelName:"Cart_Product", timestamps: true }
)
CartUser.hasMany(CartProduct,{foreignKey: "CartUser_id"})
CartProduct.belongsTo(CartUser,{foreignKey:"CartUser_id"})
Product.hasMany(CartProduct,{foreignKey: "Product_id"})
CartProduct.belongsTo(Product,{foreignKey:"Product_id"})
module.exports =CartProduct;