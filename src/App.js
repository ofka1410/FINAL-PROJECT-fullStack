import React,{useState,useEffect} from 'react'
import LandingPage from './landing_page/LandingPage'
import './App.css';
import Main from './user_page/Main'
import AdminMain from './admin_page/AdminMain'
function App() {
  const[token,setToken]=useState()
  const [refresh,setRefresh]=useState()
  useEffect(async()=>{
    const user= JSON.parse(localStorage.getItem('userNow'))
     if (user!==null){
     setToken(user)
     }
    },[refresh])
    if(!token){
      return (
        <div>
       <LandingPage
        token={token}
        setToken={setToken}
        setRefresh={setRefresh}
       />
        </div>
         );
    }
    else if(token.first_name==='admin'){
      return (
        <div>
       <AdminMain
       token={token}
       setToken={setToken}
       />
        </div>
         ); 
    }
    else{
      return (
        <div>
       <Main
       token={token}
       setToken={setToken}
       />
        </div>
         ); 
    }
 
}

export default App;
