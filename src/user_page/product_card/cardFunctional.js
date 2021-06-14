import React from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import{Button} from '@material-ui/core';
import {domain} from '../../Confige'
export default function cardFunctional({item,amount,cartId,setLoading,currency,setCart,setPrice_sum,
    setCart_button,setCounter,counter, setAmount}) {

    const addProduct= async()=>{
        console.log(cartId)
            setLoading(true)
            const res2 = await fetch(`${domain}/cart`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                   itemId:item.product.id,
                   cartId:cartId,
                   amount:parseInt(amount),
                   currency:currency,
                   total_price: item.product.price * parseInt(amount)
                    }
                    )
            }
            )
            const data= await res2.json()
            setCart(data.items)
            setPrice_sum(data.sum)
            setCart_button("alert-button")
             setCounter(counter+1)
             setAmount(1)
            setLoading(false)
        }
    return (
        
     <Button onClick={addProduct} variant='outlined'>Add to cart<AddOutlinedIcon/></Button> 
        
    )

}
