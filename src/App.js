
import './App.css';
import React , {useState} from "react"
import {Login} from "./Login"
import { Register } from "./Register";


function App() {

  const [currentform , setCurrentform] = useState('login');
  const toggleform = (formName) => {
setCurrentform (formName) ;

  }






  return (
    <div className="App" >
      {
currentform ===  "login" ? <Login onformSwitch ={toggleform} /> : <Register onformSwitch ={toggleform}/>

      }
    

    </div>
  );
}

export default App;
