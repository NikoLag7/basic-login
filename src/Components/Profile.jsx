import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"

const Profile = () => {
  
    const {user , isAuthenticated, isLoading} = useAuth0();
    
    if (isLoading){
        return <div>Loading...</div>
    }

    console.log(JSON.stringify.user);
    return (
    isAuthenticated &&(
    <div className={styles.container}>
        
        <img src={user.picture} alt={user.name}/>
        
        <div className={styles.textContent}>
            
            <div className={styles.textContent1}>                
                <p>Nombre</p>
                <p>Usuario</p>
                <p>Correo electronico</p>
                <p>Apellido</p>
            </div>
            <div className={styles.lineaDivisoria}></div>
            <div className={styles.textContent2}>                 
                <p>{user.name}</p>
                <p>{user.nickname}</p>
                <p>{user.email}</p>
                <p>{user.family_name}</p>
            </div>

        </div>

       
    </div>
    )
    
  )
}

export default Profile