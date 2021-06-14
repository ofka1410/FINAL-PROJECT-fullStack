import React from 'react'
import{Grid,Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import './headers.css'

export default function MainHeader({setToken}) {
    const logOut = ()=>{
        localStorage.clear()
        setToken() 
    }
    return (
        <Grid className='main-header'>
            <Grid className='logo-warper'>
           <img className='logo' src='https://res.cloudinary.com/df2pklfox/image/upload/v1622388960/vacaition/jcd0ibc1efv4nceobos2.png'/>
           <h5 className='logo-typography'>Supermarket</h5>
           </Grid>
            <Grid>
            <Button onClick={logOut} className='logOut' variant='outlined'>
                Log out
                <ExitToAppIcon/>
            </Button>
           </Grid>
        </Grid>
    )
}
