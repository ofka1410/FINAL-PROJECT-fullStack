const CartUser = require('../../modules/CartUser')
const sequelize = require("../../db/conection");
const Delivery = require('../../modules/Payment')
exports.pay= async (req,res)=>{
    const data= req.body
    console.log(data)
    try{
        const cartId = await CartUser.findOne({
            where:{
             user_id:data.user_id,
             status:true   
            }
        })
        if(cartId){
            const check_date= await Delivery.findAll({
                where:{
                    delivery_date:data.delivery_date   
                }
            })
            if(check_date){
                if(check_date.length>=3){
                    res.send({status:'We sorry but the Shipping date is full, Please choose another date.'})
                    return;
                }
            }
          
            cartId.status=false;
            cartId.save({fields: ['status']});
            await sequelize.sync();
            category = await Delivery.create({
                CartUser_id:cartId.id,
                total_price:data.total_price,
                city:data.city,
                street:data.street,
                delivery_date:data.delivery_date,
                order_date:data.order_date,
                credit_card:data.credit_numbers
            })
            res.send({status:'your order has been succesed',myCart:data.myCart,total_price:data.total_price})
        }
        else{
            res.send({status:'cart not exist'}) 
        } 
    }
  catch(err){
console.log(err)
res.send({status:'error'})
  }
    

}