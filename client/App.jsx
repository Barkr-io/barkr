import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import Signup from './components/signup.jsx'
import Login from './components/login.jsx'

class App extends Component{
   render(){
     return(
       <div>
          <Switch>
            <Route exact path="/" component={()=><Login  /> } />
            <Route exact path="/Signup" component={()=><Signup  />}/>
          </Switch>
       </div>
     )
   }
}
export default App;