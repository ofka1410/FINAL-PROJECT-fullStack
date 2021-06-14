import React from 'react'
import MovePayment from './payment/MovePayment'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import clsx from 'clsx';
import { makeStyles,Grid,Button,List,Divider,Drawer, Badge } from '@material-ui/core';
import Products from './products_components/Products'
import "./navUser.css"
import "./navUser.css"
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      
    },
  },
  list: {
    maxWidth: 350,
    minWidth:260
   },
   fullList: {
     width: 'auto',
   }
}));
  
export default function SideNav({cart,cartId,currency, setPrice_sum,price_sum,setCart,setLoading ,
  cart_button,setCart_button, setCounter,
  counter,setRefresh}) {
    const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setCart_button("drawer-button")
    setCounter(0)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
     
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Grid className='logo-warper'>
           <img className='logo' src='https://res.cloudinary.com/df2pklfox/image/upload/v1622388960/vacaition/jcd0ibc1efv4nceobos2.png'/>
           <h5 className='logo-typography'>Supermarket</h5>
           </Grid>
      </List>
      <Divider />
      <Grid className='cart-warper'>
       {cart.length>0?
        cart.map(item=>{
          return(
            <Products
            currency={currency}
            item={item}
            cartId={cartId}
            setPrice_sum={setPrice_sum}
            setCart={setCart}
            setLoading={setLoading}
            />
          )
         
        })
       :<Grid>
         <h3>Cart is empty...</h3>
         </Grid>}

      </Grid>
      <Grid className='payment'>
      <Grid style={{marginBottom:"10px",marginTop:'10px'}}>
       <p className='total-price'>Total price: 
         {currency==='Shekel'?
         <span className='total'>{price_sum * 3.25} &#8362;</span>
         :currency=='Euro'?
         <span className='total'>{price_sum * 0.8} &#8364;</span>
         : <span className='total'>{price_sum} $</span>
         }
       </p>
        </Grid>
        <Grid style={{marginBottom:"10px"}}>
        <MovePayment
         currency={currency}
         cartId={cartId}
         cart={cart}
         price_sum={price_sum}
         setLoading={setLoading}
         setRefresh={setRefresh}
        />
        </Grid>
        <Grid className='credit-warper'>
          <Grid>
         <img src='https://www.ynet.co.il/PicServer5/2017/11/20/8166657/816661501000100640360no.jpg' 
         className='credit-img'/>
          </Grid>
          <Grid>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png' 
          className='credit-img'/>
            </Grid>
            <Grid>
            <img src='https://www.to-mix.co.il/wp-content/uploads/2021/03/%D7%90%D7%9E%D7%A8%D7%A7%D7%99%D7%9F.jpeg' className='credit-img'/>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      {['Cart'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={cart_button} onClick={toggleDrawer(anchor, true)}>{anchor}
          {counter>0?
          <Badge className={classes.root} color="error" badgeContent={counter}>
            <ShoppingCartOutlinedIcon className={cart_button}/>
            </Badge>  
          : <ShoppingCartOutlinedIcon className={cart_button}/>}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
