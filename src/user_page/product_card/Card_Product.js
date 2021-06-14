import React,{useState,useEffect} from 'react'
import CardFunctional from './cardFunctional'
import Loader from "react-loader-spinner";
import './card.css'
import { makeStyles } from '@material-ui/core/styles';
import{Grid,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Card} from '@material-ui/core';

    const useStyles = makeStyles({
        root: {
          maxWidth: 330,
          minWidth:260,
          maxHeight:370
      
        },
        media: {
          height: 190,
        },
      });
      
export default function Card_Product({currentCategory,
  currency,
  cart,
  cartId,
  user,
  setLoading,
  amount,
  setAmount,
  setCart,
  setPrice_sum,
  setCart_button,
  setCounter,
  counter
              }) {

  
  const classes = useStyles();


    return (
      <Grid className='product-warper'  container spacing={2}>
      {currentCategory.length>0||currentCategory!==undefined?
      currentCategory.map(item=>{
          return(
              <Grid className='card-warper' xs={12} xl={3} md={6} sm={6} lg={4}>
           <Card className={classes.root}>
           <CardActionArea>
             <CardMedia
               className={classes.media}
               image={item.product.img}
               title="Contemplative Reptile"
             />
             <CardContent className='content-card'>
               <Typography className='product_name' gutterBottom variant="h5" component="h4">
                 {item.product.product_name}
               </Typography>
               {currency=='Euro'?
               <Typography className='price'  variant="h6" color="textSecondary" component="h6">
                
                 price: {item.product.price *0.8 } &#8364;
                 </Typography>
                 :currency=='Shekel'?
                 <Typography className='price'  variant="h6" color="textSecondary" component="h6">
                
                 price: {item.product.price  * 3.25 } &#8362;
                 </Typography>
               :
               <Typography className='price'  variant="h6" color="textSecondary" component="h6">
               price:  {item.product.price} $
               </Typography>
               }
           

              
             </CardContent>
           </CardActionArea>
           <CardActions className='cart-adding-warper'>
            
               <Grid>
             <label>Amount:</label>
            <select onChange={(e)=>{setAmount(e.target.value)}} >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
           
            </Grid>
            <Grid>
           <CardFunctional
             setLoading={setLoading}
             currency={currency}
           item={item}
           amount={amount}
           cartId={cartId}
           user={user}
           cart={cart}
           setCart={setCart}
           setPrice_sum={setPrice_sum}
           setCart_button={setCart_button}
           setCounter={setCounter}
           counter={counter}
           setAmount={setAmount}
           />
            </Grid>
           </CardActions>
         </Card>
         </Grid>
          )
      })
      :<></>
      } 
   </Grid>
    )
}
