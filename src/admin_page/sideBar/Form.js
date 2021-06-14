import React from 'react'
import{Grid,Button,TextField,FileInput} from '@material-ui/core';
import './sideBar.css'
import Add_httpReq from   './http_requests/Add_httpReq'
import Update_httpReq from './http_requests/Update_httpReq'
export default function Form({setLoading,
    productName,
    setProductName,
    img,
    setImg,
    price,
    setPrice,
    category,
    setCategory,
    itemId,
    meat_product,
    rice_product,
    setRefresh
}) {
    const uploadImage= async(e)=>{
        const files =e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset',"vacaition")
        const res = await fetch('https://api.cloudinary.com/v1_1/df2pklfox/image/upload',
    {
    method:'POST',
    body:data
    })
    const file= await res.json()
    setImg(file.secure_url)
      }
    return (
     <Grid>
         <Grid className='input-warper'>
        <TextField 
       type='file'
        className='input'
        onChange={(e)=>{uploadImage(e)}}
        required
        variant='outlined'
        >
        </TextField>
         </Grid>
         <Grid className='input-warper'>
         <img className='side-img' src={img}/>
         </Grid>
         <Grid className='input-warper'>
         <TextField 
         className='input'
         onChange={(e)=>{setProductName(e.target.value)}}
         required
         label='Product name'
         variant='outlined'
         value={productName}>
        </TextField> 
        </Grid>
        <Grid className='input-warper'>
        <TextField 
        className='input'
        onChange={(e)=>{setPrice(e.target.value)}}
        type='number'
        required
        label='price in $'
        variant='outlined'
        value={price}>
        </TextField> 
       </Grid>
       <Grid className='input-warper'>
      <select 
      value={category}
      onChange={(e)=>{setCategory(e.target.value)}} 
      id='category' 
      className='input'>
          <option value='Bakery'>Bakery</option>
          <option value='Cheese&Milk'>Cheese&Milk</option>
          <option value='Drinks'>Drinks</option>
          <option value='Kitchen_tools'>Kitchen_tools</option>
          <option value='Meat&Fish'>Meat&Fish</option>
          <option value='Rice&Grains'>Rice&Grains</option>
          <option value='Snacks'>Snacks</option>
          <option value='Sauces&Oil'>Sauces&Oil</option>
      </select>   
      </Grid>
      <Grid className='bt-div'>
        <Add_httpReq
        setLoading={setLoading}
        productName={productName}
        price={price}
        img={img}
        category={category}
        meat_product={meat_product}
        setRefresh={setRefresh}
        />  
        <Update_httpReq
        setLoading={setLoading}
        itemId={itemId}
         productName={productName}
         price={price}
         img={img}
         category={category}
         rice_product={rice_product}
         setRefresh={setRefresh}
        />  
     </Grid> 
     </Grid>
    )
}
