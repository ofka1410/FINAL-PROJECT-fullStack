const CartUser = require('../../modules/CartUser')
const sequelize = require("../../db/conection");
const AllItems =require('../../modules/AllItems')
const ProductCart = require('../../modules/CartProduct')
exports.cartAdding = async (req,res)=>{
    const data= req.body
    try{
    const product= await AllItems.findOne({
        where:{id:data.itemId}
    })
    const userCart = await CartUser.findOne({
        where:{
            id:data.cartId
        }
    })
    
    if(product && userCart){
        await sequelize.sync();
        const item = await ProductCart.create({
            CartUser_id:userCart.id,
            Product_id:product.id,
            amount:data.amount,
            total_price:data.total_price,
            currency:data.currency
        })
        const myCart= await ProductCart.findAll({
            where:{
              CartUser_id:userCart.id
            },include:[{model:AllItems}]
          })
          sum= myCart.reduce(function(sum, current) {
            return sum + parseInt(current.total_price);
          }, 0); 
         
        res.send({status:"success",items:myCart,sum:sum})
    }
    else{
        res.send({status:'not found'})
    }
}
catch(err){
    console.log(err)
    res.send({status:'error'})
}
}