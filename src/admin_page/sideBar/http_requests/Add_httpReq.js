import React from 'react'
import{Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import {domain} from '../../../Confige'
export default function Add_httpReq({
    productName,
     price,
     img,
     category,
    setLoading, setRefresh}) {
       
    const add = async()=>{
            setLoading(true)
            const res2 = await fetch(`${domain}/Product`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                    product_name:productName,
                    price:price,
                    img:img,
                    category:category
                    }
                    )
               
            }
            )
            const data= await res2.json()
            setLoading(false)
            setRefresh(Math.random())
            toast(data.status) 
        
    }
    return (
        <div>
        <ToastContainer className='Toast'/>
           <Button className='addProduct' onClick={add} variant='outlined'>Add new product</Button>  
           </div>
           
      
    )
}
