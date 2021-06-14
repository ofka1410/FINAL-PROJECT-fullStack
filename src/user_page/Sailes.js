import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import{Grid,Typography} from '@material-ui/core';
import './userMain.css'
export default function Sailes() {
    return (
        <div>
            <Grid>
            <img className='delivery' src='https://pomokata.com/wp-content/uploads/2019/07/pomodoro-delivery-logo.png'/>
            </Grid>
            <Grid>
<Typography className='delivery_description' variant='h5' >
    Free delivery up to 7 days.
    <br/>
    With the best price!.
</Typography>
            </Grid>
          
        </div>
    )
}
