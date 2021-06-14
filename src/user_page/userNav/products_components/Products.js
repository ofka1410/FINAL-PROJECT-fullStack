import React from 'react'
import {Grid,IconButton} from '@material-ui/core';
import {  toast } from 'react-toastify';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {domain} from '../../../Confige'
export default function Products({item,currency,setPrice_sum,cartId, setCart,setLoading}) {

    const delete_item= async()=>{
        setLoading(true)
        const res2 = await fetch(`${domain}/cart`,
          {
              method: 'DELETE',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
              itemId:item.Product_id,
              cartId:cartId
                  }
                  )
                  }
                   )
          const data= await res2.json()
          setCart(data.items)
          setPrice_sum(data.sum)
          toast(`item has deleted, total price is now: ${data.sum} $`)
          setLoading(false)
          }

       return (
           <Grid className='items'>
            <Grid className='img_delete-warper'>
                <Grid>
                <img className='img-product' src={item.product.img}/> 
                </Grid>
                <Grid className='padding-icon'>
                <IconButton onClick={delete_item}>
                <HighlightOffIcon  className='deleteIcon'/>
            </IconButton>
                </Grid>
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
}
