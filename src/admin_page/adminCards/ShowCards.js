import React,{useState} from 'react'
import './cards.css'
import { makeStyles } from '@material-ui/core/styles';
import Delete_icon from './Delete_icon'
import{Grid,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Card} from '@material-ui/core';

    const useStyles = makeStyles({
        root: {
          maxWidth: 350,
          minWidth:260,
        
        },
        media: {
          height: 200,
        },
      });
      
export default function ShowCards({currentCategory,setCategory,setPrice, setImg,setProductName,setItemId,setRefresh,setLoading}) {
    const classes = useStyles();
    const [hover,setHover]=useState(false)
    const edit=(item)=>{
      console.log(item)
      setCategory(item.product.category)
      setPrice(item.product.price)
      setImg(item.product.img)
      setProductName(item.product.product_name)
      setItemId(item.product.id)
    }

    const likeHoverover =()=>{
      setHover(true)
      
  }
  const notHover =()=>{
      setHover(false)
     
  
  }
    return (
        <Grid 
        container  
        spacing={1}
         className='cards-warper'
         onMouseLeave={notHover}
         onMouseEnter={likeHoverover}>
           {currentCategory.length>0?
           currentCategory.map(item=>{
               return(
                   <Grid className='card' xs={4}>
                <Card className={classes.root}>
                {hover==true?
                      <div><Delete_icon
                      item={item}
                      setLoading={setLoading}
                      setRefresh={setRefresh}
                      currentCategory={currentCategory}
                      /></div>
                      :<></>
                     }
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.product.img}
                    title="Contemplative Reptile"
                  />
                  <CardContent className='content-card'>
                    <Typography className='product_name' gutterBottom variant="h5" component="h4">
                      {item.product.product_name}
                    </Typography>
                    <Typography className='price'  variant="h6" color="textSecondary" component="h6">
                    price:  {item.product.price} $
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions id='warper-edit' className='content-card '>
                  <Button 
                  className='edit-button' 
                  variant='outlined'
                   size="small" 
                   color="primary"
                   onClick={()=>{edit(item)}}
                   >
                   Edit
                  </Button>
                 
                </CardActions>
              </Card>
              </Grid>
               )
           })
           :<></>
           } 
        </Grid>
    )
}
