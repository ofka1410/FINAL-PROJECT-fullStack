const Delivery = require('../modules/Payment')
const userCart =require('../modules/CartUser')
const user = require('../modules/User')
const sequelize = require('../db/conection');
var fs = require('fs');
const file=require('../reservaition_length/file.handler');
exports.reservaition= async(req,res)=>{
   let counter=0
    let length;
    let sum=0
    fs.readFile('length.txt', 'utf-8', function (err, data) {
        if (data) {
            length = data
        }
        if (err) throw err;
        console.log(err);
    });
    const deliveries = await Delivery.findAll({include:[{model:userCart,include:[user]}]})
    //counter=ParseInt(length)-ParseInt(deliveries.length)
   counter= deliveries.length - parseInt(length)
   console.log(counter)
  length=deliveries.length.toString()
    file.saveLength(length)
    sum= deliveries.reduce(function(sum, current) {
        return sum + parseInt(current.total_price);
      }, 0); 
    res.send({allReservaition:deliveries,counter:counter,sum:sum})
}