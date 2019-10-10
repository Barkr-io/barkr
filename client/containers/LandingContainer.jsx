import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SignUp from '../components/SignUp.jsx';
import Login from '../components/Login.jsx'

const mapStateToProps = store => ({
    users: store.users.userData,
    dogs: store.users.dogData
});
  
const mapDispatchToProps = dispatch => ({
    login: () => dispatch(actions.login),
    signUp: () => dispatch(actions.signUp)
});

class LandingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="landing">
                <Login/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);