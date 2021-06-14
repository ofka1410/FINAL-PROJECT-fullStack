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

exports.getProducts= async (req,res)=>{
try{
const all_product= await AllItems.findAll()
const bakery_product =await Bakery.findAll({include:AllItems})
const cheese_product = await Cheese.findAll({include:AllItems})
const drinks_product= await Drinks.findAll({include:AllItems})
const Kitchen_product =await Kitchen_tools.findAll({include:AllItems})
const Meat_product = await Meat_fish.findAll({include:AllItems})
const rice_product= await Rice.findAll({include:AllItems})
const Sauces_product = await Sauces_oils.findAll({include:AllItems})
const Snacks_product = await Snacks.findAll({include:AllItems})
res.send({
status:'success',
all_product:all_product,
bakery_product:bakery_product,
cheese_product:cheese_product,
drinks_product:drinks_product,
Kitchen_product:Kitchen_product,
Meat_product:Meat_product,
rice_product:rice_product,
Sauces_product:Sauces_product,
Snacks_product:Snacks_product
})
}
catch(err){
console.log(err)
res.send({status:'failed'})
}
}