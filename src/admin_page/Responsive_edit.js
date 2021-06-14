import React from 'react'
import clsx from 'clsx';
import { makeStyles,Drawer,Button,Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Search from './sideBar/Search'
import Form from './sideBar/Form'
import './sideBar/sideBar.css'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function Responsive_edit({    productName,
    setProductName,
    img,
    setImg,
    price,
    setPrice,
    category,
    setCategory,
    itemId,
    meat_product,
    rice_product,
    setRefresh,
      allProduct,
    setCurrentCategory,
setLoading}) {
    
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
     
    });
    const stopPropagationForTab = (event) => {
        if (event.key) {
         event.stopPropagation();
        }
        if(event.key==='submit'){
          event.stopPropagation();
        }
      };
    const toggleDrawer = (anchor, open) => (event) => {
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
      onClick={stopPropagationForTab}
    >
        <Grid style={{background:'rgb(217, 232, 245)',paddingTop:'10px'}}>
        <Grid  className='search-warper'>
          <Search
          setLoading={setLoading}
          allProduct={allProduct}
          setCurrentCategory={setCurrentCategory}
          />
            </Grid>
            <Grid style={{paddingBottom:'10px'}}> 
              
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
   
    </div>
  );

    return (
        <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='sticky-button' onClick={toggleDrawer(anchor, true)}><EditIcon/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    )
}
