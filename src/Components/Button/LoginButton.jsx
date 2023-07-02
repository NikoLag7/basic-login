import React from 'react';
import style from './Button.module.css'
import { useAuth0 } from '@auth0/auth0-react';


function LoginButton() {
  
  const {loginWithRedirect} = useAuth0();
  return (
    <div>
      
      <button className={style.button} onClick={()=>loginWithRedirect()}>Login</button>
    </div>
  )

}

export default LoginButton;


