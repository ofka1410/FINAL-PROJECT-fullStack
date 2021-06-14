import React,{useState,useEffect} from 'react'
import {Grid,TextField} from '@material-ui/core'
import { Button } from '@material-ui/core'
import Beal_modal from './Beal_modal'
import Loader from "react-loader-spinner";
import './pay.css'
import {domain} from '../../../Confige'
export default function Pay_form({price_sum,setRefresh,setOpend,cart}) {
    const [city,setCity]=useState('')
    const [street,setStreet]=useState('')
    const [shipping,setShipping]=useState('')
    const[credit,setCredit]=useState(0)
    const [creditType,setCreditType]=useState('visa')
    const[id,setId]=useState(0)
    const [open,setOpen]=useState(false)
    const[loading,setLoading]=useState(false)
    useEffect(() => {
        const user =JSON.parse(localStorage.getItem('userNow'))
      setCity(user.city)
      setStreet(user.street)
      setId(user.id)
    },[])
    const checkValidation = async(e)=>{
      e.preventDefault()
      var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
      var amexpRegEx = /^(?:3[47][0-9]{13})$/;
 
      if(creditType==='visa'){
      if( visaRegEx.test(credit)=== false){
        alert("Please provide a valid Visa number!"); 
      }
      else{
        reservaition()
      }
      }
      else if(creditType==='masterCard'){
        if (mastercardRegEx.test(credit) === false){ 
          alert("Please provide a valid MasterCard number!");  
          }  
          else{
            reservaition()
          }
      }
      else{
        if(amexpRegEx.test(credit) === credit){ 
          alert("Not a valid America Express number!");  
          }  
          else{
            reservaition()
          }
      }
    }
    const reservaition=async(e)=>{
     setLoading(true)
      const timeElapsed = Date.now();
       const today = new Date(timeElapsed);
      const res2 = await fetch(`${domain}/payment`,
      {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
              {
            user_id:id,
            total_price:price_sum,
            city:city,
            street:street,
            delivery_date:shipping,
            order_date:today.toDateString(),
            credit_numbers:credit.slice(-4)
              }
              )
             }
           )
           const data= await res2.json()
          
           if(data.status==='your order has been succesed'){
             setOpen(true)
            
           }
           else if(data.status=== 'We sorry but the Shipping date is full, Please choose another date.'){
             alert(data.status)
           }
           setLoading(false)
    }

    return (
      <Grid className='order-warper'>
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
        <form onSubmit={checkValidation}>
          <Grid className='input-warper'>
          <Grid>
          <label className='label'>City:</label>
          </Grid>
          <Grid>
           <TextField 
           required
           value={city}
           onChange={(e)=>{setCity(e.target.value)}}
           label='City'
           ></TextField>
           </Grid>
           </Grid>
           <Grid className='input-warper'>
          <Grid>
          <label className='label'>Street:</label>
          </Grid>
          <Grid>
           <TextField
              onChange={(e)=>{setStreet(e.target.value)}}
              label='Street'
              required
            value={street}></TextField>
           </Grid>
           </Grid>
           <Grid className='input-warper'>
          <Grid>
          <label className='label'>Shipping Date:</label>
          </Grid>
          <Grid>
           <TextField
           onChange={(e)=>{setShipping(e.target.value)}}
           required
            type='date' ></TextField>
           </Grid>
           </Grid>
           <Grid className='input-warper'>
          <Grid>
          <label className='label'>Credit card:</label>
          </Grid>
          <Grid>
          <select required onChange={(e)=>{setCreditType(e.target.value)}}>
            <option value='visa'>
            Visa
            </option>
            <option value='masterCard'>
              MasterCard
              </option>
              <option value='american express'>
              American express
              </option>
          </select>
           </Grid>
          <Grid>
           <TextField
           onChange={(e)=>{setCredit(e.target.value)}}
           required
            label='credit number'
            type='number'
            ></TextField>
           </Grid>
           </Grid>
              <Grid>
            <Button type='submit' className='back_shop' variant='outlined'>Order</Button>
              </Grid>
               </form>
               <Beal_modal
                setOpen={setOpen}
                 open={open}
                  setRefresh={setRefresh}
                   setOpend={setOpend}
                    cart={cart}
                    price_sum={price_sum}
                                         />
                                  </Grid>
    )
}
