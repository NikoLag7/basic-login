import './App.css';
import  LoginButtom  from "./Components/LoginButtom";
import LogoutButtom from "./Components/LogoutButtom";
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
      {
        isAuthenticated ? <LogoutButtom/> : <LoginButtom/>
      }
      
      <Profile/>
     
      
    </div>
    

      
  );
}

export default App;
