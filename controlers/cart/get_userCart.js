
const CartUser = require('../../modules/CartUser')
const sequelize = require("../../db/conection");
const ProductCart = require('../../modules/CartProduct')
const AllItems =require('../../modules/AllItems')
exports.getCart= async (req,res)=>{
    const data= req.params.data
    console.log(data)
   try{
    await sequelize.sync(); 
    const [userCart, created] = await CartUser.findOrCreate({
      where: { 
      user_id:data,
      status:true
      },
      defaults: {
        user_id:data,
      status:true
      }
    }); 
    console.log(userCart,created)
    const myCart= await ProductCart.findAll({
      where:{
        CartUser_id:userCart.id
      },include:[{model:AllItems}]
    })
    
   sum= myCart.reduce(function(sum, current) {
      return sum + parseInt(current.total_price);
    }, 0); 
    console.log(sum)
    
    
    
    
    res.send({userCart:userCart,myCart:myCart,status:"success",sum:sum})
   }
   catch(err){
     res.send({status:"failed"})
     console.log(err)
   } 
}