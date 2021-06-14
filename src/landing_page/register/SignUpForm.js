import React from 'react'
import '../register/register.css'
import{Grid,Button,TextField} from '@material-ui/core';
import {Link} from "react-router-dom";
import { Formik } from 'formik';
import {domain} from '../../Confige'
import {  toast,ToastContainer } from 'react-toastify';
 const SignUpForm=({setLoading})=> (
  
      <Formik
      initialValues={{firstName:'' ,lastName:'',email: '',city:'',street:'',role:'' }}
      validate={values => {
        const errors = {};
        if(!values.email){
          errors.firstName = 'First name is required';
        }
        if(!values.email){
          errors.lastName = 'last name is required';
        }
        if (!values.email) {
          errors.email = 'email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) 
        {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
          errors.password = 'password is required';
        }
        else if(values.password.length<5){
          errors.password = 'password must contain atleast 5 charechters';
        }
        if(!values.city){
          errors.city='City is requierd'
        }
        if(!values.street){
          errors.street='street is requierd'
        }
        if(values.role==='admin'){
          errors.street='only the administrator can approve'
        }
        return errors;
      }}
      
      onSubmit={async(values, { setSubmitting }) => {
        setLoading(true)
        setSubmitting(false);
     
        if(values.role !== 'admin'){
          const res2 = await fetch(`${domain}/user`,
          {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
                    first_name:values.firstName,
                    last_name:values.lastName,
                    email:values.email,
                    password:values.password,
                    city:values.city,
                    street:values.street,
                    role:values.role
                  }
                  )
                 }
               )
               const data= await res2.json()
               setLoading(false)
               if(data.status !== 'success'){
                toast('Email or password has already taken!')
                return;
               }
                else{
                  toast(`welcome ${values.firstName}. Move to Login for Shopping`)
                  return;
                }
                
               
                 }
                    else{
                         alert('Only Admin can give access to be admin')
                           setLoading(false)
                           return;
                                }
                           }} >
                      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        
      <form onSubmit={handleSubmit}>
          <ToastContainer style={{zIndex:'1000'}}/>
        <Grid className='form-warper'>
        <Grid className='logo-warper'>
           <img className='logo' src='https://res.cloudinary.com/df2pklfox/image/upload/v1622388960/vacaition/jcd0ibc1efv4nceobos2.png'/>
           <h5 className='logo-typography'>Supermarket</h5>
           </Grid>
          <Grid className='input-warper'>
            <h2>SignUp now</h2>
          </Grid> 
       
          <Grid className='input-warper' >
          <TextField 
          className='textField'
          required
          type='text'
          label="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          variant='outlined'
          id="firstName">
          </TextField>
          <br/>
          <p className='validate-message'>{errors.firstName && touched.firstName && errors.firstName}</p>
         </Grid>
         <Grid className='input-warper'>
         <TextField 
         className='textField'
         label="Last Name"
           required
         variant='outlined'
         id='lastName'
         onChange={handleChange}
             onBlur={handleBlur}
          value={values.lastName}
                    >
         </TextField>
         <br/>
         <p className='validate-message'>{errors.lastName && touched.lastName && errors.lastName}</p>
         </Grid> 
         <Grid className='input-warper'>
         <TextField 
          className='textField'
          label="email"
           required
         variant='outlined'
          id='email' 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          > 
           <br/>         
         </TextField>
         <br/>
         <p className='validate-message'>{errors.email && touched.email && errors.email}</p>
         </Grid> 
         <Grid className='input-warper'>
         <TextField 
           className='textField'
           required
           type='password'
           label="password"
           variant='outlined'
            id='password' 
           onChange={handleChange}
           onBlur={handleBlur}
          value={values.password}
           >
          </TextField>
          <br/>
          <p className='validate-message'>{errors.password && touched.password && errors.password}</p>
         </Grid> 
         <Grid className='input-warper'>
         <TextField 
           className='textField'
           required
           label='City'
         variant='outlined'
         id='city' 
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.city}
         >
         </TextField>
         <br/>
        <p className='validate-message'> {errors.city && touched.city && errors.city}</p>
         </Grid> 
         <Grid className='input-warper'>
         <TextField 
           className='textField'
         label='Street'
           required
          variant='outlined'
           id='street'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.street}
           >
          </TextField>
          <br/>
         <p className='validate-message'> {errors.street && touched.street && errors.street}</p>
          </Grid>
          <Grid className='input-warper'>
            <select 
            className='role'
            onChange={handleChange}
             onBlur={handleBlur}
             value={values.role}
             id='role'>
            <option value='admin'>
             Admin
            </option>
            <option value='costumer'>
             costumer
            </option>
            </select>
            <br/>
            <div>
         <p className='validate-message'>{errors.role && touched.role && errors.role}</p>
         </div>
          </Grid>
          <Grid>
                <p>Already have an acount? 
                  <Link to='/SignIn'>Login</Link>
                    </p>
                 </Grid>
               <Grid className='input-warper'>
                   <Button 
                     className='Button'
                      variant='outlined'
                        type="submit"
                          type="submit" disabled={isSubmitting}
                                >SignUp</Button></Grid>
                                   </Grid>
                                 </form>
      )}
                  </Formik>
        )
        export default SignUpForm;

  