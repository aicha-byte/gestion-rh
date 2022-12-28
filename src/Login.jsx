import { Button } from "bootstrap";
import React , {useState} from "react";
import { Link } from "react-router-dom";

export const Login =  (props)=> {

const [email, setEmail] = useState('');
const [pass , setPass]= useState ('');
const handleSubmit =(e) => {
    e.preventDefault();


}
    return (

        <div>
   
 {/* <Link to="/user">user

 <Button variant="light">user</Button> 

 </Link>  */}
   
   
<h2>Login</h2>

<form className="login-form" onSubmit={handleSubmit}>
    <label  htmlform="email">email</label>
<input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
<label  htmlform="passrword">password</label>
<input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="passrword" name="passrword"/>
<button type ="submit">Log In</button>
</form>
<button className="link-btn" onClick={()=> props.onformSwitch('register')}>Don't have an account ? Register here. </button>

</div>
    )

    
}