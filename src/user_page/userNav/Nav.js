import React,{useState,useEffect} from 'react'
import{Grid} from '@material-ui/core';
import SideNav from './SideNav'
import Loader from "react-loader-spinner";
import { ToastContainer } from 'react-toastify';
import Responsive_nav from './Responsive_nav'
import "./navUser.css"
export default function Nav({setCurrentCategory,
    meat_product,
    kitchen_product,
    sauces_product,
    snacks_product,
    bakery_product,
    cheese_product,
    drinks_product,
    rice_product,
    cart,
    cartId,
    currency,
    setPrice_sum,
    price_sum,
    setCart,
    cart_button,
    setCart_button,
    setCounter,
    counter,
    setRefresh
}) {

  const[loading,setLoading]=useState(false)
  const [width,setWidth]=useState(window.innerWidth)
  React.useEffect(() => {
    function handleResize() {
    setWidth(window.innerWidth) 
    }
    window.addEventListener('resize', handleResize)
  })

 
    return (
        <div>
        <ToastContainer className='Toast'/>
            {loading==true?
        <div className='loading'>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}/>
      </div>
       :<></> }
   <Grid container justify="center" className='navBar userNav'>
       {width>860?     
           <>
            <Grid className='shopping-cart'>
       <SideNav
        setLoading={setLoading}
       setCart={setCart}
       currency={currency}
        cart={cart}
        cartId={cartId}
        setPrice_sum={setPrice_sum}
         price_sum={price_sum}
         cart_button={cart_button}
         setCart_button={setCart_button}
         setCounter={setCounter}
         counter={counter}
         setRefresh={setRefresh}
       />
     </Grid>
     <Grid className='linkNav-warper' >
<a onClick={()=>{setCurrentCategory(bakery_product)}} className='link'>Bakery</a>
     </Grid>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(cheese_product)}} className='link'>Cheese&Milk</a>
     </Grid>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(drinks_product)}} className='link'>Drinks</a>
     </Grid>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(kitchen_product)}} className='link'>Kitchen_tools</a>
     </Grid>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(meat_product)}} className='link'>Meat&Fish</a>
     </Grid>
     <Grid className='linkNav-warper'>
     <a onClick={()=>{setCurrentCategory(rice_product)}} className='link'>Rice&Grains</a> 
     </Grid>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(snacks_product)}} className='link'>Snacks</a>
     </Grid>
     <Grid className='linkNav-warper'>
     <a onClick={()=>{setCurrentCategory(sauces_product)}} className='link' to='/SaucesOil'>Sauces&Oil</a>
     </Grid>
    </>
      :<Grid className='row'>
        <SideNav
               setLoading={setLoading}
               setCart={setCart}
               currency={currency}
                cart={cart}
                cartId={cartId}
                setPrice_sum={setPrice_sum}
                 price_sum={price_sum}
                 cart_button={cart_button}
                 setCart_button={setCart_button}
                 setCounter={setCounter}
                 counter={counter}/>

           <Responsive_nav
            setCurrentCategory={setCurrentCategory}
            meat_product={meat_product}
            kitchen_product={kitchen_product}
            sauces_product={sauces_product}
            snacks_product={snacks_product}
            bakery_product={bakery_product}
            cheese_product={cheese_product}
            drinks_product={drinks_product}
            rice_product={rice_product}
           />
       </Grid>}
     </Grid> 
     
        </div>
    )
}
