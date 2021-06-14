import React from 'react'
import{Button} from '@material-ui/core';
import {  toast } from 'react-toastify';
import {domain} from '../../../Confige'
export default function Update_httpReq({
    itemId,
    productName,
    price,
    img,
    category,
    setLoading,
    setRefresh
    
 }) {

    const update = async()=>{
        setLoading(true)
        const res2 = await fetch(`${domain}/Product`,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                id:itemId,
                product_name:productName,
                price:price,
                img:img,
                category:category
                }
                ) 
        }
        )
        const data= await res2.json()
        if(data.status==='success'){
           setRefresh(Math.random())
           setLoading(false)
           toast('product has been update') 
            }
            else{
             setLoading(false)  
             toast('update has been failed')  
            } 
    }
    return (
      <Button className='updateProduct' onClick={update} variant='outlined'>Update product</Button>
    )
}

