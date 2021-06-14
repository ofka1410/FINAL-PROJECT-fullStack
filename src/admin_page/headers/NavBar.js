import React,{useState} from 'react'
import{Grid} from '@material-ui/core';
import './headers.css'
import Reservaition from './Reservaition'
import Responsive_nav from '../../user_page/userNav/Responsive_nav'
export default function NavBar({
  setCurrentCategory,
  meat_product,
  kitchen_product,
  sauces_product,
  snacks_product,
  bakery_product,
  cheese_product,
  drinks_product,
  rice_product,
  counter,
  setCounter,allReservaition,sum
  })
   {
    const [width,setWidth]=useState(window.innerWidth)
    React.useEffect(() => {
      function handleResize() {
      setWidth(window.innerWidth) 
      
  }
  
      window.addEventListener('resize', handleResize)
    })
  
    return (
     <Grid container justify="center" className='navBar'>
         {width>860?
         <>
         <Grid className='linkNav-warper' xs={1.5}>

     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
      <Reservaition
       allReservaition={allReservaition}
       counter={counter}
       setCounter={setCounter}
       sum={sum}
      />
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
<a onClick={()=>{setCurrentCategory(bakery_product)}} className='link'>Bakery</a>
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
     <a onClick={()=>{setCurrentCategory(cheese_product)}} className='link'>Cheese&Milk</a>
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
     <a onClick={()=>{setCurrentCategory(drinks_product)}} className='link'>Drinks</a>
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
     <a onClick={()=>{setCurrentCategory(kitchen_product)}} className='link'>Kitchen_tools</a>
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
     <a onClick={()=>{setCurrentCategory(meat_product)}} className='link'>Meat&Fish</a>
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
     <a onClick={()=>{setCurrentCategory(rice_product)}} className='link'>Rice&Grains</a> 
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
     <a onClick={()=>{setCurrentCategory(snacks_product)}} className='link'>Snacks</a>
     </Grid>
     <Grid className='linkNav-warper' xs={1.5}>
     <a onClick={()=>{setCurrentCategory(sauces_product)}} className='link' to='/SaucesOil'>Sauces&Oil</a>
     </Grid>
     </>
   :<>
   <Reservaition
    allReservaition={allReservaition}
    counter={counter}
    setCounter={setCounter}
    sum={sum}
   />
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
   /></>}
     </Grid> 
    )
}
