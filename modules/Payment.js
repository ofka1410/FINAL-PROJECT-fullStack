const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const CartUser = require ('./CartUser')

class Delivery extends Model {}
Delivery.init(
{
    CartUser_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:CartUser,
            key:'id'
          }
        },
        total_price:{
            type:DataTypes.DECIMAL,
            allowNull:false  
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false  
        },
        street:{
            type:DataTypes.STRING,
            allowNull:false
        },
       delivery_date: {
        type:DataTypes.STRING,
        allowNull:false
        },
        order_date:{
        type:DataTypes.STRING,
        allowNull:false
        },
        credit_card:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
       
        
        
},
{ sequelize, modelName:"dlivery", timestamps: true }
)
CartUser.hasMany(Delivery,{foreignKey: "CartUser_id"})
Delivery.belongsTo(CartUser,{foreignKey:"CartUser_id"})

module.exports =Delivery;