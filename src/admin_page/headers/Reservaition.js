import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../headers/headers.css'
import Badge from '@material-ui/core/Badge';
import {Button,Dialog,ListItemText,
    ListItem,List,Divider,AppBar,Toolbar,IconButton,Typography,Slide,Grid,Tooltip} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function Reservaition(  counter) {
  const [allReservaition,setAllReservaition]=useState([])
  const [sum,setSum]=useState(0)
  const[alert,setAlert]=useState(0)
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  useEffect(async()=>{
   setAlert(counter.counter)
  },)
    
  



  const handleClickOpen = () => {
    setAlert(0)
     setAllReservaition(counter.allReservaition)
     setSum(counter.sum)
     
    setOpen(true);
  };

  const handleClose = () => {
    setAlert(0)
    setOpen(false);
   
  };

  return (
    <div>
      
         <BootstrapTooltip title="Reservaitions List">
      <Button className='reservaition-icon' variant="outlined" color="primary" onClick={handleClickOpen}>
          {alert>0?
          <Badge badgeContent={alert} color="secondary">
          <MailOutlineIcon style={{color:'white'}}/>
          </Badge>
          :<MailOutlineIcon style={{color:'white'}}/>
          }
      
      </Button>
     
      </BootstrapTooltip>
     
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography style={{color:"wheat"}} variant="h6" className={classes.title}>
             Reservaitions
            </Typography>
            <Typography variant="h6" className={classes.title}>
            Total-sailes: {sum} $
            </Typography>
            
          </Toolbar>
        </AppBar>
        <List>
            {allReservaition!==undefined && allReservaition.length>0?
            allReservaition.slice(0).reverse().map(item=>{
                return(
                    <Grid className='all-list'>
                    <ListItem className='list-warper'>
                     <Grid>
                     <ListItemText className='List'><span className='reser-span'>Name:</span> {item.Cart_user.user.first_name} {item.Cart_user.user.last_name}.</ListItemText>
                     </Grid>
                     <Grid>
                     <ListItemText className='List'><span className='reser-span'>Delivery-Adress:</span> {item.city}, {item.street}.</ListItemText>
                     </Grid>
                     <Grid>
                     <ListItemText className='List'> <span className='reser-span'>Total-price:</span> {item.total_price} $.</ListItemText>
                     </Grid>
                     <Grid>
                     <ListItemText className='List'> <span className='reser-span'>Shipping-Date:</span>
                      {  item.delivery_date.substring(0, item.delivery_date.length -14)}.</ListItemText>
                     </Grid>
                    </ListItem>
                    <Divider />
                    </Grid>
                )
            })
            :<p>No reservaition...</p>}
        </List>
      
      </Dialog>
    </div>
  );
}
