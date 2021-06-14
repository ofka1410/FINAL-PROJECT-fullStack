import React,{useState} from 'react'
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Dialog,AppBar,Slide,Grid,DialogActions} from '@material-ui/core'
import MainHeader from '../../../admin_page/headers/MainHeader'
import Search from './Search'
import Pay_form from './Pay_form'
import './pay.css'
const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide  ref={ref} {...props} />;
  });

export default function MovePayment({cart,cartId,currency,price_sum,setRefresh}) {
  const[loading,setLoading]=useState(false)
    const classes = useStyles();
    const [opend, setOpend] = React.useState(false);
    const stopPropagationForTab = (event) => {
      if (event.key) {
       event.stopPropagation();
      }
      if(event.key==='submit'){
        event.stopPropagation();
      }
    };
  
    const handleClickOpen = () => {
      setOpend(true);
      console.log(cart)
    };
  
    const handleClose = () => {
      setOpend(false);
    };
  
   

    return (
        <>
        <Button onClick={handleClickOpen} variant='outlined'>Move to payment</Button>
        <Dialog onKeyDown={stopPropagationForTab}  fullScreen open={opend}  TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
        <MainHeader/>
        </AppBar>
        <Grid className='credit-warper'>
            <h1 className='payment-header'>Payment</h1>
        </Grid>
       <Grid className='payment-page-warper'>
           <Grid xs={5}  className='coloum-warper'>
               <Grid>
               <Button className='back_shop'  onClick={handleClose} variant='outlined'>Back to shop</Button>
               </Grid>
               <Grid>
               <Search
               cart={cart}
               price_sum={price_sum}
               currency={currency}
               />
               </Grid>
          <Grid style={{width:'200px',marginRight:'20px',marginTop:'30px',marginBottom:'10px'}}>
       <p className='total-price'>Total price: 
         {currency==='Shekel'?
         <span className='total'>{price_sum * 3.25} &#8362;</span>
         :currency=='Euro'?
         <span className='total'>{price_sum * 0.8} &#8364;</span>
         : <span className='total'>{price_sum} $</span>
         }
       </p>
          </Grid>
               </Grid>
              <Grid className='coloum-warper' xs={5}>
           <Pay_form
            price_sum={price_sum}
            setLoading={setLoading}
            setRefresh={setRefresh}
            setOpend={setOpend}
            cart={cart}
           />
           </Grid>
       </Grid>
      </Dialog>
      </>
    )
}
