import React,{useEffect,useState} from 'react'
import './welcomeModal.css'
import '../payment/pay.css'
import 
{Button,
Dialog,
DialogActions,
DialogContent,
DialogTitle,
useMediaQuery,
useTheme} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function WelcomeModal({cart,cartId}) {
    const [open, setOpen] = React.useState(false);
    const [user,setUser]=useState('')
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
    const user= JSON.parse(localStorage.getItem('userNow'))
    setUser(user.first_name)
      if(cartId>0){
        setOpen(true)
      } 
     }, [cartId])

  

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
     
      <Dialog
      className='welcome-warper'
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Welcome {user}</DialogTitle>
        <DialogContent>
        {cart.length>0?
        <div>
           <h5 className='welcome-header'>Your shopping cart is still open </h5>
           <p className='paragraph'>
          
        
           You can find the cart at the
             <span className='span'><ShoppingCartOutlinedIcon className='cart-icon'/></span> 
             icon in the nav bar.
             <br/>
             Or click on the <span className='span'><  HighlightOffIcon className='delete-icon'/></span>
             and delete the products you dont want.
             </p> 
        </div>
         :<div>
        <h5 className='welcome-header'>Welcome to our shop, Start a resvaition now</h5>
        </div>}   
      
        </DialogContent>
        <DialogActions>
          <Button className='button-warper' onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}
