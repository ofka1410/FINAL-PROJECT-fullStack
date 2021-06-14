import React from 'react'
import './landing_page.css'
import Logged from './register/Logged'
import{Grid} from '@material-ui/core';

export default function LandingPage({token,setToken,setRefresh}) {
    return (
        <Grid className='landing-warper'>
            <Grid className='groupImg-warper-up'>
           <Grid id='first' className='pic-warper'>
           </Grid>
           <Grid id='second' className='pic-warper'>
           </Grid>
           </Grid>
           <Grid className='groupImg-warper-down'>
           <Grid id='third' className='pic-warper'>
               </Grid>
               <Grid id='four' className='pic-warper'>
               </Grid>
               </Grid>
             <Logged 
             setRefresh={setRefresh}
             token={token}
             setToken={setToken}/> 
           </Grid>
    )
}
