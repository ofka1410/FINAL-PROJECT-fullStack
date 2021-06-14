import React,{useState} from 'react'
import '../register/register.css'
import '../register/SignUpForm'
import{Modal,Backdrop,Fade} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignUpForm from '../register/SignUpForm';

import Loader from "react-loader-spinner";
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
export default function SignUp() {

    const classes = useStyles();
  const [open,setOpen] = React.useState(true);
  const[loading,setLoading]=useState(false)


    return (
        <div>
            
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}

        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
          {loading==true?
        <div className='loading'>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
      </div>
       :<></> }
     
           <SignUpForm
           setLoading={setLoading}
           />
          </div>
        </Fade>
        </Modal>
        </div>
    )
}
