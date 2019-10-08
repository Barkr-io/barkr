import React, {Component} from "react";
import { Link } from 'react-router-dom';


class Signup extends Component{
   render(){
     return(
       <div>
         <form>
           <input id='fname'></input>
           <input id='lname'></input>
           <input id='email'></input>
           <input id='location'></input>
           <input id='password'></input>
           To login go to <Link to={`/`}>Login page</Link>
         </form>
       </div>
     )
   }
}
export default Signup;