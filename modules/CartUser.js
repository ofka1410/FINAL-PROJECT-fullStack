const { Model, DataTypes,Sequelize } = require("sequelize");
const sequelize = require("../db/conection");
const User = require ('./User')
class CartUser extends Model {}
CartUser.init(
{
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:'id'
          }
        },
        status:{
            type: DataTypes.BOOLEAN,
        }
        
},
{ sequelize, modelName: "Cart_users", timestamps: true }
)
User.hasMany(CartUser,{foreignKey:"user_id"})
CartUser.belongsTo(User,{foreignKey:"user_id"})

module.exports =CartUser;