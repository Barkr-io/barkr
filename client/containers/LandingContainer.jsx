import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Switch, Route } from 'react-router-dom'
import Login from '../components/login.jsx'
import Signup from '../components/signup.jsx'

const mapStateToProps = store => ({
    userInfo: store.user.userInfo
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(actions.login()),
    signUp: () => dispatch(actions.signup())
})

class LandingContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                    This is the landing page
                    <Switch>
                        <Route exact path="/" component={()=><Login /> }/>
                        <Route exact path="/signup" component={()=><Signup /> } />
                    </Switch>


            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);