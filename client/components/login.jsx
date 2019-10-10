import React, {Component} from "react";

const Login = (props) =>{
    const user = {}
     return(
       <div>
         <form>
           <input id='email' onChange={e=>{
             const { value } = e.target
             user.email = value
            console.log(user);
           }}></input>
           <input id='password' onChange={e=>{
             const { value } = e.target
             user.password = value
             console.log(user);
           }}></input>
          <Link to={`/explore`} className="loginButtun" type="button"><button onClick={()=>props.login(user)}>Login</button></Link>
         </form>
       </div>
     )
    
}
export default Login;