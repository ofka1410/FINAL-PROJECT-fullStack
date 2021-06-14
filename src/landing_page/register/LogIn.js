import React from 'react'
import '../register/register.css'
import LogInForm from './LoginForm'
import{Modal,Backdrop,Fade} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  

export default function LogIn({setToken,setRefresh}) {

    const classes = useStyles();
  const [open, setOpen] = React.useState(true);

    return (
     <>
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
           <LogInForm
           setRefresh={setRefresh}
           setToken={setToken}
           />
          </div>
        </Fade>
        </Modal>
    </>
          )
}
