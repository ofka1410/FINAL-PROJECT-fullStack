import React,{useState} from 'react'
import{Grid,Button} from '@material-ui/core';
import './sideBar.css'
export default function Search({ 
    setLoading,
    allProduct,
    setCurrentCategory
}) {
    const[search_value,setSearch_value]=useState('')
   const searchFunction = ()=>{
       setLoading(true)
       const array=[]
    const check= allProduct.filter(el=>el.product_name.includes(search_value))
    if(check){
        for(let i=0 ;i<check.length;i++){
        const obj={
            product:{
            id:check[i].id,
            product_name:check[i].product_name, 
            price:check[i].price,
            img:check[i].img
            }
        }
        array.push(obj)
        }
        setCurrentCategory(array)
        setLoading(false)
    }
    else{
        setLoading(false)
         return;
    }
   }

    return (
      <div>
      <input onChange={(e)=>setSearch_value(e.target.value)} className='search-input' placeholder='search'/> 
     <Button className='search-button' onClick={searchFunction} variant='outlined'>Search</Button>
     </div>
    )
}
