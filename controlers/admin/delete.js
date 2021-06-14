const sequelize = require('../../db/conection');
const AllItems =require('../../modules/AllItems')
const Bakery =require('../../modules/Bakery')
const Cheese =require('../../modules/Cheese_milk')
const Drinks =require('../../modules/Drinks_alcohol');
const Kitchen_tools = require("../../modules/Kitchen_tools");
const Meat_fish =require('../../modules/Meat_fish')
const Rice=require('../../modules/Rice_grains')
const Sauces_oils =require('../../modules/Sauces_oils')
const Snacks =require('../../modules/Snacks')
exports.deleteProduct= async(req,res)=>{
    const data= req.body
    console.log(data)
    try{
        await sequelize.sync();
        AllItems.destroy({
            where:{
             id:data.itemId,
            }
         })
         if(data.category==="Bakery"){
            await sequelize.sync();
            Bakery.destroy({
            product_id:data.itemId
            })
            res.send({status:'success'})
            return;
          }
          else if(data.category==="Cheese&Milk"){
            await sequelize.sync();
            Cheese.destroy({
                product_id:data.itemId
                })
                res.send({status:'success'})
                return;
          }
          else if(data.category==="Drinks"){
            await sequelize.sync();
             Drinks.destroy({
                product_id:data.itemId
                })
                res.send({status:'success'})
                return;
          }
          else if(data.category==="Kitchen_tools"){
            await sequelize.sync();
             Kitchen_tools.destroy({
                product_id:data.itemId
                })
                res.send({status:'product deleted sucssesfuly'})
                return;
          }
          else if(data.category==="Meat&Fish"){
            await sequelize.sync();
             Meat_fish.destroy({
                product_id:data.itemId
                })
                res.send({status:'success'})
                return;
          }
          else if(data.category==="Rice&Grains"){
            await sequelize.sync();
             Rice.destroy({
                product_id:data.itemId
                })
                res.send({status:'success'})
                return;
          }
          else if(data.category==="Sauces&Oil"){
            await sequelize.sync();
            Sauces_oils.destroy({
                product_id:data.itemId
                })
                res.send({status:'success'})
                return;
          }
          else if(data.category==="Snacks"){
            await sequelize.sync();
             Snacks.destroy({
                product_id:data.itemId
                })
                res.send({status:'success'})
                return;
          }
         }
         catch(err){
         console.log(err)
        }
          }