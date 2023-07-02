import './App.css';
import  LoginButton  from "./Components/Button/LoginButton";
import LogoutButton from "./Components/Button/LogoutButton";
import Profile from './Components/Profile';
import {useAuth0 } from "@auth0/auth0-react";

function App() {
  
  const {isAuthenticated,isLoading} = useAuth0()

    if (isLoading) {
      return <div>cargando ...</div>;
    }
  
  return (


    <div className="App">
      

          <h1> Iniciar sesión</h1>
          <Profile/>
          {
            isAuthenticated ? <LogoutButton/> : <LoginButton/>
          }
          
          
        
          
       
    
      </div>

      
  );
}

export default App;
