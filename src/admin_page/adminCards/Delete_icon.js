import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {domain} from '../../Confige'
export default function Delete_icon({item,setLoading,setRefresh}) {
const deleted = async()=>{
    setLoading(true)
    const res2 = await fetch(`${domain}/Product`,
    {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                itemId:item.product_id
            }
            ) 
    }
    )
    const data= await res2.json()
    if(data.status==='success'){
        setRefresh(Math.random())
        setLoading(false)
      
         }
         else{
          setLoading(false)  
         
         } 
}
    return (
        <div>
         <DeleteForeverIcon onClick={deleted}  style={{zIndex:'1000'}}/>   
        </div>
    )
}
