import React from 'react'
import './admin_page/mainCSS.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import{Grid,Typography,IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Footer() {
    return (
       <Grid className='footerWarper'>
           <Grid className='icons-warper'>
           <Grid>
           <IconButton href='https://www.linkedin.com/in/ofek-meiry-396668212'>
       <LinkedInIcon className='icon-footer'/>
       </IconButton>
         </Grid>
         <Grid>
       <FacebookIcon className='icon-footer'/>
        </Grid>
         <Grid>
           <IconButton href='https://github.com/ofka1410/booking-project.git'>
        <GitHubIcon className='icon-footer'/>
       </IconButton>
         </Grid>
           </Grid>
            <Grid>
           <Typography className='copy'>
          <span className='symbol'>&#169;</span>  My final project of fullStack course by ofek meiry.
           
           </Typography>
       </Grid>
       </Grid>
    )
}
//