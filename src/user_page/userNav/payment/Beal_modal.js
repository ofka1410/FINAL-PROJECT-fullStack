import React from 'react'
import {Dialog, DialogActions,DialogContent,Button,Grid,DialogContentText,DialogTitle} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
export default function Beal_modal({setOpen,open,setRefresh,setOpend,cart,price_sum}) {
   
     const file= ()=>{
     const fileArr=['Your recipet:']
     let element =document.createElement("a")
     cart.forEach((product,i)=> fileArr.push(`${i+1}.${product.amount}.${product.product.product_name} cost ${product.total_price}`))
     fileArr.push(`Total order price: ${price_sum}`)
     const file = new Blob([fileArr.join('\n')], {type: 'text/plain'})
     element.href= URL.createObjectURL(file)
     element.download ="myFile.txt"
     element.click()
    }
   
  const handleClose = () => {
    setOpen(false);
    setRefresh(Math.random())
    setOpend(false)
  };

    return (
        <div>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Your purchase was successful!</DialogTitle>
        <DialogContent>
          <DialogContentText style={{marginLeft:'40px'}} id="alert-dialog-description">
          <Button onClick={file}>Your recipet <GetAppIcon/></Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='button-warper'>
          <Button variant='outlined' className='back_shop' onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      );
}
