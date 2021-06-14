import React,{useState,useEffect} from 'react'
import MainHeader from './headers/MainHeader'
import NavBar from './headers/NavBar'
import './mainCSS.css'
import Search from './sideBar/Search'
import Form from './sideBar/Form'
import Loader from "react-loader-spinner";
import Responsive_edit from './Responsive_edit'
import {
    BrowserRouter as Router,
    } from "react-router-dom";
    import{Grid,Container} from '@material-ui/core';
    import ShowCards from './adminCards/ShowCards'
     import Footer from '../Footer'
     import {domain} from '../Confige'

export default function AdminMain({setToken}) {
  //--------all states of admin--------
    const[loading,setLoading]=useState(false)
    const [refresh,setRefresh]=useState(0)
    const [width,setWidth]=useState(window.innerWidth)
        //arrays of products
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
    const[allReservaition,setAllReservaition]=useState([])
    const[counter,setCounter]=useState(0)
    //inputs states
    const [productName,setProductName]=useState("")
    const [img,setImg]=useState('')
    const [price,setPrice]=useState(0)
    const [category,setCategory]=useState('')
    const[itemId,setItemId]=useState(0)
    const [sum,setSum]=useState(0)
 useEffect(async() => {
  setLoading(true)
 const res= await fetch(`${domain}/Product`)
 const data = await res.json()
 setKitchen_product(data.Kitchen_product)
 setMeat_product(data.Meat_product)
 setDrinks_product(data.drinks_product)
 setCheese_product(data.cheese_product)
 setRice_product(data.rice_product)
 setSauces_product(data.Sauces_product)
 setBakery_product(data.bakery_product)
 setSnacks_product(data.Snacks_product)
setCurrentCategory(data.Meat_product)
setAllproduct(data.all_product)
const res2 = await fetch(`${domain}/reservaition`)
const data2 = await res2.json()
console.log(data2.allReservaition)
console.log(data2.sum)
setAllReservaition(data2.allReservaition)
setCounter(data2.counter)
setSum(data2.sum)

setLoading(false)
function handleResize() {
  setWidth(window.innerWidth) 
  }
  window.addEventListener('resize', handleResize)

}, [refresh])

    return (
      <Router className='all-admin'>
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
          <header>
          <MainHeader
          setToken={setToken}
          />
          </header>
        <Grid className='main-warper'>
          {width>450?
           <Grid className='sideBar' xs={0} sm={3}  md={3} lg={3} xl={3}>
           <Grid className='search-warper'>
          <Search
          setLoading={setLoading}
          allProduct={allProduct}
          setCurrentCategory={setCurrentCategory}
          />
            </Grid>
            <Grid className='sticky-form'> 
              
          <Form
          setLoading={setLoading}
          productName={productName}
          setProductName={setProductName}
          img={img}
          setImg={setImg}
          price={price}
          setPrice={setPrice}
          category={category}
           setCategory={setCategory}
           itemId={itemId}
           setCurrentCategory={setCurrentCategory}
           setRefresh={setRefresh}
          />
            </Grid>
            </Grid>
         
       :  
       <Grid className='sideBar' xs={2} sm={3}  md={3} lg={3} xl={3}>
       <Responsive_edit
       setLoading={setLoading}
       allProduct={allProduct}
       setCurrentCategory={setCurrentCategory}
       productName={productName}
       setProductName={setProductName}
       img={img}
       setImg={setImg}
       price={price}
       setPrice={setPrice}
       category={category}
        setCategory={setCategory}
        itemId={itemId}
        setCurrentCategory={setCurrentCategory}
        setRefresh={setRefresh}
       />
       </Grid>    }
  
       <Grid xs={10} sm={9} md={9}  lg={9} xl={9} className='nav_item_warper'>
       <Grid className='sticky-nav'>
      <NavBar
      allReservaition={allReservaition}
      counter={counter}
      setCounter={setCounter}
      setCurrentCategory={setCurrentCategory}
      meat_product={meat_product}
      kitchen_product={kitchen_product}
      sauces_product={sauces_product}
      snacks_product={snacks_product}
      bakery_product={bakery_product}
      cheese_product={cheese_product}
      drinks_product={drinks_product}
      rice_product={rice_product}
      sum={sum}
      />
       </Grid>
       <Container maxWidth="xl" className='container-cards'>
        <ShowCards
        setCategory={setCategory}
        setPrice={setPrice}
        currentCategory={currentCategory}
        setImg={setImg}
        setProductName={setProductName}
        setItemId={setItemId}
        setRefresh={setRefresh}
        setLoading={setLoading}
        />
        </Container>
       </Grid>
        </Grid>
        <Footer/>
      </Router>
   
    )
}
