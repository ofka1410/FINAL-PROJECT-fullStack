const { Model, DataTypes } = require("sequelize");
const sequelize = require('../../db/conection');
const AllItems =require('../../modules/AllItems')

exports.updateProduct= async(req,res)=>{

    const data= req.body
    try{
    const product= await AllItems.findOne({
        where:{
            id:data.id
        }
    })
    if(product){
      product.product_name=data.product_name
      product.img=data.img 
      product.price=data.price
      product.category=data.category 
    }
    await sequelize.sync();
  product.save({fields: ['product_name','img','price','category']});
    res.send({status:'success'})          
    
}
  catch(err){
      console.log(err)
      res.send({status:'failed'})
  }  
}