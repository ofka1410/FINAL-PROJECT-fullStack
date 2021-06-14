import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
export default function Logged({token,setToken,setRefresh}) {
    return (
        <Router>
        
      <Switch>
      <Route
        path='/SignUp'>
      <SignUp
      />
        </Route>
        <Route
        path='/'>
              <LogIn
                 setToken={setToken}
                        token={token}
                        setRefresh={setRefresh}
               />
         </Route>
          </Switch>    
              </Router>  
    )
}
