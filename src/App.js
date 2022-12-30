
import './App.css';
import React , {useState} from "react"
import {Login} from "./Login"
import { Register } from "./Register";
import {  Routes , Route  } from 'react-router-dom';
import User from './User';




function App() {

//   const [currentform , setCurrentform] = useState('login');
//   const toggleform = (formName) => {
// setCurrentform (formName) ;
//   }


  return (
    <div  >


<User/>



      {/* {
currentform ===  "login" ? <Login onformSwitch ={toggleform} /> : <Register onformSwitch ={toggleform}/>

      } */}
    
{/* 
<Routes>
  <Route path='/' element={<Main/>}>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
  <Route path='/user' element={<User/>}></Route>
  </Route>
</Routes> */}


{/* <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/User" element={<User />}></Route> 

      </Routes> */}


    </div>
  );
}

export default App;
