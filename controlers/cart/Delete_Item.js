const CartUser = require('../../modules/CartUser')
const sequelize = require("../../db/conection");
const AllItems =require('../../modules/AllItems')
const ProductCart = require('../../modules/CartProduct')

exports.deleteItem = async(req,res)=>{
    const data =req.body
    console.log(data.itemId,data.cartId)
    try{
        
            await sequelize.sync();
             ProductCart.destroy({
               where:{
                CartUser_id:data.cartId,
                Product_id:data.itemId,
               }
            })
            
            const myCart= await ProductCart.findAll({
                where:{
                  CartUser_id:data.cartId
                },include:[{model:AllItems}]
              })
              sum= myCart.reduce(function(sum, current) {
                return sum + parseInt(current.total_price);
              }, 0); 
             
            res.send({status:"success",items:myCart,sum:sum})
        
        
        }
        catch(err){
        console.log(err)
        res.send({status:'error'})
    }

}