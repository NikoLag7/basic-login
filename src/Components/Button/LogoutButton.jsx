import React from 'react'
import style from './Button.module.css'
import {useAuth0} from '@auth0/auth0-react'



function LogoutButton() {
    const {logout} = useAuth0()
    return (
        <div>
            <button className={style.button} onClick={() => logout() }> Logout</button>
        </div>
    )
    
}
export default LogoutButton;
