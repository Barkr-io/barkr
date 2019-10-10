import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Login extends Component{
   render(){
     return(
       <div>
         <form>
           <input id='email'></input>
           <input id='password'></input>
           <button id='loginButton'>Log in</button>
           To register go to <Link to={`/signup`}>Signup page</Link>
         </form>
       </div>
     )
   }
}
export default Login;