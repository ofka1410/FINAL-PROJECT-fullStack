
const sequelize = require("../db/conection");
const User_Table= require('../modules/User')
exports.signIn=async(req,res)=>{
    
    const data= JSON.parse(req.params.id)
    try{
    const ifUser = await User_Table.findOne(
        {
         where: {
             password:data.password.trim(),
             email:data.email.trim()
           } 
       });
       if(ifUser){
           res.send({status:'user is loged',user:ifUser})
       }
       else{
        res.send({status:'user has not found, Email or password is incorrect'})  
       }
    }
    catch(err){
        console.log(err)
        res.send({status:'server error'})
    }

}

   exports.signUp=async(req,res)=>{
     const data= req.body
     console.log(data.password,data.email,data.first_name)
     const ifUser = await User_Table.findOne(
         {
          where: {
              password:data.password,
              email:data.email
            } 
        });

        if(ifUser) {
            res.send({status:'email or password has been takin'})
            return;
        }
     else{
            try{
            await sequelize.sync();
            const user = await User_Table.create({
                first_name:data.first_name,
                last_name: data.last_name,
                email:data.email,
                password:data.password,
                city:data.city,
                street:data.street,
                role:data.role
            });
            res.send({status:'success'})
        }
        catch(err){
            console.log(err)
          res.send({status:'faild'})
        }  
     }
}