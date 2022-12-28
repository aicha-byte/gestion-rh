
import './App.css';
import React , {useState} from "react"
import {Login} from "./Login"
import { Register } from "./Register";
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import User from './User';
import Main from './Main';




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
    

<Routes>
  <Route path='/' element={<Main/>}>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
  <Route path='/user' element={<User/>}></Route>
  </Route>
</Routes>





    </div>
  );
}

export default App;
