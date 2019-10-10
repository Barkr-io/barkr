import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Switch, Route } from 'react-router-dom'
import Login from '../components/login.jsx'
import MainContainer from './MainContainer.jsx'

const mapStateToProps = store => ({
    userInfo: store.user.userInfo
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(actions.login(user)),
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
                        <Route exact path="/" component={()=><Login login={this.props.login}/> }/>
                        <Route exact path="/explore" component={()=><MainContainer /> } />
                    </Switch>


            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);