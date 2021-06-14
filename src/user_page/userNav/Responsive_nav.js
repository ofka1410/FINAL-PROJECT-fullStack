import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import{Grid} from '@material-ui/core';

const useStyles = makeStyles({
    list: {
      width:150,
    },
    fullList: {
      width: 'auto',
    },
  });
  

   
export default function Responsive_nav({ meat_product,
    kitchen_product,
    sauces_product,
    snacks_product,
    bakery_product,
    cheese_product,
    drinks_product,
    rice_product,setCurrentCategory}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
          <Grid className='linkNav-warper' >
<a onClick={()=>{setCurrentCategory(bakery_product)}} className='link'>Bakery</a>
     </Grid>
     </List>
     <List>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(cheese_product)}} className='link'>Cheese&Milk</a>
     </Grid>
     </List>
     <List>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(drinks_product)}} className='link'>Drinks</a>
     </Grid>
     </List>
     <List>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(kitchen_product)}} className='link'>Kitchen_tools</a>
     </Grid>
     </List>
    <List>
    <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(meat_product)}} className='link'>Meat&Fish</a>
     </Grid>
    </List>
    <List>
    <Grid className='linkNav-warper'>
     <a onClick={()=>{setCurrentCategory(rice_product)}} className='link'>Rice&Grains</a> 
     </Grid>
    </List>
     <List>
     <Grid className='linkNav-warper' >
     <a onClick={()=>{setCurrentCategory(snacks_product)}} className='link'>Snacks</a>
     </Grid>
     </List>
    <List>
    <Grid className='linkNav-warper'>
     <a onClick={()=>{setCurrentCategory(sauces_product)}} className='link' to='/SaucesOil'>Sauces&Oil</a>
     </Grid>
    </List> 
        </div>
      );
    return (
        <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color:'white'}}/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    )
}
