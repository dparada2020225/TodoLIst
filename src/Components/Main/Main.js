import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from "../Nav/Nav"
import LoginButton from "../Login/Login"
import HomePage from "../HomePage/HomePage"


const Main = () => { 
  const { isAuthenticated } = useAuth0();
  return (
    <React.StrictMode>
        {isAuthenticated ? (
          <>
            <Nav/>
          </>
        ) : (
          <>
          <HomePage />
          <LoginButton />         
          </>
        )}  
    </React.StrictMode>
  );    
}

export default Main;