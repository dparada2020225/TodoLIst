import {Nav} from "../Nav/Nav"
import { useAuth0 } from '@auth0/auth0-react'
import {LoginButton} from "../Login/Login"

import React from 'react'
import './Main.css'


const Main = () => { 
    // return (   
    //     <React.StrictMode>
    //         <LoginButton />
    //         <Nav/>
            
    //     </React.StrictMode>
    // )

    const { isAuthenticated } = useAuth0();

  return (
    <React.StrictMode>
    <div className="App">
      <header className="App-header">
        
        {isAuthenticated ? (
          <>
            {/* <Profile />
            <LogoutButton /> */}
            <Nav/>
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
    </React.StrictMode>
  );    
}

export default Main;