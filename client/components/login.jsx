import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Login extends Component{
   render(){
     return(
       <div>
         <form>
           <input id='email'></input>
           <input id='password'></input>
            
           To register go to <Link to={`/Signup`}>Signup page</Link>
         </form>
       </div>
     )
   }
}
export default Login;