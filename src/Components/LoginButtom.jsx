import React from 'react';
import './LoginButtom.css'
import { useAuth0 } from '@auth0/auth0-react';


function LoginButtom() {
  
  const {loginWithRedirect} = useAuth0();
  return (
    <div>
      
      <button onClick={()=>loginWithRedirect()}>Login</button>
    </div>
  )

}

export default LoginButtom;


