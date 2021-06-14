import React,{useState,useEffect} from 'react'
import MainHeader from '../admin_page/headers/MainHeader'
import Loader from "react-loader-spinner";
import Nav from './userNav/Nav'
import Footer from '../Footer'
import{Grid} from '@material-ui/core';
import './userMain.css'
import Card_Product from './product_card/Card_Product'
import Search from '../admin_page/sideBar/Search'
import Currency from './product_card/Currency'
import WelcomeModal from './userNav/welcomModal/WelcomeModal'
import Sailes from './Sailes'
import {domain} from '../Confige'
export default function Main({token,setToken}) {
   //toggle and loading states
  const[cart_button,setCart_button]=useState('drawer-button')
    const [counter,setCounter]=useState(0)
    const[refresh,setRefresh]=useState(0)
    const[loading,setLoading]=useState(false)

   //categories states
   const [allProduct,setAllproduct]=useState([])
   const [kitchen_product,setKitchen_product]=useState([])
    const [meat_product,setMeat_product]=useState([])
    const [sauces_product,setSauces_product]=useState([])
    const [snacks_product,setSnacks_product]=useState([])
    const [bakery_product,setBakery_product]=useState([])
    const [cheese_product,setCheese_product]=useState([])
    const [drinks_product,setDrinks_product]=useState([])
    const [rice_product,setRice_product]=useState([])
    const[currentCategory,setCurrentCategory]=useState([])
    
    //cart values
    const[cart,setCart]=useState([])
    const[cartId,setCartId]=useState(0)
    const [amount,setAmount]=useState(1)
    const [price_sum,setPrice_sum]=useState(0)
    //currency states
    const [currency,setCurrency]=useState('Dollar')

    useEffect(async() => {
      setLoading(true)
         const res= await fetch(`${domain}/Product`)
          const data = await res.json()
            console.log(data)
            setAllproduct(data.all_product)
            setKitchen_product(data.Kitchen_product)
            setMeat_product(data.Meat_product)
           setDrinks_product(data.drinks_product)
           setCheese_product(data.cheese_product)
           setRice_product(data.rice_product)
           setSauces_product(data.Sauces_product)
          setBakery_product(data.bakery_product)
           setSnacks_product(data.Snacks_product)
            setCurrentCategory(data.Meat_product)
               const user =JSON.parse(localStorage.getItem('userNow'))
              const res2 = await fetch(`${domain}/cart/${user.id}`)
             const carts= await res2.json()
               setCart(carts.myCart)
               setCartId(carts.userCart.id)
                setPrice_sum(carts.sum)
                 setLoading(false)

},[refresh])
    return (
        <div>
            {loading==true?
        <div className='loading'>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        
      />
      </div>
       :<></> }
       <Grid className='header-sticky'>
       <MainHeader
          setToken={setToken}
          />
       <Nav
            setCurrentCategory={setCurrentCategory}
            meat_product={meat_product}
            kitchen_product={kitchen_product}
            sauces_product={sauces_product}
            snacks_product={snacks_product}
            bakery_product={bakery_product}
            cheese_product={cheese_product}
            drinks_product={drinks_product}
            rice_product={rice_product}
            cart={cart}
            setCart={setCart}
            amount={amount}
            cartId={cartId}
            currency={currency}
            setPrice_sum={setPrice_sum}
            price_sum={price_sum}
            cart_button={cart_button}
            setCart_button={setCart_button}
            setCounter={setCounter}
              counter={counter}
              setRefresh={setRefresh}
          /> 
       </Grid>
       
         <WelcomeModal
         cart={cart}
         cartId={cartId}/>

          <Grid className='shop'>
              <Grid className='elements-warper'>
              <Grid className='search_warper'>
            <Sailes/>
              </Grid>
              <Grid className='currency'>
              <Search
                setLoading={setLoading}
                  allProduct={allProduct}
                   setCurrentCategory={setCurrentCategory}/>
              </Grid>
              <Grid className='currency'>
             <Currency
             setCurrency={setCurrency}
             />
              </Grid>
            
             <Card_Product
             currency={currency}
             currentCategory={currentCategory}
             cartId={cartId}
              cart={cart}
              setCart={setCart}
              setLoading={setLoading}
              amount={amount}
              setAmount={setAmount}
              setPrice_sum={setPrice_sum}
              setCart_button={setCart_button}
              setCounter={setCounter}
              counter={counter}
             />
              </Grid>
          </Grid>
          <Footer/>
        </div>
    )
}
