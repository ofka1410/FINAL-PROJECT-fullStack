import React,{useState} from 'react'
import{Grid,Button,TextField} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import {domain} from '../../Confige'
import 'react-toastify/dist/ReactToastify.css';
export default function LoginForm({setToken,setRefresh}) {
    const [email,setEmail]=useState('')
    const[loading,setLoading]=useState(false)
    const [password,setPassword]=useState('')
    let history = useHistory();
    const signIn=async()=>{

        if(email===''){
            toast("email is requierd!")
        }
        if(password===''){
            toast("password is requierd!")
        }
        else{
        const obj={
            email:email,
            password:password
        }
        try{
          setLoading(true)
          const res = await fetch(`${domain}/user/${JSON.stringify(obj)}`)
          const data= await res.json()
         if(data.user){
           setToken(data.user)
           localStorage.setItem('userNow',JSON.stringify(data.user))
           if(data.user.email==='ofekme19@gmail.com'){
            history.push("/admin_page/AdminMain");
           }
           else{
           setRefresh(Math.random())
           history.push("/user_page/Main");
           }

         }
         else{
          toast(data.status) 
         }
         setLoading(false)
        }
        catch(err){
          console.log(err)
        }
          }
    }
    return (
       <Grid>
          <Grid className='logo-warper'>
           <img className='logo' src='https://res.cloudinary.com/df2pklfox/image/upload/v1622388960/vacaition/jcd0ibc1efv4nceobos2.png'/>
           <h5 className='logo-typography'>Supermarket</h5>
           </Grid>
           <Grid  className='input-warper'>
         <h2>Log in</h2>
           </Grid>
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
           <ToastContainer className='Toast'/>
           <Grid  className='input-warper'>
             <TextField
               className='textField_login'
              required
              label='email:'
              onChange={(e)=>{setEmail(e.target.value)}}
                >
                 </TextField>  
               </Grid>
               <Grid  className='input-warper'>
               <TextField
               type='password'
                 className='textField_login'
               onChange={(e)=>{setPassword(e.target.value)}}
               required
               label='password:'>
                 </TextField>  
                 </Grid>
                 <Grid>
                <p>Dont have an acount? 
                  <Link to='/SignUp'>Register now!</Link>
                    </p>
                 </Grid>
               <Grid  className='input-warper'>
               <Button
                className='Button' 
                variant='outlined'
                  onClick={signIn}>
                   Sign in
                   </Button>
               </Grid>
       </Grid>
    )
}
