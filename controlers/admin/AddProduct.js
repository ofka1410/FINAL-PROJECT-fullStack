const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../db/conection");
const AllItems =require('../../modules/AllItems')
const Bakery =require('../../modules/Bakery')
const Cheese =require('../../modules/Cheese_milk')
const Drinks =require('../../modules/Drinks_alcohol');
const Kitchen_tools = require("../../modules/Kitchen_tools");
const Meat_fish =require('../../modules/Meat_fish')
const Rice=require('../../modules/Rice_grains')
const Sauces_oils =require('../../modules/Sauces_oils')
const Snacks =require('../../modules/Snacks')

exports.addProduct = async(req,res)=>{
const data=req.body
let category;
console.log(data)
if(data.product_name,data.img,data.price,data.category){
    try{
        await sequelize.sync();
        const items = await AllItems.create({
            product_name:data.product_name,
            img: data.img,
            price:data.price,
            category:data.category
        })
        
        if(items){
      if(data.category==="Bakery"){
        await sequelize.sync();
        category = await Bakery.create({
        product_id:items.id
        })
        res.send({status:'product add sucssesfuly'})
        return;
      }
      else if(data.category==="Cheese&Milk"){
        category = await Cheese.create({
            product_id:items.id
            })
            res.send({status:'product add sucssesfuly'})
            return;
      }
      else if(data.category==="Drinks"){
        category = await Drinks.create({
            product_id:items.id
            })
            res.send({status:'product add sucssesfuly'})
            return;
      }
      else if(data.category==="Kitchen_tools"){
        category = await Kitchen_tools.create({
            product_id:items.id
            })
            res.send({status:'product add sucssesfuly'})
            return;
      }
      else if(data.category==="Meat&Fish"){
        category = await Meat_fish.create({
            product_id:items.id
            })
            res.send({status:'success'})
            return;
      }
      else if(data.category==="Rice&Grains"){
        category = await Rice.create({
            product_id:items.id
            })
            res.send({status:'product add sucssesfuly'})
            return;
      }
      else if(data.category==="Sauces&Oil"){
        category = await Sauces_oils.create({
            product_id:items.id
            })
            res.send({status:'product add sucssesfuly'})
            return;
      }
      else if(data.category==="Snacks"){
        category = await Snacks.create({
            product_id:items.id
            })
            res.send({status:'product add sucssesfuly'})
            return;
      }
      else{
          res.send({status:'cannot find category create coloum is failed'})
      }
    }
    }
    catch(err){
        console.log(err)
      res.send({status:'faild'})
    }  
}
}
