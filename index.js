const PORT = process.env.PORT || 7000
const express= require('express')
const app=express()
var cors = require('cors')
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  app.use(express.static('public/build'))
  app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"public/build","index.html"))
})
const sequelize = require('./db/conection')

async function checkConenction(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }
    checkConenction()
    
     //routes importes
  const userRoute= require('./routes/userRoute')
  const ProductRoute=require('./routes/ProductRoute')
  const CartRoute = require('./routes/CartRoute')
  const paymentRoute =require('./routes/PaymentRoute')
  const resevaitions = require('./routes/usersCarts')
    //middlewares
    app.use('/reservaition',resevaitions)
    app.use('/user',userRoute)
    app.use('/Product',ProductRoute)
    app.use('/cart',CartRoute)
    app.use('/payment',paymentRoute)       
     app.listen(PORT,()=>{
       console.log("the server is listening on port 7000")
       })