import React,{useState} from 'react'
import './pay.css'
import {Grid} from '@material-ui/core';
export default function Search({cart,currency}) {
   const[searchCart,setSearchCart]=useState(cart)
  
   const searchFunc=(value)=>{
       if(value.length>0){
        const found= cart.filter(el=>el.product.product_name.toLowerCase().includes(value))
       setSearchCart(found)
       }
      else{
       setSearchCart(cart)
       } 
    }
    return (
        <div className='all-search-warper'>
            <Grid style={{marginBottom:'20px'}} >
            <input onChange={(e)=>{searchFunc(e.target.value)}}   placeholder='Search product:' type='text'/>  
            </Grid>
        <Grid className='search-output'>
            {searchCart.map(item=>{
                return(
                    <Grid>
                 <Grid>
                <img className='img-product' src={item.product.img}/> 
                 </Grid>
                 <Grid>
            <p className='product-name'>{item.product.product_name}</p>
            </Grid>
            <Grid>
            <p>amount: <span className='number'>{item.amount}</span></p>
            </Grid>
            <Grid>
            {currency=="Dollar"?
            <p>total price: <span className='number'>{item.total_price} $</span>  </p>
            :currency=="Euro"?
            <p>total price: <span className='number'>{item.total_price*0.8} &#8364;</span>   </p>
            :<p>total price: <span className='number'>{item.total_price*3.25}  &#8362;</span>  </p>
            }
            </Grid>
                    </Grid>
                )
            })}
        </Grid>
        </div>
    )
}
